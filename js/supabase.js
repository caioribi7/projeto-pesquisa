// ============================================================
// ECOQUEST — Supabase Database Integration
// ============================================================
// Para ativar, preencha SUPABASE_URL e SUPABASE_ANON_KEY abaixo.
// Schema SQL está em /docs/supabase_schema.sql
// ============================================================

const SUPABASE_CONFIG = {
  url: 'https://buddknzzrvunobjqgahn.supabase.co',
  anonKey: 'sb_publishable_oiqAfhB968VMoSJ1vVDTlw_aJ-gnCH2',
  enabled: true,
};

const supabaseClient = {
  async request(endpoint, options = {}) {
    if (!SUPABASE_CONFIG.enabled) return null;
    const url = `${SUPABASE_CONFIG.url}/rest/v1/${endpoint}`;
    const headers = {
      'apikey': SUPABASE_CONFIG.anonKey,
      'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...options.headers,
    };
    try {
      const res = await fetch(url, { ...options, headers });
      if (!res.ok) throw new Error(`Supaba se error: ${res.status}`);
      return await res.json();
    } catch (e) {
      console.warn('[Supabase]', e.message);
      return null;
    }
  },

  // ─── USERS ───────────────────────────────────────────────
  async getUser(name) {
    const data = await this.request(`users?name=eq.${encodeURIComponent(name)}&limit=1`);
    return data?.[0] || null;
  },

  async getAllUsers() {
    const data = await this.request('users?order=xp.desc&limit=100');
    return data || [];
  },

  async createUser(name) {
    return await this.request('users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        level: 1,
        xp: 0,
        seeds: 0,
        created_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
      }),
    });
  },

  async updateUser(name, updates) {
    return await this.request(`users?name=eq.${encodeURIComponent(name)}`, {
      method: 'PATCH',
      body: JSON.stringify({ ...updates, last_login: new Date().toISOString() }),
    });
  },

  async upsertUser(name, level, xp, seeds) {
    const existing = await this.getUser(name);
    if (existing) {
      if (xp > (existing.xp || 0) || level > (existing.level || 1)) {
        await this.updateUser(name, { level, xp, seeds });
      }
      return existing.id;
    } else {
      const created = await this.createUser(name);
      return created?.[0]?.id || null;
    }
  },

  // ─── RANKING ─────────────────────────────────────────────
  async getRanking() {
    const users = await this.getAllUsers();
    if (!users.length) return [];

    const result = [];
    for (const u of users) {
      const achData = await this.request(
        `achievements?user_id=eq.${u.id}&select=achievement_id`
      );
      const achievements = achData ? achData.map(a => a.achievement_id) : [];

      result.push({
        id: u.id,
        name: u.name,
        level: u.level || 1,
        xp: u.xp || 0,
        seeds: u.seeds || 0,
        achievements,
      });
    }

    return result.sort((a, b) => b.xp - a.xp);
  },

  // ─── SCORES ──────────────────────────────────────────────
  async saveScore(userId, score, biome, difficulty) {
    return await this.request('scores', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        score,
        biome,
        difficulty,
        created_at: new Date().toISOString(),
      }),
    });
  },

  async getAllScores(limit = 500) {
    const data = await this.request(
      `scores?select=score,biome,difficulty,created_at,user_id&order=created_at.desc&limit=${limit}`
    );
    return data || [];
  },

  async getGlobalPerformance() {
    const scores = await this.getAllScores(500);
    if (!scores.length) return null;

    const byBiome = {};
    let totalScore = 0, totalQuizzes = scores.length, totalUsers = new Set();

    scores.forEach(s => {
      const b = s.biome || 'geral';
      if (!byBiome[b]) byBiome[b] = { sum: 0, count: 0 };
      byBiome[b].sum += s.score;
      byBiome[b].count++;
      totalScore += s.score;
      if (s.user_id) totalUsers.add(s.user_id);
    });

    const biomeAverages = Object.entries(byBiome).map(([biome, d]) => ({
      biome,
      avg: Math.round(d.sum / d.count),
      count: d.count,
    }));

    return {
      overallAvg: Math.round(totalScore / totalQuizzes),
      totalQuizzes,
      totalUsers: totalUsers.size,
      biomeAverages,
    };
  },

  // ─── ACHIEVEMENTS ────────────────────────────────────────
  async unlockAchievement(userId, achievementId) {
    return await this.request('achievements', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        achievement_id: achievementId,
        unlocked_at: new Date().toISOString(),
      }),
    });
  },

  async getUserAchievements(userId) {
    const data = await this.request(
      `achievements?user_id=eq.${userId}&select=achievement_id`
    );
    return data ? data.map(a => a.achievement_id) : [];
  },

  // ─── SYNC ────────────────────────────────────────────────
  async syncGameState(localState) {
    const userId = await this.upsertUser(
      localState.playerName,
      localState.level,
      localState.xp,
      localState.seeds
    );
    return userId;
  },

  async syncAll(localState) {
    const userId = await this.syncGameState(localState);
    if (!userId) return null;

    for (const achId of localState.achievements) {
      await this.unlockAchievement(userId, achId);
    }

    return userId;
  },
};
