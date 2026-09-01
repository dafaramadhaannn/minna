// Database Kosakata Minna no Nihongo
const chapterData = {
  1: [
    { word: "私", hiragana: "わたし", romaji: "watashi", answer: "saya" },
    { word: "私達", hiragana: "わたしたち", romaji: "watashitachi", answer: "Kami / kita" },
    { word: "あなた", hiragana: "あなた", romaji: "anata", answer: "Anda / kamu" },
    { word: "あの人", hiragana: "あのひと", romaji: "ano hito", answer: "orang itu" },
    { word: "あの方", hiragana: "あのかた", romaji: "ano kata", answer: "orang itu (lebih sopan)" },
    { word: "皆さん", hiragana: "みなさん", romaji: "minasan", answer: "semua orang / hadirin" },
    { word: "～さん", hiragana: "～さん", romaji: "~san", answer: "akhiran sapaan yang sopan" },
    { word: "～ちゃん", hiragana: "～ちゃん", romaji: "~chan", answer: "akhiran anak kecil / akrab" },
    { word: "～君", hiragana: "～くん", romaji: "~kun", answer: "akhiran anak laki-laki / bawahan" },
    { word: "～人", hiragana: "～じん", romaji: "~jin", answer: "akhiran warga negara" },
    { word: "先生", hiragana: "せんせい", romaji: "sensei", answer: "guru" },
    { word: "教師", hiragana: "きょうし", romaji: "kyoushi", answer: "pengajar / instruktur" },
    { word: "学生", hiragana: "がくせい", romaji: "gakusei", answer: "siswa / mahasiswa" },
    { word: "会社員", hiragana: "かいしゃいん", romaji: "kaishain", answer: "karyawan perusahaan" },
    { word: "社員", hiragana: "しゃいん", romaji: "shain", answer: "karyawan" },
    { word: "銀行員", hiragana: "ぎんこういん", romaji: "ginkouin", answer: "pegawai bank" },
    { word: "医者", hiragana: "いしゃ", romaji: "isha", answer: "dokter" },
    { word: "研究者", hiragana: "けんきゅうしゃ", romaji: "kenkyuusha", answer: "peneliti" },
    { word: "エンジニア", hiragana: "エンジニア", romaji: "enjinia", answer: "insinyur" },
    { word: "大学", hiragana: "だいがく", romaji: "daigaku", answer: "universitas" },
    { word: "病院", hiragana: "びょういん", romaji: "byouin", answer: "rumah sakit" },
    { word: "電気", hiragana: "でんき", romaji: "denki", answer: "listrik" },
    { word: "だれ", hiragana: "だれ", romaji: "dare", answer: "siapa" },
    { word: "どなた", hiragana: "どなた", romaji: "donata", answer: "siapa (lebih sopan)" },
    { word: "～歳", hiragana: "～さい", romaji: "~sai", answer: "usia ... tahun" },
    { word: "何歳", hiragana: "なんさい", romaji: "nansai", answer: "berapa usia" },
    { word: "おいくつ", hiragana: "おいくつ", romaji: "oikutsu", answer: "berapa usia (lebih sopan)" },
    { word: "はい", hiragana: "はい", romaji: "hai", answer: "ya" },
    { word: "いいえ", hiragana: "いいえ", romaji: "iie", answer: "tidak" },
    { word: "失礼", hiragana: "しつれい", romaji: "shitsurei", answer: "permisi / maaf" },
    { word: "初めまして", hiragana: "はじめまして", romaji: "hajimemashite", answer: "Salam kenal." },
    { word: "どうぞよろしくお願いします", hiragana: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku", answer: "Mohon bimbingannya." },
    { word: "こちらは～さんです", hiragana: "こちらは～さんです", romaji: "kochira wa ~san desu", answer: "Ini adalah Tuan/Nyonya ~" },
    { word: "～から来ました", hiragana: "～からきました", romaji: "~kara kimashita", answer: "Saya berasal dari ~" },
    { word: "アメリカ", hiragana: "アメリカ", romaji: "Amerika", answer: "Amerika Serikat" },
    { word: "イギリス", hiragana: "イギリス", romaji: "Igirisu", answer: "Inggris" },
    { word: "インドネシア", hiragana: "インドネシア", romaji: "Indonesia", answer: "Indonesia" },
    { word: "韓国", hiragana: "かんこく", romaji: "Kankoku", answer: "Korea Selatan" },
    { word: "タイ", hiragana: "タイ", romaji: "Tai", answer: "Thailand" },
    { word: "中国", hiragana: "ちゅうごく", romaji: "Chuugoku", answer: "Tiongkok / China" },
    { word: "ドイツ", hiragana: "ドイツ", romaji: "Doitsu", answer: "Jerman" },
    { word: "日本", hiragana: "にほん", romaji: "Nihon", answer: "Jepang" },
    { word: "フランス", hiragana: "フランス", romaji: "Furansu", answer: "Prancis" },
    { word: "ブラジル", hiragana: "ブラジル", romaji: "Burajiru", answer: "Brasil" }
  ],
  2: [
    { word: "これ", hiragana: "これ", romaji: "kore", answer: "ini (dekat pembicara)" },
    { word: "それ", hiragana: "それ", romaji: "sore", answer: "itu (dekat lawan bicara)" },
    { word: "あれ", hiragana: "あれ", romaji: "are", answer: "itu (jauh dari keduanya)" },
    { word: "この", hiragana: "この", romaji: "kono", answer: "ini (+ kata benda)" },
    { word: "その", hiragana: "その", romaji: "sono", answer: "itu (+ kata benda)" },
    { word: "あの", hiragana: "あの", romaji: "ano", answer: "itu jauh (+ kata benda)" },
    { word: "本", hiragana: "ほん", romaji: "hon", answer: "buku" },
    { word: "辞書", hiragana: "じしょ", romaji: "jisho", answer: "kamus" },
    { word: "雑誌", hiragana: "ざっし", romaji: "zasshi", answer: "majalah" },
    { word: "新聞", hiragana: "しんぶん", romaji: "shinbun", answer: "koran" },
    { word: "ノート", hiragana: "ノート", romaji: "nōto", answer: "buku catatan" },
    { word: "手帳", hiragana: "てちょう", romaji: "techō", answer: "buku agenda" },
    { word: "名刺", hiragana: "めいし", romaji: "meishi", answer: "kartu nama" },
    { word: "カード", hiragana: "カード", romaji: "kādo", answer: "kartu" },
    { word: "テレホンカード", hiragana: "テレホンカード", romaji: "terehon kādo", answer: "kartu telepon" },
    { word: "鉛筆", hiragana: "えんぴつ", romaji: "enpitsu", answer: "pensil" },
    { word: "ボールペン", hiragana: "ボールペン", romaji: "bōrupen", answer: "pulpen" },
    { word: "かぎ", hiragana: "かぎ", romaji: "kagi", answer: "kunci" },
    { word: "時計", hiragana: "とけい", romaji: "tokei", answer: "jam" },
    { word: "傘", hiragana: "かさ", romaji: "kasa", answer: "payung" },
    { word: "かばん", hiragana: "かばん", romaji: "kaban", answer: "tas" },
    { word: "テープ", hiragana: "テープ", romaji: "tēpu", answer: "pita / selotip" },
    { word: "テープレコーダー", hiragana: "テープレコーダー", romaji: "tēpu rekōdā", answer: "tape recorder" },
    { word: "テレビ", hiragana: "テレビ", romaji: "terebi", answer: "televisi / TV" },
    { word: "ラジオ", hiragana: "ラジオ", romaji: "rajio", answer: "radio" },
    { word: "カメラ", hiragana: "カメラ", romaji: "kamera", answer: "kamera" },
    { word: "コンピューター", hiragana: "コンピューター", romaji: "konpyūtā", answer: "komputer" },
    { word: "自動車", hiragana: "じどうしゃ", romaji: "jidousha", answer: "mobil" },
    { word: "机", hiragana: "つくえ", romaji: "tsukue", answer: "meja" },
    { word: "いす", hiragana: "いす", romaji: "isu", answer: "kursi" },
    { word: "チョコレート", hiragana: "チョコレート", romaji: "chokorēto", answer: "cokelat" },
    { word: "コーヒー", hiragana: "コーヒー", romaji: "kōhī", answer: "kopi" },
    { word: "英語", hiragana: "えいご", romaji: "eigo", answer: "bahasa Inggris" },
    { word: "日本語", hiragana: "にほんご", romaji: "nihongo", answer: "bahasa Jepang" },
    { word: "～語", hiragana: "～ご", romaji: "~go", answer: "bahasa ~" },
    { word: "何", hiragana: "なん", romaji: "nan", answer: "apa" },
    { word: "そう", hiragana: "そう", romaji: "sou", answer: "begitu / benar" },
    { word: "違います", hiragana: "ちがいます", romaji: "chigaimasu", answer: "bukan / salah" },
    { word: "そうですか", hiragana: "そうですか", romaji: "sou desu ka", answer: "begitu ya? / oh begitu" },
    { word: "あのう", hiragana: "あのう", romaji: "anou", answer: "permisi... / anu..." },
    { word: "ほんの気持ちです", hiragana: "ほんのきもちです", romaji: "honno kimochi desu", answer: "ini tanda kecil dari saya" },
    { word: "どうぞ", hiragana: "どうぞ", romaji: "douzo", answer: "silakan" },
    { word: "どうも", hiragana: "どうも", romaji: "doumo", answer: "terima kasih" },
    { word: "ありがとう", hiragana: "ありがとう", romaji: "arigatou", answer: "terima kasih" },
    { word: "どうもありがとうございます", hiragana: "どうもありがとうございます", romaji: "doumo arigatou gozaimasu", answer: "terima kasih banyak" },
    { word: "これからお世話になります", hiragana: "これからおせわになります", romaji: "kore kara osewa ni narimasu", answer: "mohon bimbingannya" },
    { word: "こちらこそよろしく", hiragana: "こちらこそよろしく", romaji: "kochira koso yoroshiku", answer: "saya juga mohon bimbingannya" }
  ]
};

let currentMode = 'study'; // 'study' atau 'quiz'
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Inisialisasi Aplikasi
window.onload = function() {
  renderMenu();
};

// Ganti Mode (Belajar / Kuis)
function switchMode(mode) {
  currentMode = mode;
  document.getElementById('tab-study').classList.toggle('active', mode === 'study');
  document.getElementById('tab-quiz').classList.toggle('active', mode === 'quiz');
  document.getElementById('menu-title').innerText = mode === 'study' ? 'Pilih Bab Belajar' : 'Pilih Bab Kuis';
  renderMenu();
}

// Render Tombol Bab di Menu Utama
function renderMenu() {
  const container = document.getElementById('chapter-grid');
  container.innerHTML = '';

  const totalChapters = 25; // Disiapkan sampai 25 Bab

  for (let i = 1; i <= totalChapters; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn-chapter';

    if (chapterData[i]) {
      btn.innerText = `Bab ${i}`;
      btn.onclick = () => currentMode === 'study' ? openStudy(i) : startQuiz(i);
    } else {
      btn.innerText = `Bab ${i}`;
      btn.classList.add('disabled');
      btn.disabled = true;
    }

    container.appendChild(btn);
  }
}

// --- LOGIKA BELAJAR ---
function openStudy(chapter) {
  const data = chapterData[chapter];
  if (!data) return;

  document.getElementById('study-chapter-title').innerText = `Bab ${chapter}`;
  document.getElementById('study-count-text').innerText = `${data.length} Kata`;

  const listContainer = document.getElementById('vocab-list');
  listContainer.innerHTML = '';

  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'vocab-item';
    el.innerHTML = `
      <div class="vocab-jp">
        <span class="vocab-kanji">${item.hiragana}</span>
        <span class="vocab-sub">${item.word !== item.hiragana ? item.word + ' • ' : ''}(${item.romaji})</span>
      </div>
      <span class="vocab-meaning">${item.answer}</span>
    `;
    listContainer.appendChild(el);
  });

  switchScreen('study-screen');
}

// --- LOGIKA KUIS ---
function shuffle(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startQuiz(chapter) {
  if (!chapterData[chapter]) return;

  currentQuestions = shuffle(chapterData[chapter]);
  currentIndex = 0;
  score = 0;

  document.getElementById('chapter-title').innerText = `Bab ${chapter}`;
  switchScreen('quiz-screen');
  showQuestion();
}

function showQuestion() {
  const currentItem = currentQuestions[currentIndex];
  document.getElementById('progress-text').innerText = `Soal ${currentIndex + 1} / ${currentQuestions.length}`;
  document.getElementById('question-text').innerText = currentItem.hiragana;
  document.getElementById('sub-question').innerText = `(${currentItem.romaji})`;

  const otherItems = currentQuestions.filter(item => item.answer !== currentItem.answer);
  const shuffledOthers = shuffle(otherItems).slice(0, 3);
  const choices = shuffle([currentItem, ...shuffledOthers]);

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.innerText = choice.answer;
    btn.onclick = () => selectOption(btn, choice.answer, currentItem.answer);
    optionsContainer.appendChild(btn);
  });

  document.getElementById('feedback').innerText = '';
  document.getElementById('feedback').className = 'feedback-msg';
  document.getElementById('btn-next').classList.add('hidden');
}

function selectOption(selectedBtn, selectedAnswer, correctAnswer) {
  const allButtons = document.querySelectorAll('.btn-option');
  
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add('correct-choice');
    }
  });

  const feedbackEl = document.getElementById('feedback');

  if (selectedAnswer === correctAnswer) {
    score++;
    feedbackEl.innerText = "Benar! 🎉";
    feedbackEl.className = "feedback-msg correct";
  } else {
    selectedBtn.classList.add('wrong-choice');
    feedbackEl.innerText = `Salah! Jawaban: ${correctAnswer}`;
    feedbackEl.className = "feedback-msg wrong";
  }

  document.getElementById('btn-next').classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('final-score').innerText = `${score} / ${currentQuestions.length}`;
  switchScreen('result-screen');
}

function showMenu() {
  switchScreen('menu-screen');
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}