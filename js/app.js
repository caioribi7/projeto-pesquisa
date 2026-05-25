// ============================================================
// ECOQUEST — Main Application
// ============================================================

// ─── STATE ───────────────────────────────────────────────────
let state = {
  playerName: 'Jogador',
  loggedIn: false,
  level: 1,
  xp: 0,
  xpToNext: 200,
  seeds: 0,
  combo: 0,
  maxCombo: 0,
  soundEnabled: true,

  currentBiome: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  answersCorrect: 0,
  answersWrong: 0,
  totalQuestions: 10,
  isAnswering: false,
  performanceHistory: [],

  rankings: [],
  achievements: [],
  missions: {
    daily: [
      { id: 'd1', name: 'Responda 5 perguntas sobre água', icon: '💧', done: 0, target: 5, reward: 100, completed: false },
      { id: 'd2', name: 'Acerte 3 perguntas consecutivas', icon: '🔥', done: 0, target: 3, reward: 50, completed: false },
      { id: 'd3', name: 'Jogue 2 quizzes', icon: '🎮', done: 0, target: 2, reward: 80, completed: false },
    ],
    weekly: [
      { id: 'w1', name: 'Complete 3 quizzes de florestas', icon: '🌲', done: 0, target: 3, reward: 500, completed: false },
      { id: 'w2', name: 'Mantenha combo de 10', icon: '🔥', done: 0, target: 10, reward: 300, completed: false },
    ]
  },
  quizCount: 0,
  questionsAnswered: 0,
  consecutiveCorrect: 0,

  selectedDifficulty: 'facil',

  waitingForExplanation: false,
  quizFinished: false,

  biomesPlayed: [],
  biomesCompleted: {},
  biomeScores: {},
};

const ACHIEVEMENTS_DATA = [
  { id: 'a1', name: 'Amigo da Floresta', desc: 'Responda 100 perguntas sobre florestas', icon: '🌲', rarity: 3, target: 100, category: 'florestas', progress: 0 },
  { id: 'a2', name: 'Mestre da Reciclagem', desc: 'Acerte 50 perguntas sobre reciclagem', icon: '♻️', rarity: 3, target: 50, category: 'reciclagem', progress: 0 },
  { id: 'a3', name: 'Protetor dos Oceanos', desc: 'Responda 100 perguntas sobre oceanos', icon: '🌊', rarity: 3, target: 100, category: 'oceanos', progress: 0 },
  { id: 'a4', name: 'Cientista', desc: 'Acerte 200 perguntas no total', icon: '🧬', rarity: 4, target: 200, progress: 0 },
  { id: 'a5', name: 'Primeiro Passo', desc: 'Complete seu primeiro quiz', icon: '🌱', rarity: 1, target: 1, progress: 0 },
  { id: 'a6', name: 'Combo 5', desc: 'Acerte 5 perguntas consecutivas', icon: '🔥', rarity: 2, target: 5, progress: 0 },
  { id: 'a7', name: 'Combo 10', desc: 'Acerte 10 perguntas consecutivas', icon: '🔥', rarity: 3, target: 10, progress: 0 },
  { id: 'a8', name: 'Defensor do Clima', desc: 'Responda 50 perguntas sobre clima', icon: '🌡️', rarity: 3, target: 50, category: 'clima', progress: 0 },
  { id: 'a9', name: 'Amigo da Biodiversidade', desc: 'Responda 50 perguntas sobre biodiversidade', icon: '🧬', rarity: 3, target: 50, category: 'biodiversidade', progress: 0 },
  { id: 'a10', name: 'Explorador', desc: 'Jogue quizzes em todos os biomas', icon: '🌍', rarity: 5, target: 12, progress: 0 },
  { id: 'a11', name: 'Amigo do Solo', desc: 'Responda 50 perguntas sobre geologia', icon: '⛰️', rarity: 3, target: 50, category: 'geologia', progress: 0 },
  { id: 'a12', name: 'Amigo da Agricultura', desc: 'Responda 50 perguntas sobre agricultura', icon: '🌾', rarity: 3, target: 50, category: 'agricultura', progress: 0 },
  { id: 'a13', name: 'Protetor dos Animais', desc: 'Responda 50 perguntas sobre animais', icon: '🦏', rarity: 3, target: 50, category: 'fauna', progress: 0 },
  { id: 'a14', name: 'Arquiteto Verde', desc: 'Responda 50 perguntas sobre cidades', icon: '🏙️', rarity: 3, target: 50, category: 'cidades', progress: 0 },
  { id: 'a15', name: 'Colecionador', desc: 'Complete quizzes em todos os biomas', icon: '👑', rarity: 5, target: 12, progress: 0 },
];

const FRASES = [
  '"Cada acerto é uma árvore plantada no futuro."',
  '"O conhecimento é a luz que ilumina o caminho da sustentabilidade."',
  '"Pequenas ações geram grandes mudanças."',
  '"A natureza não herda a Terra dos ancestrais, ela a toma emprestada de seus filhos."',
  '"Reciclar é dar uma nova chance ao planeta."',
  '"O futuro é verde para quem planta hoje."',
  '"A Terra é nossa casa. Cuide dela como tal."',
  '"Saber é o primeiro passo para preservar."',
];

const RANKS = [
  { min: 0, nome: '🌱 Semente', emoji: '🌱' },
  { min: 30, nome: '🌿 Broto', emoji: '🌿' },
  { min: 50, nome: '🌳 Amigo da Floresta', emoji: '🌳' },
  { min: 70, nome: '🦉 Curioso', emoji: '🦉' },
  { min: 85, nome: '🌟 Expert', emoji: '🌟' },
  { min: 95, nome: '👑 Mestre', emoji: '👑' },
];

const MEDALS = [
  { min: 0, emoji: '🥉', nome: 'Folha de Bronze' },
  { min: 50, emoji: '🥈', nome: 'Folha Prateada' },
  { min: 80, emoji: '🥇', nome: 'Folha Dourada' },
  { min: 95, emoji: '💎', nome: 'Semente Ancestral' },
];

const DIFFICULTY_CONFIG = {
  facil: { multiplier: 1, label: 'Fácil' },
  medio: { multiplier: 1.5, label: 'Médio' },
  dificil: { multiplier: 2, label: 'Difícil' },
};

// ─── SOUND (simple oscillator) ──────────────────────────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = 0.08;

    switch (type) {
      case 'correct':
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
        break;
      case 'wrong':
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
        break;
      case 'click':
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
        break;
      case 'levelup':
        osc.frequency.setValueAtTime(392, ctx.currentTime);
        osc.frequency.setValueAtTime(523, ctx.currentTime + 0.15);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.3);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.45);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.7);
        break;
    }
  } catch (e) {}
}

// ─── PARTICLES SYSTEM ──────────────────────────────────────
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let particleFrame;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3 - 0.15;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.005;
    this.color = Math.random() > 0.5 ?
      `rgba(46, 204, 113, ` :
      `rgba(26, 188, 156, `;
    this.life = Math.random() * 0.5 + 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.pulse += this.pulseSpeed;
    this.opacity += (Math.sin(this.pulse) * 0.001);
    this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));

    if (this.y < -10 || this.y > canvas.height + 10 ||
        this.x < -10 || this.x > canvas.width + 10) {
      this.reset();
      this.y = canvas.height + 5;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + this.opacity + ')';
    ctx.fill();

    if (this.size > 2) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color + (this.opacity * 0.15) + ')';
      ctx.fill();
    }
  }
}

function initParticles(count = 120) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, canvas.width * 0.7
  );
  gradient.addColorStop(0, 'rgba(13, 27, 20, 1)');
  gradient.addColorStop(1, 'rgba(10, 14, 26, 1)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  particleFrame = requestAnimationFrame(animateParticles);
}

// Burst particles effect
function burstParticles(x, y, color, count = 20) {
  const burst = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
    const speed = Math.random() * 4 + 1;
    burst.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 3 + 1,
      life: 1,
      color: color || 'rgba(46, 204, 113, '
    });
  }

  function animateBurst() {
    let alive = false;
    burst.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.life -= 0.02;
      if (p.life > 0) {
        alive = true;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.life * 0.8) + ')';
        ctx.fill();
      }
    });
    if (alive) requestAnimationFrame(animateBurst);
  }
  animateBurst();
}

// ─── PARALLAX ENGINE ───────────────────────────────────────
let mouseX = 0, mouseY = 0;
let targetMX = 0, targetMY = 0;

document.addEventListener('mousemove', (e) => {
  targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
});

let parallaxRAF;

function updateParallax() {
  mouseX += (targetMX - mouseX) * 0.05;
  mouseY += (targetMY - mouseY) * 0.05;

  const layers = document.querySelectorAll('.parallax-layer');
  layers.forEach(layer => {
    const speed = parseFloat(layer.dataset.speed) || 0.03;
    const x = mouseX * speed * 30;
    const y = mouseY * speed * 20;
    layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  parallaxRAF = requestAnimationFrame(updateParallax);
}

// ─── SCREEN MANAGEMENT ─────────────────────────────────────
let currentScreen = 'screen-initial';
let screenHistory = [];

function showScreen(screenId, direction) {
  const oldScreen = document.getElementById(currentScreen);
  const newScreen = document.getElementById(screenId);
  if (!newScreen) return;

  if (oldScreen) {
    oldScreen.classList.remove('active');
    if (direction === 'left') {
      oldScreen.classList.add('exit-left');
    } else if (direction === 'right') {
      oldScreen.classList.add('exit-right');
    } else {
      oldScreen.classList.add('exit-up');
    }
    setTimeout(() => {
      oldScreen.classList.remove('exit-left', 'exit-right', 'exit-up');
    }, 600);
  }

  setTimeout(() => {
    newScreen.classList.add('active');
  }, 50);

  currentScreen = screenId;
  screenHistory.push(screenId);

  const hud = document.getElementById('hud');
  const showHud = !['screen-initial', 'screen-login', 'screen-result', 'screen-about', 'screen-achievements', 'screen-ranking', 'screen-performance', 'screen-missions', 'screen-settings', 'screen-biome-select', 'screen-roadmap'].includes(screenId);
  hud.style.display = showHud ? 'flex' : 'none';

  updateHUD();
  playSound('click');

  if (screenId === 'screen-achievements') renderAchievements();
  if (screenId === 'screen-ranking') renderRanking();
  if (screenId === 'screen-missions') renderMissions();
  if (screenId === 'screen-roadmap') renderRoadmap();
  if (screenId === 'screen-performance') renderPerformance();
}

// ─── HUD ────────────────────────────────────────────────────
function updateHUD() {
  document.getElementById('hud-seeds').textContent = state.seeds;
  document.getElementById('hud-level').textContent = state.level;
  document.getElementById('hud-combo').textContent = state.consecutiveCorrect;
  document.getElementById('hud-xp').textContent = state.xp;
  document.getElementById('hud-username').textContent = state.playerName;
}

// ─── GAME START ─────────────────────────────────────────────
function startGame() {
  showScreen('screen-login');
}

// ─── BIOME SELECTOR ─────────────────────────────────────────
function showBiomeSelector() {
  const container = document.getElementById('biome-selector');
  container.innerHTML = '';
  Object.entries(PERGUNTAS).forEach(([key, biome]) => {
    const div = document.createElement('div');
    div.className = 'biome-option';
    div.dataset.biome = key;
    div.innerHTML = `
      <div class="biome-option-icon">${biome.icone}</div>
      <div class="biome-option-name">${biome.nome}</div>
    `;
    div.addEventListener('click', () => {
      container.querySelectorAll('.biome-option').forEach(el => el.classList.remove('selected'));
      div.classList.add('selected');
      state.currentBiome = key;
    });
    if (!state.currentBiome || key === state.currentBiome) {
      div.classList.add('selected');
      state.currentBiome = key;
    }
    container.appendChild(div);
  });
  showScreen('screen-biome-select');
}

function selectDifficulty(el) {
  document.querySelectorAll('.difficulty-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedDifficulty = el.dataset.diff;
}

// ─── QUIZ ───────────────────────────────────────────────────
function startQuiz() {
  if (!state.currentBiome) {
    state.currentBiome = Object.keys(PERGUNTAS)[0];
  }

  const biome = PERGUNTAS[state.currentBiome];

  const allQuestions = [...biome.perguntas];
  const shuffled = shuffle(allQuestions);
  state.currentQuestions = shuffled.slice(0, Math.min(10, shuffled.length));
  state.currentIndex = 0;
  state.score = 0;
  state.answersCorrect = 0;
  state.answersWrong = 0;
  state.isAnswering = false;
  state.maxCombo = 0;
  state.totalQuestions = state.currentQuestions.length;
  state.quizFinished = false;
  state.waitingForExplanation = false;

  document.getElementById('quiz-biome-icon').textContent = biome.icone;
  document.getElementById('quiz-biome-name').textContent = biome.nome;
  document.getElementById('quiz-difficulty').textContent =
    DIFFICULTY_CONFIG[state.selectedDifficulty]?.label || 'Fácil';

  showScreen('screen-quiz');
  loadQuestion();
}

function loadQuestion() {
  if (state.currentIndex >= state.currentQuestions.length) {
    finishQuiz();
    return;
  }

  const q = state.currentQuestions[state.currentIndex];
  state.isAnswering = false;

  document.getElementById('quiz-q-number').textContent = `PERGUNTA ${state.currentIndex + 1}`;
  document.getElementById('quiz-question').textContent = q.pergunta;
  document.getElementById('quiz-progress').textContent = `${state.currentIndex + 1}/${state.totalQuestions}`;
  document.getElementById('progress-fill').style.width = `${((state.currentIndex + 1) / state.totalQuestions) * 100}%`;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  document.getElementById('quiz-combo').textContent = `🔥 Combo: ${state.consecutiveCorrect}`;

  const letters = ['A', 'B', 'C', 'D'];
  q.alternativas.forEach((alt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${alt}</span>
    `;
    div.addEventListener('click', () => selectAnswer(i));
    optionsContainer.appendChild(div);
  });
}

function selectAnswer(index) {
  if (state.isAnswering) return;
  state.isAnswering = true;

  const q = state.currentQuestions[state.currentIndex];
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(o => o.classList.add('disabled'));

  const rect = options[index].getBoundingClientRect();

  if (index === q.correta) {
    options[index].classList.add('correct');
    state.answersCorrect++;
    state.consecutiveCorrect++;
    state.score += calculatePoints();
    playSound('correct');
    showFeedback(true);
    burstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 'rgba(46, 204, 113, ');
    showXPFloat(rect.left + rect.width / 2, rect.top, `+${calculatePoints()} XP`);
    ecoReact('celebrate');

    if (state.consecutiveCorrect > state.maxCombo) {
      state.maxCombo = state.consecutiveCorrect;
    }

    checkComboAchievements();
  } else {
    options[index].classList.add('wrong');
    options[q.correta].classList.add('correct');
    state.answersWrong++;
    state.consecutiveCorrect = 0;
    playSound('wrong');
    showFeedback(false, q.explicacao);
    burstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 'rgba(231, 76, 60, ');
    ecoReact('sad');
  }

  document.getElementById('quiz-combo').textContent = `🔥 Combo: ${state.consecutiveCorrect}`;
  document.getElementById('quiz-xp').textContent = `⭐ XP: +${calculatePoints()}`;

  if (index === q.correta) {
    setTimeout(() => {
      state.currentIndex++;
      loadQuestion();
    }, 1000);
  } else {
    state.waitingForExplanation = true;
  }
}

function calculatePoints() {
  const base = 100;
  const comboBonus = Math.min(state.consecutiveCorrect, 10) * 10;
  return base + comboBonus;
}

function showFeedback(correct, explanation) {
  const overlay = document.getElementById('explanation-overlay');
  const icon = document.getElementById('explanation-icon');
  const text = document.getElementById('explanation-text');

  if (correct) {
    icon.textContent = '✅';
    text.textContent = 'Resposta correta! ✨';
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 800);
  } else {
    icon.textContent = '💡';
    text.textContent = explanation || 'A resposta correta está destacada em verde.';
    overlay.classList.add('active');
  }
}

function closeExplanation() {
  document.getElementById('explanation-overlay').classList.remove('active');
  if (state.waitingForExplanation && !state.quizFinished) {
    state.waitingForExplanation = false;
    state.currentIndex++;
    loadQuestion();
  }
}

function showXPFloat(x, y, text) {
  const el = document.createElement('div');
  el.className = 'xp-float';
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

function ecoReact(type) {
  const el = document.getElementById('quiz-eco');
  if (!el) return;
  el.classList.remove('celebrate', 'sad');
  void el.offsetWidth;
  el.classList.add(type);
  if (type === 'celebrate') {
    burstParticles(
      el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2,
      el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2,
      'rgba(46, 204, 113, ',
      12
    );
  }
}

function cancelQuiz() {
  document.getElementById('explanation-overlay').classList.remove('active');
  state.waitingForExplanation = false;
  state.quizFinished = false;
  showScreen('screen-menu');
}

function finishQuiz() {
  if (state.quizFinished) return;
  state.quizFinished = true;
  const total = state.totalQuestions;
  const percent = total > 0 ? Math.round((state.answersCorrect / total) * 100) : 0;

  // Calculate XP earned
  const xpEarned = state.score;
  state.xp += xpEarned;
  state.seeds += state.answersCorrect;

  // Check level up
  let leveledUp = false;
  while (state.xp >= state.xpToNext) {
    state.xp -= state.xpToNext;
    state.level++;
    state.xpToNext = Math.floor(state.xpToNext * 1.3);
    leveledUp = true;
  }

  // Update quiz count
  state.quizCount++;
  state.questionsAnswered += state.answersCorrect;

  // Update biome-specific achievement progress
  if (state.currentBiome) {
    if (!state.biomesPlayed.includes(state.currentBiome)) {
      state.biomesPlayed.push(state.currentBiome);
    }
    const prev = state.biomeScores[state.currentBiome] || 0;
    if (state.score > prev) {
      state.biomeScores[state.currentBiome] = state.score;
    }
    if (percent >= 60 && !state.biomesCompleted[state.currentBiome]) {
      state.biomesCompleted[state.currentBiome] = true;
    }

    ACHIEVEMENTS_DATA.forEach(a => {
      if (a.category === state.currentBiome) {
        a.progress = Math.min(a.target, a.progress + state.answersCorrect);
      }
    });
  }
  // Update total progress
  ACHIEVEMENTS_DATA.forEach(a => {
    if (!a.category && a.id === 'a4') {
      a.progress = Math.min(a.target, state.questionsAnswered);
    }
    if (a.id === 'a5') {
      a.progress = Math.min(a.target, 1);
    }
    if (a.id === 'a6' && state.maxCombo >= 5) {
      a.progress = Math.min(a.target, 5);
    }
    if (a.id === 'a7' && state.maxCombo >= 10) {
      a.progress = Math.min(a.target, 10);
    }
    if (a.id === 'a10') {
      a.progress = Math.min(a.target, state.biomesPlayed.length);
    }
    if (a.id === 'a15') {
      a.progress = Math.min(a.target, Object.keys(state.biomesCompleted).length);
    }
  });

  // Update missions
  state.missions.daily.forEach(m => {
    if (m.id === 'd1') m.done += state.answersCorrect;
    if (m.id === 'd2' && state.maxCombo >= 3) m.done = m.target;
    if (m.id === 'd3') m.done = Math.min(m.target, m.done + 1);
    if (m.done >= m.target) m.completed = true;
  });

  checkAchievements();

  state.performanceHistory.push({
    date: new Date().toISOString().slice(0, 10),
    biome: state.currentBiome,
    biomeLabel: PERGUNTAS[state.currentBiome]?.nome || state.currentBiome,
    score: percent,
    xp: xpEarned,
    level: state.level,
    correct: state.answersCorrect,
    total: state.totalQuestions,
  });
  if (state.performanceHistory.length > 50) {
    state.performanceHistory = state.performanceHistory.slice(-50);
  }

  saveGame();
  updateHUD();

  saveQuizScoreToSupabase(percent);

  showResult(percent, xpEarned, leveledUp);
}

async function saveQuizScoreToSupabase(percent) {
  if (!SUPABASE_CONFIG.enabled || !state.loggedIn) return;
  try {
    const user = await supabaseClient.getUser(state.playerName);
    if (user) {
      await supabaseClient.saveScore(user.id, percent, state.currentBiome || 'geral', state.selectedDifficulty);
    }
  } catch (_) {}
}

// ─── RESULT SCREEN ──────────────────────────────────────────
function showResult(percent, xpEarned, leveledUp) {
  showScreen('screen-result');

  // Tree based on score
  const treeEl = document.getElementById('result-tree');
  treeEl.className = 'sprite-tree';
  if (percent < 30) {
    treeEl.classList.add('dead');
  } else if (percent >= 80 && percent < 95) {
    treeEl.classList.add('flourishing');
  } else if (percent >= 95) {
    treeEl.classList.add('ancestral');
  }

  // Rank
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (percent >= r.min) rank = r;
  }
  document.getElementById('result-rank').textContent = `${rank.emoji} ${rank.nome}`;

  // Medal
  let medal = MEDALS[0];
  for (const m of MEDALS) {
    if (percent >= m.min) medal = m;
  }
  document.getElementById('result-medal').textContent = medal.emoji;

  // Stats
  document.getElementById('result-score').textContent = `${percent}%`;
  document.getElementById('result-xp').textContent = `+${xpEarned}`;
  document.getElementById('result-combo').textContent = state.maxCombo;

  // Phrase
  document.getElementById('result-phrase').textContent = FRASES[Math.floor(Math.random() * FRASES.length)];

  // Level up
  if (leveledUp) {
    setTimeout(() => {
      document.getElementById('levelup-number').textContent = state.level;
      document.getElementById('levelup-overlay').classList.add('active');
      playSound('levelup');
    }, 800);
  }

  // Save to rankings
  state.rankings.push({
    name: state.playerName,
    score: percent,
    xp: state.xp,
    level: state.level,
    date: new Date().toLocaleDateString()
  });
  state.rankings.sort((a, b) => b.xp - a.xp);
  state.rankings = state.rankings.slice(0, 50);
  saveGame();
}

function closeLevelUp() {
  document.getElementById('levelup-overlay').classList.remove('active');
}

// ─── ACHIEVEMENTS ──────────────────────────────────────────
function checkComboAchievements() {
  ACHIEVEMENTS_DATA.forEach(a => {
    if (a.id === 'a6' && state.consecutiveCorrect >= 5) a.progress = a.target;
    if (a.id === 'a7' && state.consecutiveCorrect >= 10) a.progress = a.target;
  });
}

function checkAchievements() {
  const newAchievements = ACHIEVEMENTS_DATA.filter(a => a.progress >= a.target && !state.achievements.includes(a.id));
  newAchievements.forEach(a => {
    if (!state.achievements.includes(a.id)) {
      state.achievements.push(a.id);
    }
  });
  if (newAchievements.length > 0) {
    saveGame();
  }
}

function renderAchievements() {
  const container = document.getElementById('achievements-list');
  container.innerHTML = '';

  ACHIEVEMENTS_DATA.forEach(a => {
    const unlocked = state.achievements.includes(a.id);
    const progress = a.progress || 0;
    const pct = a.target > 0 ? Math.min(100, Math.round((progress / a.target) * 100)) : 0;

    const div = document.createElement('div');
    div.className = `achievement-card ${unlocked ? 'unlocked' : 'locked'}`;
    div.innerHTML = `
      <div class="achievement-icon ${unlocked ? '' : 'locked'}">${a.icon}</div>
      <div class="achievement-info">
        <div class="achievement-name">${unlocked ? '' : '🔒 '}${a.name}</div>
        <div class="achievement-desc">${unlocked ? a.desc : '???'}</div>
        <div class="achievement-rarity">
          ${Array.from({length: 5}, (_, i) =>
            `<span class="star ${i >= a.rarity ? 'empty' : ''}">★</span>`
          ).join('')}
        </div>
        <div class="achievement-progress">
          <div class="achievement-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ─── RANKING ────────────────────────────────────────────────
let rankingCache = null;

function renderRanking() {
  const podium = document.getElementById('ranking-podium');
  const list = document.getElementById('ranking-list');
  podium.innerHTML = '';
  list.innerHTML = '<div style="text-align:center;color:var(--moss-gray);padding:40px;">⏳ Carregando...</div>';

  buildRanking();
}

async function buildRanking() {
  const podium = document.getElementById('ranking-podium');
  const list = document.getElementById('ranking-list');
  if (!podium) return;
  podium.innerHTML = '';
  list.innerHTML = '';

  let players = [];

  if (SUPABASE_CONFIG.enabled) {
    try {
      const remote = await supabaseClient.getRanking();
      if (remote && remote.length > 0) {
        players = remote;
        rankingCache = remote;
      }
    } catch (_) {}
  }

  if (players.length === 0) {
    if (state.rankings.length === 0) {
      list.innerHTML = '<div style="text-align:center;color:var(--moss-gray);padding:40px;">Nenhum jogador ainda. Seja o primeiro!</div>';
      return;
    }
    players = state.rankings.map(p => ({
      name: p.name, level: p.level || 1, xp: p.xp || 0, seeds: 0, achievements: [],
    }));
  }

  const sorted = [...players].sort((a, b) => b.xp - a.xp);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  const podiumData = [
    { pos: 2, item: top3[1], cls: 'second', label: '🥈' },
    { pos: 1, item: top3[0], cls: 'first', label: '🥇' },
    { pos: 3, item: top3[2], cls: 'third', label: '🥉' },
  ];

  podiumData.forEach(d => {
    if (!d.item) return;
    const achCount = d.item.achievements?.length || 0;
    const div = document.createElement('div');
    div.className = `ranking-podium-item ${d.cls}`;
    div.innerHTML = `
      <div style="font-size:1.5rem;margin-bottom:4px;">${d.label}</div>
      <div class="ranking-podium-avatar">🧑‍🌾</div>
      <div class="ranking-podium-name">${d.item.name}</div>
      <div class="ranking-podium-score">${d.item.xp} XP</div>
      <div style="font-size:0.7rem;color:var(--moss-gray);">Nv. ${d.item.level} · ${achCount}🏅</div>
    `;
    podium.appendChild(div);
  });

  rest.forEach((player, i) => {
    const row = document.createElement('div');
    row.className = 'ranking-row';
    const maxXp = sorted[0]?.xp || 1;
    const achCount = player.achievements?.length || 0;

    row.innerHTML = `
      <div class="ranking-pos">#${i + 4}</div>
      <div class="ranking-avatar">🧑‍🌾</div>
      <div class="ranking-name">${player.name}</div>
      <div class="ranking-score-bar">
        <div class="ranking-score-fill" style="width:${(player.xp / maxXp) * 100}%"></div>
      </div>
      <div class="ranking-score-value">${player.xp} XP · Nv.${player.level} · ${achCount}🏅</div>
    `;
    list.appendChild(row);
  });
}

// ─── MISSIONS ───────────────────────────────────────────────
function renderMissions() {
  const daily = document.getElementById('missions-daily');
  const weekly = document.getElementById('missions-weekly');
  daily.innerHTML = '';
  weekly.innerHTML = '';

  state.missions.daily.forEach(m => {
    const div = document.createElement('div');
    div.className = `mission-card ${m.completed ? 'completed' : ''}`;
    div.innerHTML = `
      <div class="mission-icon">${m.icon}</div>
      <div class="mission-info">
        <div class="mission-name">${m.name}</div>
        <div class="mission-reward">🎁 ${m.reward} XP</div>
      </div>
      <div style="font-family:var(--font-display);font-size:0.8rem;color:${m.completed ? 'var(--emerald-glow)' : 'var(--moss-gray)'}">
        ${m.done}/${m.target}
      </div>
      <div class="mission-check">${m.completed ? '✅' : '⏳'}</div>
    `;
    daily.appendChild(div);
  });

  state.missions.weekly.forEach(m => {
    const div = document.createElement('div');
    div.className = `mission-card ${m.completed ? 'completed' : ''}`;
    div.innerHTML = `
      <div class="mission-icon">${m.icon}</div>
      <div class="mission-info">
        <div class="mission-name">${m.name}</div>
        <div class="mission-reward">🎁 ${m.reward} XP</div>
      </div>
      <div style="font-family:var(--font-display);font-size:0.8rem;color:${m.completed ? 'var(--emerald-glow)' : 'var(--moss-gray)'}">
        ${m.done}/${m.target}
      </div>
      <div class="mission-check">${m.completed ? '✅' : '⏳'}</div>
    `;
    weekly.appendChild(div);
  });
}

// ─── PERFORMANCE DASHBOARD ──────────────────────────────────
let perfAnimId = null;
let perfHoveredBar = -1;
let perfBarRects = [];
let perfGeneration = 0;

function renderPerformance() {
  perfGeneration++;
  const statsEl = document.getElementById('perf-stats');
  // Hide tooltip from any previous render
  const tooltip = document.getElementById('perf-tooltip');
  if (tooltip) tooltip.classList.remove('visible');
  // Clean old canvas listeners
  const oldCanvas = document.getElementById('perf-chart');
  if (oldCanvas) {
    const clone = oldCanvas.cloneNode(true);
    oldCanvas.parentNode?.replaceChild(clone, oldCanvas);
  }

  statsEl.innerHTML = Array(5).fill(0).map(() =>
    '<div class="perf-stat-card"><div class="perf-stat-label">---</div><div class="perf-stat-value">--</div></div>'
  ).join('') +
    '<div class="perf-icons-row" style="opacity:0.3;">⏳</div>';

  if (perfAnimId) { cancelAnimationFrame(perfAnimId); perfAnimId = null; }

  requestAnimationFrame(() => buildPerfDashboard());
}

async function buildPerfDashboard() {
  const statsEl = document.getElementById('perf-stats');
  const canvas = document.getElementById('perf-chart');
  const tooltip = document.getElementById('perf-tooltip');
  if (!statsEl || !canvas || !tooltip) return;

  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) {
    setTimeout(() => buildPerfDashboard(), 200);
    return;
  }

  const gen = perfGeneration;

  let perfData = null;
  if (SUPABASE_CONFIG.enabled) {
    try { perfData = await supabaseClient.getGlobalPerformance(); } catch (_) {}
  }
  if (!perfData && state.performanceHistory.length > 0) {
    const byBiome = {};
    state.performanceHistory.forEach(d => {
      const b = d.biome || 'geral';
      if (!byBiome[b]) byBiome[b] = { sum: 0, count: 0 };
      byBiome[b].sum += d.score; byBiome[b].count++;
    });
    perfData = {
      overallAvg: Math.round(state.performanceHistory.reduce((s, d) => s + d.score, 0) / state.performanceHistory.length),
      totalQuizzes: state.performanceHistory.length, totalUsers: 1,
      biomeAverages: Object.entries(byBiome).map(([b, d]) => ({ biome: b, avg: Math.round(d.sum / d.count), count: d.count })),
    };
  }
  if (!perfData || !perfData.biomeAverages.length) {
    statsEl.innerHTML = '<div style="text-align:center;color:var(--moss-gray);padding:30px;">Nenhum dado disponível ainda 🌱</div>';
    return;
  }

  if (gen !== perfGeneration) return;

  const data = perfData.biomeAverages.sort((a, b) => b.avg - a.avg);
  const overall = Math.min(perfData.overallAvg, 100);

  // ── Canvas setup ──
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const c = canvas.getContext('2d');
  c.scale(dpr, dpr);
  const W = rect.width, H = rect.height;

  const pad = { top: 32, bottom: 56, left: 32, right: 20 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  const barGap = 5;
  const barW = Math.min(38, (chartW - barGap * Math.max(data.length - 1, 0)) / Math.max(data.length, 1));
  const totalW = data.length * barW + Math.max(data.length - 1, 0) * barGap;
  const startX = pad.left + (chartW - totalW) / 2;

  // ── Mouse tracking ──
  let mouseX = W / 2, mouseY = H / 2;
  function onMove(e) {
    const r = canvas.getBoundingClientRect();
    mouseX = (e.clientX - r.left) * (W / r.width);
    mouseY = (e.clientY - r.top) * (H / r.height);
    updateTooltip();
  }
  function onLeave() {
    perfHoveredBar = -1;
    tooltip.classList.remove('visible');
    canvas.removeEventListener('mousemove', onMove);
    canvas.removeEventListener('mouseleave', onLeave);
  }
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseleave', onLeave);

  function updateTooltip() {
    let idx = -1;
    for (let i = 0; i < perfBarRects.length; i++) {
      const r2 = perfBarRects[i];
      if (mouseX >= r2.x && mouseX <= r2.x + r2.w && mouseY >= r2.y && mouseY <= r2.y + r2.h) {
        idx = i; break;
      }
    }
    perfHoveredBar = idx;
    if (idx >= 0 && perfBarRects[idx]) {
      const d = data[idx];
      const bi = PERGUNTAS[d.biome];
      const icon = bi ? bi.icone : '🌍';
      const name = bi ? bi.nome : d.biome;
      tooltip.innerHTML = `
        <div class="tt-biome">${icon} ${name}</div>
        <div class="tt-row"><span>Média</span><span class="tt-val">${d.avg}%</span></div>
        <div class="tt-row"><span>Quizzes</span><span class="tt-val">${d.count}</span></div>
      `;
      const r2 = perfBarRects[idx];
      const tx = r2.x + r2.w / 2;
      const ty = Math.max(20, r2.y - 10);
      tooltip.style.left = Math.min(W - 140, Math.max(10, tx - 60)) + 'px';
      tooltip.style.top = ty + 'px';
      tooltip.classList.add('visible');
    } else {
      tooltip.classList.remove('visible');
    }
  }

  // ── Parallax stars ──
  const stars = [];
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: Math.random() * W, y: Math.random() * H * 0.7,
      r: Math.random() * 1.5 + 0.5, o: Math.random() * 0.3 + 0.1,
      s: Math.random() * 0.5 + 0.2,
    });
  }

  // ── Mountain silhouette ──
  const mtPts = [];
  for (let i = 0; i <= 20; i++) {
    mtPts.push({
      x: (i / 20) * W,
      y: H - 20 - Math.random() * 40 - Math.sin(i * 0.6) * 25 - Math.sin(i * 1.3) * 12,
    });
  }

  // ── Animation state ──
  const startTime = performance.now();
  const ANIM_DUR = 1200;
  const BAR_DELAY = 80;

  function easeOutBack(t) {
    const c1 = 1.70158; const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function drawFrame(now) {
    if (gen !== perfGeneration) return;
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / ANIM_DUR);

    // ── Clear ──
    const bgGrad = c.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, 'rgba(10, 18, 26, 0.98)');
    bgGrad.addColorStop(0.4, 'rgba(13, 27, 20, 0.98)');
    bgGrad.addColorStop(1, 'rgba(8, 12, 20, 0.98)');
    c.fillStyle = bgGrad;
    c.fillRect(0, 0, W, H);

    // ── Parallax stars ──
    const px = (targetMX || 0) * 4;
    const py = (targetMY || 0) * 3;
    stars.forEach(s => {
      const sx = s.x + px * s.s;
      const sy = s.y + py * s.s * 0.5;
      if (sx < 0 || sx > W || sy < 0 || sy > H) return;
      c.beginPath();
      c.arc(sx, sy, s.r, 0, Math.PI * 2);
      c.fillStyle = `rgba(255,255,255,${s.o})`;
      c.fill();
    });

    // ── Mountains ──
    c.beginPath();
    c.moveTo(0, H);
    mtPts.forEach(p => {
      const my = p.y + (targetMY || 0) * 2;
      c.lineTo(p.x, my);
    });
    c.lineTo(W, H);
    c.closePath();
    const mtGrad = c.createLinearGradient(0, H - 80, 0, H);
    mtGrad.addColorStop(0, 'rgba(46,204,113,0.04)');
    mtGrad.addColorStop(1, 'rgba(46,204,113,0.01)');
    c.fillStyle = mtGrad;
    c.fill();

    // ── Ground line ──
    c.strokeStyle = 'rgba(46,204,113,0.06)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(0, H - 1);
    c.lineTo(W, H - 1);
    c.stroke();

    // ── Grid ──
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (chartH / 4) * i;
      c.strokeStyle = `rgba(46,204,113,${0.03 + 0.02 * (1 - i / 4)})`;
      c.lineWidth = 0.5;
      c.beginPath();
      c.moveTo(pad.left, y);
      c.lineTo(W - pad.right, y);
      c.stroke();

      const pct = Math.round(100 - (100 / 4) * i);
      c.fillStyle = 'rgba(255,255,255,0.06)';
      c.font = '7px monospace';
      c.textAlign = 'left';
      c.fillText(pct, 2, y + 3);
    }

    // ── Overall avg line (animated) ──
    const avgY = pad.top + chartH - (overall / 100) * chartH;
    const lineProg = easeOutCubic(Math.min(1, progress * 1.3));
    const lineEndX = pad.left + (W - pad.left - pad.right) * lineProg;

    c.setLineDash([3, 4]);
    c.strokeStyle = 'rgba(255,255,255,0.08)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(pad.left, avgY);
    c.lineTo(lineEndX, avgY);
    c.stroke();
    c.setLineDash([]);

    if (lineProg > 0.3) {
      c.fillStyle = 'rgba(255,255,255,0.08)';
      c.font = '6px monospace';
      c.textAlign = 'right';
      c.fillText('média ' + overall + '%', Math.max(lineEndX, 50) - 6, avgY - 3);
    }

    // ── Bars ──
    perfBarRects = [];
    data.forEach((d, i) => {
      const x = startX + i * (barW + barGap);
      const pct = Math.min(d.avg, 100);
      const barDelay = i * BAR_DELAY;
      const barProg = Math.max(0, Math.min(1, (elapsed - barDelay) / (ANIM_DUR * 0.7)));
      const eased = easeOutBack(Math.min(1, barProg));
      const barH = (pct / 100) * chartH * eased;
      const y = pad.top + chartH - barH;
      const isHover = perfHoveredBar === i;

      // Glow on hover
      if (isHover) {
        const glowGrad = c.createRadialGradient(x + barW / 2, y + barH / 2, 0, x + barW / 2, y + barH / 2, barW * 2);
        glowGrad.addColorStop(0, 'rgba(46,204,113,0.1)');
        glowGrad.addColorStop(1, 'rgba(46,204,113,0)');
        c.fillStyle = glowGrad;
        c.fillRect(x - barW, y - 10, barW * 3, barH + 20);
      }

      // Bar shadow
      c.shadowColor = 'rgba(46,204,113,0.08)';
      c.shadowBlur = isHover ? 12 : 4;

      const grad = c.createLinearGradient(x, y, x, pad.top + chartH);
      grad.addColorStop(0, `rgba(46,204,113,${isHover ? 0.95 : 0.75})`);
      grad.addColorStop(0.5, `rgba(26,188,156,${isHover ? 0.6 : 0.4})`);
      grad.addColorStop(1, `rgba(26,188,156,${isHover ? 0.3 : 0.15})`);
      c.fillStyle = grad;

      const r = 2;
      c.beginPath();
      c.moveTo(x + r, y);
      c.lineTo(x + barW - r, y);
      c.quadraticCurveTo(x + barW, y, x + barW, y + r);
      c.lineTo(x + barW, pad.top + chartH);
      c.lineTo(x, pad.top + chartH);
      c.lineTo(x, y + r);
      c.quadraticCurveTo(x, y, x + r, y);
      c.closePath();
      c.fill();
      c.shadowBlur = 0;

      // Bar highlight line on top
      if (barH > 4) {
        c.strokeStyle = `rgba(255,255,255,${isHover ? 0.25 : 0.08})`;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(x + 2, y + 1);
        c.lineTo(x + barW - 2, y + 1);
        c.stroke();
      }

      perfBarRects.push({ x, y, w: barW, h: barH });

      // Value label
      if (barH > 18 && eased > 0.6) {
        c.fillStyle = 'rgba(255,255,255,0.65)';
        c.font = 'bold 8px monospace';
        c.textAlign = 'center';
        c.fillText(d.avg + '%', x + barW / 2, y + 10);
      }

      // Icon
      const bi2 = PERGUNTAS[d.biome];
      const icon = bi2 ? bi2.icone : '🌍';
      c.font = '11px monospace';
      c.textAlign = 'center';
      c.globalAlpha = 0 + 0.7 * Math.min(1, eased * 1.5);
      c.fillText(icon, x + barW / 2, pad.top + chartH + 16);
      c.globalAlpha = 1;
    });

    // ── Bottom label line ──
    c.strokeStyle = 'rgba(46,204,113,0.03)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(pad.left, pad.top + chartH + 2);
    c.lineTo(W - pad.right, pad.top + chartH + 2);
    c.stroke();

    // ── Continue animation ──
    if (progress < 1) {
      perfAnimId = requestAnimationFrame(drawFrame);
    } else {
      perfAnimId = null;
    }
  }

  perfAnimId = requestAnimationFrame(drawFrame);
  drawSidebarBase(perfData, data);
}

function drawSidebarBase(perfData, data) {
  const best = data[0];
  const worst = data[data.length - 1];
  const iconsRow = data.map(d => PERGUNTAS[d.biome]?.icone || '🌍').join('');

  document.getElementById('perf-stats').innerHTML = `
    <div class="perf-stat-card highlight">
      <div class="perf-stat-label">📊 Média Geral</div>
      <div class="perf-stat-value" id="stat-overall">0%</div>
    </div>
    <div class="perf-stat-card">
      <div class="perf-stat-label">🎯 Quizzes</div>
      <div class="perf-stat-value" id="stat-quizzes">0</div>
    </div>
    <div class="perf-stat-card">
      <div class="perf-stat-label">👥 Jogadores</div>
      <div class="perf-stat-value" id="stat-players">0</div>
    </div>
    <div class="perf-stat-card highlight">
      <div class="perf-stat-label">🏆 Melhor Bioma</div>
      <div class="perf-stat-value" id="stat-best">${best ? best.avg + '%' : '-'}</div>
      <div style="font-size:0.6rem;color:var(--moss-gray);">${best ? (PERGUNTAS[best.biome]?.icone || '') + ' ' + (PERGUNTAS[best.biome]?.nome || best.biome) : ''}</div>
    </div>
    <div class="perf-stat-card warn">
      <div class="perf-stat-label">🌱 Melhorar</div>
      <div class="perf-stat-value" id="stat-worst">${worst && worst.avg < 100 ? worst.avg + '%' : '-'}</div>
      <div style="font-size:0.6rem;color:var(--moss-gray);">${worst ? (PERGUNTAS[worst.biome]?.icone || '') + ' ' + (PERGUNTAS[worst.biome]?.nome || worst.biome) : ''}</div>
    </div>
    <div class="perf-icons-row">${iconsRow}</div>
  `;

  animateStats(perfData, data);
}

function animateStats(perfData, data) {
  const elOverall = document.getElementById('stat-overall');
  const elQuizzes = document.getElementById('stat-quizzes');
  const elPlayers = document.getElementById('stat-players');
  if (!elOverall) return;

  const targets = {
    overall: perfData.overallAvg,
    quizzes: perfData.totalQuizzes,
    players: perfData.totalUsers,
  };
  const dur = 1000;
  const t0 = performance.now();

  function tick(now) {
    const p = Math.min(1, (now - t0) / dur);
    const ep = 1 - Math.pow(1 - p, 3);
    if (elOverall) elOverall.textContent = Math.round(ep * targets.overall) + '%';
    if (elQuizzes) elQuizzes.textContent = Math.round(ep * targets.quizzes);
    if (elPlayers) elPlayers.textContent = Math.round(ep * targets.players);
    if (p < 1) requestAnimationFrame(tick);
    else {
      if (elOverall) elOverall.textContent = targets.overall + '%';
      if (elQuizzes) elQuizzes.textContent = targets.quizzes;
      if (elPlayers) elPlayers.textContent = targets.players;
    }
  }
  requestAnimationFrame(tick);
}

// ─── SETTINGS ───────────────────────────────────────────────
function toggleSound(enabled) {
  state.soundEnabled = enabled;
  document.getElementById('sound-on-btn').style.opacity = enabled ? '1' : '0.5';
  document.getElementById('sound-off-btn').style.opacity = enabled ? '0.5' : '1';
}

function saveSettings() {
  saveGame();
  playSound('correct');
}

// ─── SAVE / LOAD ────────────────────────────────────────────
function saveGame() {
  const data = {
    playerName: state.playerName,
    level: state.level,
    xp: state.xp,
    xpToNext: state.xpToNext,
    seeds: state.seeds,
    rankings: state.rankings.slice(0, 50),
    achievements: state.achievements,
    missions: state.missions,
    quizCount: state.quizCount,
    questionsAnswered: state.questionsAnswered,
    consecutiveCorrect: state.consecutiveCorrect,
    soundEnabled: state.soundEnabled,
    achievementsProgress: ACHIEVEMENTS_DATA.map(a => ({ id: a.id, progress: a.progress })),
    biomesPlayed: state.biomesPlayed,
    biomesCompleted: state.biomesCompleted,
    biomeScores: state.biomeScores,
    performanceHistory: state.performanceHistory,
  };

  localStorage.setItem('ecoquest_' + state.playerName, JSON.stringify(data));

  if (SUPABASE_CONFIG.enabled && state.loggedIn) {
    supabaseClient.syncAll(state).catch(() => {});
  }
}

async function loadGame(name) {
  name = name || state.playerName;

  if (SUPABASE_CONFIG.enabled) {
    try {
      const user = await supabaseClient.getUser(name);
      if (user) {
        state.playerName = user.name;
        state.level = user.level || 1;
        state.xp = user.xp || 0;
        state.seeds = user.seeds || 0;

        const remoteAchievements = await supabaseClient.getUserAchievements(user.id);
        if (remoteAchievements) {
          state.achievements = remoteAchievements;
        }
        return true;
      }
    } catch (e) {}
  }

  try {
    const raw = localStorage.getItem('ecoquest_' + name);
    if (!raw) return false;
    const data = JSON.parse(raw);

    state.playerName = data.playerName || name;
    state.level = data.level || 1;
    state.xp = data.xp || 0;
    state.xpToNext = data.xpToNext || 200;
    state.seeds = data.seeds || 0;
    state.rankings = data.rankings || [];
    state.achievements = data.achievements || [];
    state.missions = data.missions || state.missions;
    state.quizCount = data.quizCount || 0;
    state.questionsAnswered = data.questionsAnswered || 0;
    state.consecutiveCorrect = data.consecutiveCorrect || 0;
    state.soundEnabled = data.soundEnabled !== undefined ? data.soundEnabled : true;
    state.biomesPlayed = data.biomesPlayed || [];
    state.biomesCompleted = data.biomesCompleted || {};
    state.biomeScores = data.biomeScores || {};
    state.performanceHistory = data.performanceHistory || [];

    if (data.achievementsProgress) {
      data.achievementsProgress.forEach(ap => {
        const a = ACHIEVEMENTS_DATA.find(a => a.id === ap.id);
        if (a) a.progress = ap.progress || 0;
      });
    }
    return true;
  } catch (e) {
    return false;
  }
}

function resetState() {
  state.level = 1;
  state.xp = 0;
  state.xpToNext = 200;
  state.seeds = 0;
  state.consecutiveCorrect = 0;
  state.rankings = [];
  state.achievements = [];
  state.quizCount = 0;
  state.questionsAnswered = 0;
  state.biomesPlayed = [];
  state.biomesCompleted = {};
  state.biomeScores = {};
  state.performanceHistory = [];
  ACHIEVEMENTS_DATA.forEach(a => a.progress = 0);
  state.missions.daily.forEach(m => { m.done = 0; m.completed = false; });
  state.missions.weekly.forEach(m => { m.done = 0; m.completed = false; });
}

function doLogin() {
  const input = document.getElementById('login-name');
  const status = document.getElementById('login-status');
  const btn = document.getElementById('login-btn');
  const name = input.value.trim();

  if (!name || name.length < 2) {
    status.textContent = 'Digite um nome com pelo menos 2 letras';
    status.style.color = 'var(--toxic-warning)';
    return;
  }

  status.textContent = '⏳ Carregando...';
  status.style.color = 'var(--moss-gray)';
  btn.disabled = true;

  resetState();
  state.playerName = name;

  loadGame(name).then(found => {
    if (found) {
      status.textContent = '✅ Progresso carregado!';
      status.style.color = 'var(--emerald-glow)';
    } else {
      status.textContent = '🌱 Novo jogador! Divirta-se!';
      status.style.color = 'var(--cyan-biolume)';
      saveGame();
    }

    state.loggedIn = true;
    updateHUD();
    toggleSound(state.soundEnabled);
    document.getElementById('settings-display-name').textContent = state.playerName;

    if (SUPABASE_CONFIG.enabled) {
      supabaseClient.getRanking().then(players => {
        if (players && players.length > 0) {
          state.rankings = players.map(p => ({
            name: p.name, score: p.xp, xp: p.xp, level: p.level, date: new Date().toLocaleDateString()
          }));
        }
      }).catch(() => {});
    }

    setTimeout(() => {
      btn.disabled = false;
      showScreen('screen-menu');
    }, 800);
  });
}

function logout() {
  saveGame();
  state.loggedIn = false;
  resetState();
  state.playerName = 'Jogador';
  document.getElementById('settings-display-name').textContent = 'Jogador';
  showScreen('screen-initial');
}

// ─── ROADMAP ───────────────────────────────────────────────
const ROADMAP_NODES = [
  { id: 'florestas', label: 'Florestas', icon: '🌲', x: 400, y: 60, unlocked: true },
  { id: 'biodiversidade', label: 'Biodiversidade', icon: '🧬', x: 550, y: 120, unlocked: true },
  { id: 'fauna', label: 'Animais', icon: '🦏', x: 650, y: 200, unlocked: false },
  { id: 'oceanos', label: 'Oceanos', icon: '🌊', x: 550, y: 280, unlocked: false },
  { id: 'agua', label: 'Água', icon: '💧', x: 400, y: 320, unlocked: false },
  { id: 'clima', label: 'Clima', icon: '🌡️', x: 250, y: 280, unlocked: false },
  { id: 'energia', label: 'Energia', icon: '⚡', x: 150, y: 200, unlocked: false },
  { id: 'reciclagem', label: 'Reciclagem', icon: '♻️', x: 250, y: 120, unlocked: true },
  { id: 'poluicao', label: 'Poluição', icon: '💨', x: 100, y: 120, unlocked: false },
  { id: 'sustentabilidade', label: 'Sustentabilidade', icon: '🌍', x: 100, y: 320, unlocked: false },
  { id: 'agricultura', label: 'Agricultura', icon: '🌾', x: 250, y: 400, unlocked: false },
  { id: 'geologia', label: 'Solo', icon: '⛰️', x: 400, y: 440, unlocked: false },
  { id: 'cidades', label: 'Cidades', icon: '🏙️', x: 550, y: 380, unlocked: false },
];

const ROADMAP_PATHS = [
  { from: 'florestas', to: 'biodiversidade' },
  { from: 'biodiversidade', to: 'fauna' },
  { from: 'florestas', to: 'reciclagem' },
  { from: 'reciclagem', to: 'poluicao' },
  { from: 'reciclagem', to: 'oceanos' },
  { from: 'oceanos', to: 'agua' },
  { from: 'agua', to: 'cidades' },
  { from: 'agua', to: 'sustentabilidade' },
  { from: 'fauna', to: 'cidades' },
  { from: 'poluicao', to: 'energia' },
  { from: 'energia', to: 'clima' },
  { from: 'clima', to: 'sustentabilidade' },
  { from: 'sustentabilidade', to: 'agricultura' },
  { from: 'agricultura', to: 'geologia' },
  { from: 'geologia', to: 'cidades' },
];

function renderRoadmap() {
  const svg = document.getElementById('roadmap-svg');

  const pathsHtml = ROADMAP_PATHS.map(p => {
    const from = ROADMAP_NODES.find(n => n.id === p.from);
    const to = ROADMAP_NODES.find(n => n.id === p.to);
    if (!from || !to) return '';
    const completed = state.biomesCompleted[p.from] && state.biomesCompleted[p.to];
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"
      class="roadmap-path ${completed ? 'completed' : ''}"
      stroke="${completed ? '#2ECC71' : 'rgba(46,204,113,0.15)'}"
      stroke-width="2" stroke-linecap="round"/>`;
  }).join('');

  const nodesHtml = ROADMAP_NODES.map(n => {
    const played = state.biomesPlayed.includes(n.id);
    const completed = state.biomesCompleted[n.id];
    const score = state.biomeScores[n.id] || 0;

    let cls = 'roadmap-node';
    if (completed) cls += ' completed';
    else if (played) cls += ' current';
    else if (!n.unlocked) cls += ' locked';
    else cls += ' current';

    const biome = PERGUNTAS[n.id];
    const color = biome ? biome.cor : '#2ECC71';

    const isLocked = !n.unlocked && !played;
    const clickHandler = isLocked ? '' : `onclick="showBiomeSelectorFromRoadmap('${n.id}')"`;

    return `<g class="${cls}" ${clickHandler}>
      <circle cx="${n.x}" cy="${n.y}" r="22"
        fill="${completed ? color : isLocked ? '#1a1a2e' : 'rgba(13,27,20,0.8)'}"
        stroke="${completed ? color : isLocked ? 'rgba(255,255,255,0.1)' : color}"
        stroke-width="${completed ? 3 : 2}"
        filter="${completed || played ? 'url(#nodeGlow)' : 'none'}"/>
      <text x="${n.x}" y="${n.y + 1}" text-anchor="middle" dominant-baseline="central"
        font-size="${isLocked ? '16' : '14'}">${isLocked ? '🔒' : n.icon}</text>
      <text x="${n.x}" y="${n.y + 38}" text-anchor="middle"
        fill="${played ? color : 'rgba(255,255,255,0.4)'}"
        font-family="'Pixelify Sans', monospace" font-size="10">
        ${completed ? '✓ ' : ''}${n.label}
      </text>
      ${played && !completed ? `
        <text x="${n.x}" y="${n.y + 52}" text-anchor="middle"
          fill="rgba(255,255,255,0.3)" font-size="8">
          ${score} pts
        </text>
      ` : ''}
      ${completed ? `
        <circle cx="${n.x + 15}" cy="${n.y - 15}" r="6" fill="#2ECC71"/>
        <text x="${n.x + 15}" y="${n.y - 14}" text-anchor="middle"
          fill="white" font-size="8" font-weight="bold">✓</text>
      ` : ''}
    </g>`;
  }).join('');

  svg.innerHTML = `
    <defs>
      <filter id="nodeGlow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2ECC71" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#1ABC9C" stop-opacity="0.4"/>
      </linearGradient>
    </defs>
    ${pathsHtml}
    ${nodesHtml}
  `;
}

function showBiomeSelectorFromRoadmap(biomeId) {
  state.currentBiome = biomeId;
  showBiomeSelector();
}

// ─── SUPABASE SYNC ──────────────────────────────────────────
async function syncWithSupabase() {
  const btn = document.getElementById('sync-btn');
  const status = document.getElementById('sync-status');
  if (!btn || !status) return;

  btn.textContent = '⏳ Sincronizando...';
  btn.disabled = true;
  status.textContent = 'Sincronizando...';

  try {
    const userId = await supabaseClient.syncGameState(state);
    if (userId) {
      await supabaseClient.saveScore(userId, state.xp, state.currentBiome || 'geral', 'medio');

      for (const achId of state.achievements) {
        await supabaseClient.unlockAchievement(userId, achId);
      }

      status.textContent = '✅ Sincronizado com servidor!';
      status.style.color = 'var(--emerald-glow)';
      playSound('levelup');
    } else {
      status.textContent = '⚠️ Supabase não configurado. Edite js/supabase.js';
      status.style.color = 'var(--amber-spark)';
    }
  } catch (e) {
    status.textContent = '❌ Erro de conexão';
    status.style.color = 'var(--toxic-warning)';
    console.error('[Supabase] Sync error:', e);
  }

  btn.textContent = '☁️ Sincronizar Agora';
  btn.disabled = false;
}

// ─── HAMBURGER MENU ────────────────────────────────────────
document.getElementById('hud-menu-btn')?.addEventListener('click', () => {
  playSound('click');
  showScreen('screen-menu');
});

// ─── UTILITY ────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── INIT ───────────────────────────────────────────────────
function init() {
  initParticles(150);
  animateParticles();
  updateParallax();
  state.playerName = 'Jogador';
  updateHUD();
}

document.addEventListener('DOMContentLoaded', init);
