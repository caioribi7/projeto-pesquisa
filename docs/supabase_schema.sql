-- ============================================================
-- ECOQUEST — Supabase Schema
-- Execute este SQL no SQL Editor do Supabase Dashboard
-- ============================================================

-- ============================================================
-- 1. USERS
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  level INTEGER DEFAULT 1,
  xp INTEGER DEFAULT 0,
  seeds INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  last_login TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT users_name_size CHECK (char_length(name) BETWEEN 2 AND 20),
  CONSTRAINT users_progress_bounds CHECK (level BETWEEN 1 AND 100 AND xp BETWEEN 0 AND 100000 AND seeds BETWEEN 0 AND 100000)
);

CREATE INDEX IF NOT EXISTS idx_users_name ON users(name);
CREATE INDEX IF NOT EXISTS idx_users_xp ON users(xp DESC);

-- ============================================================
-- 2. SCORES (Ranking)
-- ============================================================
CREATE TABLE IF NOT EXISTS scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  biome TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'medio',
  created_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT scores_score_bounds CHECK (score BETWEEN 0 AND 100),
  CONSTRAINT scores_difficulty_known CHECK (difficulty IN ('facil', 'medio', 'dificil'))
);

CREATE INDEX IF NOT EXISTS idx_scores_score ON scores(score DESC);
CREATE INDEX IF NOT EXISTS idx_scores_user ON scores(user_id);

-- ============================================================
-- 3. ACHIEVEMENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id);

-- ============================================================
-- 4. ROW LEVEL SECURITY (Permissões anônimas para feira)
-- ============================================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Usuários: leitura e criação pública para demonstrações.
-- Não libere UPDATE anônimo em produção; isso permite manipular ranking.
CREATE POLICY "anon_select_users" ON users FOR SELECT USING (true);
CREATE POLICY "anon_insert_users" ON users FOR INSERT WITH CHECK (true);

-- Pontuações
CREATE POLICY "anon_select_scores" ON scores FOR SELECT USING (true);
CREATE POLICY "anon_insert_scores" ON scores FOR INSERT WITH CHECK (true);

-- Conquistas
CREATE POLICY "anon_select_achievements" ON achievements FOR SELECT USING (true);
CREATE POLICY "anon_insert_achievements" ON achievements FOR INSERT WITH CHECK (true);
