// Database Kosakata Minna no Nihongo (Bab 1 - Bab 10)
const chapterData = {
  1: [
    { word: "私", hiragana: "わたし", romaji: "watashi", answer: "saya" },
    { word: "私達", hiragana: "わたしたち", romaji: "watashitachi", answer: "kami / kita" },
    { word: "あなた", hiragana: "あなた", romaji: "anata", answer: "anda / kamu" },
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
    { word: "初めまして", hiragana: "はじめまして", romaji: "hajimemashite", answer: "salam kenal" },
    { word: "どうぞよろしくお願いします", hiragana: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku", answer: "mohon bimbingannya" },
    { word: "こちらは～さんです", hiragana: "こちらは～さんです", romaji: "kochira wa ~san desu", answer: "ini adalah tuan/nyonya ~" },
    { word: "～から来ました", hiragana: "～からきました", romaji: "~kara kimashita", answer: "saya berasal dari ~" },
    { word: "アメリカ", hiragana: "アメリカ", romaji: "amerika", answer: "amerika serikat" },
    { word: "イギリス", hiragana: "イギリス", romaji: "igirisu", answer: "inggris" },
    { word: "インドネシア", hiragana: "インドネシア", romaji: "indonesia", answer: "indonesia" },
    { word: "韓国", hiragana: "かんこく", romaji: "kankoku", answer: "korea selatan" },
    { word: "タイ", hiragana: "タイ", romaji: "tai", answer: "thailand" },
    { word: "中国", hiragana: "ちゅうごく", romaji: "chuugoku", answer: "tiongkok / china" },
    { word: "ドイツ", hiragana: "ドイツ", romaji: "doitsu", answer: "jerman" },
    { word: "日本", hiragana: "にほん", romaji: "nihon", answer: "jepang" },
    { word: "フランス", hiragana: "フランス", romaji: "furansu", answer: "prancis" },
    { word: "ブラジル", hiragana: "ブラジル", romaji: "burajiru", answer: "brasil" }
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
    { word: "ノート", hiragana: "ノート", romaji: "noto", answer: "buku catatan" },
    { word: "手帳", hiragana: "てちょう", romaji: "techou", answer: "buku agenda" },
    { word: "名刺", hiragana: "めいし", romaji: "meishi", answer: "kartu nama" },
    { word: "カード", hiragana: "カード", romaji: "kado", answer: "kartu" },
    { word: "テレホンカード", hiragana: "テレホンカード", romaji: "terehon kado", answer: "kartu telepon" },
    { word: "鉛筆", hiragana: "えんぴつ", romaji: "enpitsu", answer: "pensil" },
    { word: "ボールペン", hiragana: "ボールペン", romaji: "bourupen", answer: "pulpen" },
    { word: "かぎ", hiragana: "かぎ", romaji: "kagi", answer: "kunci" },
    { word: "時計", hiragana: "とけい", romaji: "tokei", answer: "jam" },
    { word: "傘", hiragana: "かさ", romaji: "kasa", answer: "payung" },
    { word: "かばん", hiragana: "かばん", romaji: "kaban", answer: "tas" },
    { word: "テープ", hiragana: "テープ", romaji: "tepu", answer: "pita / selotip" },
    { word: "テープレコーダー", hiragana: "テープレコーダー", romaji: "tepu rekoda", answer: "tape recorder" },
    { word: "テレビ", hiragana: "テレビ", romaji: "terebi", answer: "televisi / tv" },
    { word: "ラジオ", hiragana: "ラジオ", romaji: "rajio", answer: "radio" },
    { word: "カメラ", hiragana: "カメラ", romaji: "kamera", answer: "kamera" },
    { word: "コンピューター", hiragana: "コンピューター", romaji: "konpyuta", answer: "komputer" },
    { word: "自動車", hiragana: "じどうしゃ", romaji: "jidousha", answer: "mobil" },
    { word: "机", hiragana: "つくえ", romaji: "tsukue", answer: "meja" },
    { word: "いす", hiragana: "いす", romaji: "isu", answer: "kursi" },
    { word: "チョコレート", hiragana: "チョコレート", romaji: "chokoreto", answer: "cokelat" },
    { word: "コーヒー", hiragana: "コーヒー", romaji: "kohi", answer: "kopi" },
    { word: "英語", hiragana: "えいご", romaji: "eigo", answer: "bahasa inggris" },
    { word: "日本語", hiragana: "にほんご", romaji: "nihongo", answer: "bahasa jepang" },
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
  ],
  3: [
    { word: "ここ", hiragana: "ここ", romaji: "koko", answer: "di sini (dekat pembicara)" },
    { word: "そこ", hiragana: "そこ", romaji: "soko", answer: "di situ (dekat lawan bicara)" },
    { word: "どこ", hiragana: "どこ", romaji: "doko", answer: "di mana" },
    { word: "こちら", hiragana: "こちら", romaji: "kochira", answer: "di sini (lebih sopan) / ke arah sini" },
    { word: "そちら", hiragana: "そちら", romaji: "sochira", answer: "di situ (lebih sopan) / ke arah situ" },
    { word: "あちら", hiragana: "あちら", romaji: "achira", answer: "di sana (lebih sopan) / ke arah sana" },
    { word: "どちら", hiragana: "どちら", romaji: "dochira", answer: "di mana (lebih sopan) / yang mana" },
    { word: "教室", hiragana: "きょうしつ", romaji: "kyoushitsu", answer: "ruang kelas" },
    { word: "食堂", hiragana: "しょくどう", romaji: "shokudou", answer: "kantin / ruang makan" },
    { word: "事務所", hiragana: "じむしょ", romaji: "jimusho", answer: "kantor" },
    { word: "会議室", hiragana: "かいぎしつ", romaji: "kaigishitsu", answer: "ruang rapat" },
    { word: "受付", hiragana: "うけつけ", romaji: "uketsuke", answer: "resepsionis / meja informasi" },
    { word: "ロビー", hiragana: "ロビー", romaji: "robii", answer: "lobi" },
    { word: "部屋", hiragana: "へや", romaji: "heya", answer: "kamar / ruangan" },
    { word: "トイレ", hiragana: "トイレ", romaji: "toire", answer: "toilet" },
    { word: "お手洗い", hiragana: "おてあらい", romaji: "otearai", answer: "toilet (lebih sopan)" },
    { word: "階段", hiragana: "かいだん", romaji: "kaidan", answer: "tangga" },
    { word: "エレベーター", hiragana: "エレベーター", romaji: "erebeta", answer: "lift / elevator" },
    { word: "エスカレーター", hiragana: "エスカレーター", romaji: "esukareta", answer: "eskalator" },
    { word: "国", hiragana: "くに", romaji: "kuni", answer: "negara" },
    { word: "会社", hiragana: "かいしゃ", romaji: "kaisha", answer: "perusahaan" },
    { word: "うち", hiragana: "うち", romaji: "uchi", answer: "rumah" },
    { word: "電話", hiragana: "でんわ", romaji: "denwa", answer: "telepon" },
    { word: "靴", hiragana: "くつ", romaji: "kutsu", answer: "sepatu" },
    { word: "ネクタイ", hiragana: "ネクタイ", romaji: "nekutai", answer: "dasi" },
    { word: "ワイン", hiragana: "ワイン", romaji: "wain", answer: "anggur (minuman/wine)" },
    { word: "たばこ", hiragana: "たばこ", romaji: "tabako", answer: "rokok" },
    { word: "売り場", hiragana: "うりば", romaji: "uriba", answer: "bagian penjualan / departemen toko" },
    { word: "地下", hiragana: "ちか", romaji: "chika", answer: "lantai bawah tanah" },
    { word: "一階", hiragana: "いっかい", romaji: "ikkai", answer: "lantai satu" },
    { word: "何階", hiragana: "なんがい", romaji: "nangai", answer: "lantai berapa" },
    { word: "いくら", hiragana: "いくら", romaji: "ikura", answer: "berapa (harga)" },
    { word: "百", hiragana: "ひゃく", romaji: "hyaku", answer: "seratus" },
    { word: "千", hiragana: "せん", romaji: "sen", answer: "seribu" },
    { word: "万", hiragana: "まん", romaji: "man", answer: "sepuluh ribu" },
    { word: "すみません", hiragana: "すみません", romaji: "sumimasen", answer: "permisi / maaf" },
    { word: "～でございます", hiragana: "～でございます", romaji: "~de gozaimasu", answer: "bentuk sangat sopan dari ~desu" },
    { word: "～を見せてください", hiragana: "～をみせてください", romaji: "~o misete kudasai", answer: "tolong tunjukkan ~ kepada saya" },
    { word: "じゃ", hiragana: "じゃ", romaji: "ja", answer: "kalau begitu / kalau begitu, baiklah" },
    { word: "～をください", hiragana: "～をください", romaji: "~o kudasai", answer: "tolong beri saya ~" }
  ],
  4: [
    { word: "起きます", hiragana: "おきます", romaji: "okimasu", answer: "bangun tidur" },
    { word: "寝ます", hiragana: "ねます", romaji: "nemasu", answer: "tidur" },
    { word: "働きます", hiragana: "はたらきます", romaji: "hatarakimasu", answer: "bekerja" },
    { word: "休みます", hiragana: "やすみます", romaji: "yasumimasu", answer: "beristirahat / libur" },
    { word: "勉強します", hiragana: "べんきょうします", romaji: "benkyou shimasu", answer: "belajar" },
    { word: "終わります", hiragana: "おわります", romaji: "owarimasu", answer: "selesai / berakhir" },
    { word: "デパート", hiragana: "デパート", romaji: "depato", answer: "department store / toserba" },
    { word: "銀行", hiragana: "ぎんこう", romaji: "ginkou", answer: "bank" },
    { word: "郵便局", hiragana: "ゆうびんきょく", romaji: "yuubinkyoku", answer: "kantor pos" },
    { word: "図書館", hiragana: "としょかん", romaji: "toshokan", answer: "perpustakaan" },
    { word: "美術館", hiragana: "びじゅつかん", romaji: "bijutsukan", answer: "museum seni" },
    { word: "今", hiragana: "いま", romaji: "ima", answer: "sekarang" },
    { word: "～時", hiragana: "～じ", romaji: "~ji", answer: "pukul / jam" },
    { word: "～分", hiragana: "～ふん", romaji: "~fun", answer: "menit" },
    { word: "半", hiragana: "はん", romaji: "han", answer: "setengah" },
    { word: "何時", hiragana: "なんじ", romaji: "nanji", answer: "pukul berapa" },
    { word: "何分", hiragana: "なんぷん", romaji: "nanpun", answer: "berapa menit" },
    { word: "午前", hiragana: "ごぜん", romaji: "gozen", answer: "pagi (a.m.)" },
    { word: "午後", hiragana: "ごご", romaji: "gogo", answer: "siang/sore (p.m.)" },
    { word: "朝", hiragana: "あさ", romaji: "asa", answer: "pagi" },
    { word: "昼", hiragana: "ひる", romaji: "hiru", answer: "siang" },
    { word: "晩", hiragana: "ばん", romaji: "ban", answer: "malam" },
    { word: "おとtoi", hiragana: "おととい", romaji: "ototoi", answer: "kemarin lusa" },
    { word: "きのう", hiragana: "きのう", romaji: "kinou", answer: "kemarin" },
    { word: "きょう", hiragana: "きょう", romaji: "kyou", answer: "hari ini" },
    { word: "あした", hiragana: "あした", romaji: "ashita", answer: "besok" },
    { word: "あさって", hiragana: "あさって", romaji: "asatte", answer: "lusa" },
    { word: "けさ", hiragana: "けさ", romaji: "kesa", answer: "tadi pagi / pagi ini" },
    { word: "今晩", hiragana: "こんばん", romaji: "konban", answer: "malam ini" },
    { word: "休み", hiragana: "やすみ", romaji: "yasumi", answer: "istirahat / libur / hari libur" },
    { word: "昼休み", hiragana: "ひるやすみ", romaji: "hiruyasumi", answer: "waktu istirahat siang" },
    { word: "毎朝", hiragana: "まいあさ", romaji: "maiasa", answer: "setiap pagi" },
    { word: "毎晩", hiragana: "まいばん", romaji: "maiban", answer: "setiap malam" },
    { word: "毎日", hiragana: "まいにち", romaji: "mainichi", answer: "setiap hari" },
    { word: "月曜日", hiragana: "げつようび", romaji: "getsuyoubi", answer: "senin" },
    { word: "火曜日", hiragana: "かようび", romaji: "kayoubi", answer: "selasa" },
    { word: "水曜日", hiragana: "すいようび", romaji: "suiyoubi", answer: "rabu" },
    { word: "木曜日", hiragana: "もくようび", romaji: "mokuyoubi", answer: "kamis" },
    { word: "金曜日", hiragana: "きんようび", romaji: "kinyoubi", answer: "jumat" },
    { word: "土曜日", hiragana: "どようび", romaji: "doyoubi", answer: "sabtu" },
    { word: "日曜日", hiragana: "にちようび", romaji: "nichiyoubi", answer: "minggu" },
    { word: "何曜日", hiragana: "なんようび", romaji: "nanyoubi", answer: "hari apa" },
    { word: "番号", hiragana: "ばんごう", romaji: "bangou", answer: "nomor" },
    { word: "何番", hiragana: "なんばん", romaji: "nanban", answer: "nomor berapa" },
    { word: "～から", hiragana: "～から", romaji: "~kara", answer: "dari ~" },
    { word: "～まで", hiragana: "～まで", romaji: "~made", answer: "sampai / hingga ~" },
    { word: "～と～", hiragana: "～と～", romaji: "~to~", answer: "dan (menghubungkan kata benda)" },
    { word: "そちら", hiragana: "そちら", romaji: "sochira", answer: "di situ / ke arah Anda (lebih sopan)" },
    { word: "大変ですね", hiragana: "たいへんですね", romaji: "taihen desu ne", answer: "wah, pasti berat ya / sulit ya" },
    { word: "えーと", hiragana: "えーと", romaji: "eeto", answer: "hmm... / anu... (sedang berpikir)" },
    { word: "お願いします", hiragana: "おねがいします", romaji: "onegaishimasu", answer: "tolong / mohon bantuannya" },
    { word: "かしこまりました", hiragana: "かしこまりました", romaji: "kashikomarimashita", answer: "baik, saya mengerti" },
    { word: "お問い合わせの番号", hiragana: "おといあわせのばんごう", romaji: "otoiawase no bangou", answer: "nomor yang ditanyakan" },
    { word: "した", hiragana: "した", romaji: "shita", answer: "bawah" },
    { word: "ニューヨーク", hiragana: "ニューヨーク", romaji: "nyuyoku", answer: "new york" },
    { word: "ペキン", hiragana: "ペキン", romaji: "pekin", answer: "beijing" },
    { word: "ロンドン", hiragana: "ロンドン", romaji: "rondon", answer: "london" },
    { word: "バンコク", hiragana: "バンコク", romaji: "bankoku", answer: "bangkok" },
    { word: "ロサンゼルス", hiragana: "ロサンゼルス", romaji: "rosanzerusu", answer: "los angeles" }
  ],
  5: [
    { word: "行きます", hiragana: "いきます", romaji: "ikimasu", answer: "pergi" },
    { word: "来ます", hiragana: "きます", romaji: "kimasu", answer: "datang" },
    { word: "帰ります", hiragana: "かえります", romaji: "kaerimasu", answer: "pulang" },
    { word: "学校", hiragana: "がっこう", romaji: "gakkou", answer: "sekolah" },
    { word: "スーパー", hiragana: "スーパー", romaji: "suupa", answer: "supermarket" },
    { word: "駅", hiragana: "えき", romaji: "eki", answer: "stasiun" },
    { word: "飛行機", hiragana: "ひこうき", romaji: "hikouki", answer: "pesawat" },
    { word: "船", hiragana: "ふね", romaji: "fune", answer: "kapal" },
    { word: "電車", hiragana: "でんしゃ", romaji: "densha", answer: "kereta listrik" },
    { word: "地下鉄", hiragana: "ちかてつ", romaji: "chikatetsu", answer: "kereta bawah tanah (MRT/subway)" },
    { word: "新幹線", hiragana: "しんかんせん", romaji: "shinkansen", answer: "Shinkansen (kereta cepat)" },
    { word: "バス", hiragana: "バス", romaji: "basu", answer: "bus" },
    { word: "タクシー", hiragana: "タクシー", romaji: "takushii", answer: "taksi" },
    { word: "自転車", hiragana: "じてんしゃ", romaji: "jitensha", answer: "sepeda" },
    { word: "歩いて", hiragana: "あるいて", romaji: "aruite", answer: "berjalan kaki" },
    { word: "人", hiragana: "ひと", romaji: "hito", answer: "orang" },
    { word: "友達", hiragana: "ともだち", romaji: "tomodachi", answer: "teman" },
    { word: "彼", hiragana: "かれ", romaji: "kare", answer: "dia (laki-laki)" },
    { word: "彼女", hiragana: "かのじょ", romaji: "kanojo", answer: "dia (perempuan)" },
    { word: "家族", hiragana: "かぞく", romaji: "kazoku", answer: "keluarga" },
    { word: "一人で", hiragana: "ひとりで", romaji: "hitori de", answer: "sendirian" },
    { word: "先週", hiragana: "せんしゅう", romaji: "senshuu", answer: "minggu lalu" },
    { word: "今週", hiragana: "こんしゅう", romaji: "konshuu", answer: "minggu ini" },
    { word: "来週", hiragana: "らいしゅう", romaji: "raishuu", answer: "minggu depan" },
    { word: "先月", hiragana: "せんげつ", romaji: "sengetsu", answer: "bulan lalu" },
    { word: "今月", hiragana: "こんげつ", romaji: "kongetsu", answer: "bulan ini" },
    { word: "来月", hiragana: "らいげつ", romaji: "raigetsu", answer: "bulan depan" },
    { word: "去年", hiragana: "きょねん", romaji: "kyonen", answer: "tahun lalu" },
    { word: "ことし", hiragana: "ことし", romaji: "kotoshi", answer: "tahun ini" },
    { word: "来年", hiragana: "らいねん", romaji: "rainen", answer: "tahun depan" },
    { word: "～月", hiragana: "～がつ", romaji: "~gatsu", answer: "bulan ~" },
    { word: "何月", hiragana: "なんがつ", romaji: "nangatsu", answer: "bulan apa" },
    { word: "一日", hiragana: "ついたち", romaji: "tsuitachi", answer: "tanggal 1" },
    { word: "二日", hiragana: "ふつか", romaji: "futsuka", answer: "tanggal 2" },
    { word: "三日", hiragana: "みっか", romaji: "mikka", answer: "tanggal 3" },
    { word: "五日", hiragana: "いつか", romaji: "itsuka", answer: "tanggal 5" },
    { word: "六日", hiragana: "むいか", romaji: "muika", answer: "tanggal 6" },
    { word: "七日", hiragana: "なのか", romaji: "nanoka", answer: "tanggal 7" },
    { word: "八日", hiragana: "ようか", romaji: "youka", answer: "tanggal 8" },
    { word: "九日", hiragana: "ここのか", romaji: "kokonoka", answer: "tanggal 9" },
    { word: "十日", hiragana: "とおか", romaji: "tooka", answer: "tanggal 10" },
    { word: "十四日", hiragana: "じゅうよっか", romaji: "juuyokka", answer: "tanggal 14" },
    { word: "二十日", hiragana: "はつか", romaji: "hatsuka", answer: "tanggal 20" },
    { word: "二十四日", hiragana: "にじゅうよっか", romaji: "nijuuyokka", answer: "tanggal 24" },
    { word: "～日", hiragana: "～にち", romaji: "~nichi", answer: "hari / tanggal ~" },
    { word: "何日", hiragana: "なんにち", romaji: "nannichi", answer: "tanggal berapa" },
    { word: "いつ", hiragana: "いつ", romaji: "itsu", answer: "kapan" },
    { word: "誕生日", hiragana: "たんじょうび", romaji: "tanjoubi", answer: "hari ulang tahun" },
    { word: "普通", hiragana: "ふつう", romaji: "futsuu", answer: "kereta lokal / biasa" },
    { word: "急行", hiragana: "きゅうこう", romaji: "kyuukou", answer: "kereta cepat" },
    { word: "特急", hiragana: "とっきゅう", romaji: "tokkyuu", answer: "kereta ekspres terbatas" },
    { word: "次の", hiragana: "つぎの", romaji: "tsugi no", answer: "berikutnya / selanjutnya" },
    { word: "どういたしまして", hiragana: "どういたしまして", romaji: "douitashimashite", answer: "sama-sama" },
    { word: "～番線", hiragana: "～ばんせん", romaji: "~bansen", answer: "peron / jalur nomor ~" }
  
  ],
  6: [
    { word: "食べます", hiragana: "たべます", romaji: "tabemasu", answer: "makan" },
    { word: "飲みます", hiragana: "のみます", romaji: "nomimasu", answer: "minum" },
    { word: "吸います", hiragana: "すいます", romaji: "suimasu", answer: "merokok / mengisap" },
    { word: "たばこを吸います", hiragana: "たばこをすいます", romaji: "tabako o suimasu", answer: "merokok" },
    { word: "見ます", hiragana: "みます", romaji: "mimasu", answer: "melihat / menonton" },
    { word: "聞きます", hiragana: "ききます", romaji: "kikimasu", answer: "mendengar / bertanya" },
    { word: "読みます", hiragana: "よみます", romaji: "yomimasu", answer: "membaca" },
    { word: "書きます", hiragana: "かきます", romaji: "kakimasu", answer: "menulis" },
    { word: "買います", hiragana: "かいます", romaji: "kaimasu", answer: "membeli" },
    { word: "撮ります", hiragana: "とります", romaji: "torimasu", answer: "mengambil (foto/video)" },
    { word: "写真を撮ります", hiragana: "しゃしんをとりま", romaji: "shashin o torimasu", answer: "mengambil foto" },
    { word: "します", hiragana: "します", romaji: "shimasu", answer: "melakukan" },
    { word: "会います", hiragana: "あいます", romaji: "aimasu", answer: "bertemu" },
    { word: "友達を会います", hiragana: "ともだちをあいます", romaji: "tomodachi o aimasu", answer: "bertemu teman" },
    { word: "ごはん", hiragana: "ごはん", romaji: "gohan", answer: "nasi / makanan" },
    { word: "朝ごはん", hiragana: "あさごはん", romaji: "asagohan", answer: "sarapan" },
    { word: "昼ごはん", hiragana: "ひるごはん", romaji: "hirugohan", answer: "makan siang" },
    { word: "晩ごはん", hiragana: "ばんごはん", romaji: "bangohan", answer: "makan malam" },
    { word: "パン", hiragana: "パン", romaji: "pan", answer: "roti" },
    { word: "卵", hiragana: "たまご", romaji: "tamago", answer: "telur" },
    { word: "肉", hiragana: "にく", romaji: "niku", answer: "daging" },
    { word: "魚", hiragana: "さかな", romaji: "sakana", answer: "ikan" },
    { word: "野菜", hiragana: "やさい", romaji: "yasai", answer: "sayuran" },
    { word: "果物", hiragana: "くだもの", romaji: "kudamono", answer: "buah-buahan" },
    { word: "水", hiragana: "みず", romaji: "mizu", answer: "air" },
    { word: "お茶", hiragana: "おちゃ", romaji: "ocha", answer: "teh" },
    { word: "紅茶", hiragana: "こうちゃ", romaji: "koucha", answer: "teh hitam" },
    { word: "牛乳", hiragana: "ぎゅうにゅう", romaji: "gyuunyuu", answer: "susu" },
    { word: "ミルク", hiragana: "ミルク", romaji: "miruku", answer: "susu" },
    { word: "ジュース", hiragana: "ジュース", romaji: "juusu", answer: "jus" },
    { word: "ビール", hiragana: "ビール", romaji: "biiru", answer: "bir" },
    { word: "酒", hiragana: "さけ", romaji: "sake", answer: "minuman beralkohol / sake" },
    { word: "ビデオ", hiragana: "ビデオ", romaji: "bideo", answer: "video" },
    { word: "映画", hiragana: "えいが", romaji: "eiga", answer: "film" },
    { word: "手紙", hiragana: "てがみ", romaji: "tegami", answer: "surat" },
    { word: "レポート", hiragana: "レポート", romaji: "repoto", answer: "laporan" },
    { word: "写真", hiragana: "しゃしん", romaji: "shashin", answer: "foto" },
    { word: "店", hiragana: "みせ", romaji: "mise", answer: "toko" },
    { word: "レストラン", hiragana: "レストラン", romaji: "resutoran", answer: "restoran" },
    { word: "庭", hiragana: "にわ", romaji: "niwa", answer: "taman / halaman" },
    { word: "宿題", hiragana: "しゅくだい", romaji: "shukudai", answer: "pekerjaan rumah (PR)" },
    { word: "宿題をします", hiragana: "しゅくだいをします", romaji: "shukudai o shimasu", answer: "mengerjakan PR" },
    { word: "テニス", hiragana: "テニス", romaji: "tenisu", answer: "tenis" },
    { word: "サッカー", hiragana: "サッカー", romaji: "sakka", answer: "sepak bola" },
    { word: "サッカーをします", hiragana: "サッカーをします", romaji: "sakka o shimasu", answer: "bermain sepak bola" },
    { word: "花見", hiragana: "はなみ", romaji: "hanami", answer: "melihat bunga sakura" },
    { word: "花見をします", hiragana: "はなみをします", romaji: "hanami o shimasu", answer: "pergi melihat bunga sakura" },
    { word: "何", hiragana: "なに", romaji: "nani", answer: "apa" },
    { word: "いっしょに", hiragana: "いっしょに", romaji: "issho ni", answer: "bersama" },
    { word: "ちょっと", hiragana: "ちょっと", romaji: "chotto", answer: "sebentar / sedikit" },
    { word: "いつも", hiragana: "いつも", romaji: "itsumo", answer: "selalu" },
    { word: "時々", hiragana: "ときとき", romaji: "tokidoki", answer: "kadang-kadang" },
    { word: "それから", hiragana: "それから", romaji: "sorekara", answer: "setelah itu / kemudian" },
    { word: "ええ", hiragana: "ええ", romaji: "ee", answer: "ya" },
    { word: "いいですね", hiragana: "いいですね", romaji: "ii desu ne", answer: "bagus ya" },
    { word: "何ですか", hiragana: "なんですか", romaji: "nan desu ka", answer: "apa? / ada apa?" },
    { word: "じゃ、またあした", hiragana: "じゃ、またあした", romaji: "ja, mata ashita", answer: "sampai jumpa besok" }
  ],
  7: [
    { word: "切ります", hiragana: "きります", romaji: "kirimasu", answer: "memotong" },
    { word: "送ります", hiragana: "おくります", romaji: "okurimasu", answer: "mengirim" },
    { word: "あげます", hiragana: "あげます", romaji: "agemasu", answer: "memberi" },
    { word: "もらいます", hiragana: "もらいます", romaji: "moraimasu", answer: "menerima" },
    { word: "貸します", hiragana: "かします", romaji: "kashimasu", answer: "meminjamkan" },
    { word: "借ります", hiragana: "かります", romaji: "karimasu", answer: "meminjam" },
    { word: "教えます", hiragana: "おしえます", romaji: "oshiemasu", answer: "mengajar / memberi tahu" },
    { word: "習います", hiragana: "ならいます", romaji: "naraimasu", answer: "belajar" },
    { word: "電話をかけます", hiragana: "でんわをかけます", romaji: "denwa o kakemasu", answer: "menelepon" },
    { word: "手", hiragana: "て", romaji: "te", answer: "tangan" },
    { word: "はし", hiragana: "はし", romaji: "hashi", answer: "sumpit" },
    { word: "スプーン", hiragana: "スプーン", romaji: "supuun", answer: "sendok" },
    { word: "ナイフ", hiragana: "ナイフ", romaji: "naifu", answer: "pisau" },
    { word: "フォーク", hiragana: "フォーク", romaji: "foku", answer: "garpu" },
    { word: "はさみ", hiragana: "はさみ", romaji: "hasami", answer: "gunting" },
    { word: "ファクス", hiragana: "ファクス", romaji: "fakusu", answer: "faks / fax" },
    { word: "ワープロ", hiragana: "ワープロ", romaji: "waapuro", answer: "pengolah kata" },
    { word: "パソコン", hiragana: "パソコン", romaji: "pasokon", answer: "komputer pribadi (PC)" },
    { word: "パンチ", hiragana: "パンチ", romaji: "panchi", answer: "pelubang kertas" },
    { word: "ホッチキス", hiragana: "ホッチキス", romaji: "hotchikisu", answer: "stapler" },
    { word: "セロテープ", hiragana: "セロテープ", romaji: "serotepu", answer: "selotip" },
    { word: "消しゴム", hiragana: "けしゴム", romaji: "keshigomu", answer: "penghapus" },
    { word: "紙", hiragana: "かみ", romaji: "kami", answer: "kertas" },
    { word: "花", hiragana: "はな", romaji: "hana", answer: "bunga" },
    { word: "シャツ", hiragana: "シャツ", romaji: "shatsu", answer: "kemeja" },
    { word: "プレゼント", hiragana: "プレゼント", romaji: "purezento", answer: "hadiah" },
    { word: "荷物", hiragana: "にもつ", romaji: "nimotsu", answer: "barang / bagasi" },
    { word: "お金", hiragana: "おかね", romaji: "okane", answer: "uang" },
    { word: "切符", hiragana: "きっぷ", romaji: "kippu", answer: "tiket" },
    { word: "クリスマス", hiragana: "クリスマス", romaji: "kurisumasu", answer: "Natal" },
    { word: "父", hiragana: "ちち", romaji: "chichi", answer: "ayah (sendiri)" },
    { word: "母", hiragana: "はは", romaji: "haha", answer: "ibu (sendiri)" },
    { word: "お父さん", hiragana: "おとうさん", romaji: "otousan", answer: "ayah (orang lain)" },
    { word: "お母さん", hiragana: "おかあさん", romaji: "okaasan", answer: "ibu (orang lain)" },
    { word: "もう", hiragana: "もう", romaji: "mou", answer: "sudah" },
    { word: "まだ", hiragana: "まだ", romaji: "mada", answer: "belum" },
    { word: "これから", hiragana: "これから", romaji: "korekara", answer: "mulai sekarang / setelah ini" },
    { word: "～すてきですね", hiragana: "～すてきですね", romaji: "~suteki desu ne", answer: "indah sekali" },
    { word: "おじゃましてもいいですか", hiragana: "おじゃましてもいいですか", romaji: "ojama shite mo ii desu ka", answer: "bolehkah saya masuk?" },
    { word: "いらっしゃい", hiragana: "いらっしゃい", romaji: "irasshai", answer: "selamat datang" }
  ],
  8: [
    { word: "ハンサム", hiragana: "ハンサム", romaji: "hansamu", answer: "tampan" },
    { word: "きれい", hiragana: "きれい", romaji: "kirei", answer: "cantik / indah / bersih" },
    { word: "静か", hiragana: "しずか", romaji: "shizuka", answer: "tenang / sunyi" },
    { word: "にぎやか", hiragana: "にぎやか", romaji: "nigiyaka", answer: "ramai / meriah" },
    { word: "有名", hiragana: "ゆうめい", romaji: "yuumei", answer: "terkenal" },
    { word: "親切", hiragana: "しんせつ", romaji: "shinsetsu", answer: "baik hati" },
    { word: "元気", hiragana: "げんき", romaji: "genki", answer: "sehat / bersemangat" },
    { word: "暇", hiragana: "ひま", romaji: "hima", answer: "waktu luang" },
    { word: "便利", hiragana: "べんり", romaji: "benri", answer: "praktis / nyaman" },
    { word: "すてき", hiragana: "すてき", romaji: "suteki", answer: "bagus / indah" },
    { word: "大きい", hiragana: "おおきい", romaji: "ookii", answer: "besar" },
    { word: "小さい", hiragana: "ちいさい", romaji: "chiisai", answer: "kecil" },
    { word: "新しい", hiragana: "あたらしい", romaji: "atarashii", answer: "baru" },
    { word: "古い", hiragana: "ふるい", romaji: "furui", answer: "tua / lama" },
    { word: "いい", hiragana: "いい", romaji: "ii", answer: "baik / bagus" },
    { word: "悪い", hiragana: "わるい", romaji: "warui", answer: "buruk / jelek" },
    { word: "暑い", hiragana: "あつい", romaji: "atsui", answer: "panas" },
    { word: "熱い", hiragana: "あつい", romaji: "atsui", answer: "panas (benda/makanan)" },
    { word: "寒い", hiragana: "さむい", romaji: "samui", answer: "dingin (cuaca)" },
    { word: "冷たい", hiragana: "つめたい", romaji: "tsumetai", answer: "dingin (benda)" },
    { word: "難しい", hiragana: "むずかしい", romaji: "muzukashii", answer: "sulit" },
    { word: "易しい", hiragana: "やさしい", romaji: "yasashii", answer: "mudah" },
    { word: "高い", hiragana: "たかい", romaji: "takai", answer: "tinggi / mahal" },
    { word: "安い", hiragana: "やすい", romaji: "yasui", answer: "murah" },
    { word: "低い", hiragana: "ひくい", romaji: "hikui", answer: "rendah" },
    { word: "おもしろい", hiragana: "おもしろい", romaji: "omoshiroi", answer: "menarik / lucu" },
    { word: "おいしい", hiragana: "おいしい", romaji: "oishii", answer: "enak" },
    { word: "楽しい", hiragana: "たのしい", romaji: "tanoshii", answer: "menyenangkan" },
    { word: "白い", hiragana: "しろい", romaji: "shiroi", answer: "putih" },
    { word: "黒い", hiragana: "くろい", romaji: "kuroi", answer: "hitam" },
    { word: "赤い", hiragana: "あかい", romaji: "akai", answer: "merah" },
    { word: "青い", hiragana: "あおい", romaji: "aoi", answer: "biru" },
    { word: "桜", hiragana: "さくら", romaji: "sakura", answer: "bunga sakura" },
    { word: "山", hiragana: "やま", romaji: "yama", answer: "gunung" },
    { word: "町", hiragana: "まち", romaji: "machi", answer: "kota" },
    { word: "食べ物", hiragana: "たべもの", romaji: "tabemono", answer: "makanan" },
    { word: "車", hiragana: "くるま", romaji: "kuruma", answer: "mobil" },
    { word: "所", hiragana: "ところ", romaji: "tokoro", answer: "tempat" },
    { word: "寮", hiragana: "りょう", romaji: "ryou", answer: "asrama" },
    { word: "勉強", hiragana: "べんきょう", romaji: "benkyou", answer: "belajar" },
    { word: "生活", hiragana: "せいかつ", romaji: "seikatsu", answer: "kehidupan" },
    { word: "仕事", hiragana: "しごと", romaji: "shigoto", answer: "pekerjaan" },
    { word: "仕事をします", hiragana: "しごとをします", romaji: "shigoto o shimasu", answer: "bekerja" },
    { word: "どう", hiragana: "どう", romaji: "dou", answer: "bagaimana" },
    { word: "どんな～", hiragana: "どんな～", romaji: "donna~", answer: "seperti apa ~" },
    { word: "どれ", hiragana: "どれ", romaji: "dore", answer: "yang mana" },
    { word: "とても", hiragana: "とても", romaji: "totemo", answer: "sangat" },
    { word: "あまり", hiragana: "あまり", romaji: "amari", answer: "tidak terlalu" },
    { word: "そして", hiragana: "そして", romaji: "soshite", answer: "dan / kemudian" },
    { word: "～が、～", hiragana: "～が、～", romaji: "~ga, ~", answer: "tetapi / namun" },
    { word: "お元気ですか", hiragana: "おげんきですか", romaji: "ogenki desu ka", answer: "apa kabar?" },
    { word: "そうですね", hiragana: "そうですね", romaji: "sou desu ne", answer: "ya, benar" },
    { word: "日本の生活に慣れましたか", hiragana: "にほんのせいかつになれましたか", romaji: "nihon no seikatsu ni naremashita ka", answer: "apakah Anda sudah terbiasa di Jepang?" },
    { word: "～もう一杯いかがですか", hiragana: "～もういっぱいいかがですか", romaji: "~mou ippai ikaga desu ka", answer: "mau tambah lagi?" },
    { word: "いいえ、けっこうです", hiragana: "いいえ、けっこうです", romaji: "iie, kekkou desu", answer: "tidak, terima kasih" },
    { word: "そろそろ失礼します", hiragana: "そろそろしつれいします", romaji: "sorosoro shitsurei shimasu", answer: "saya harus pamit dulu" },
    { word: "またいらっしゃってください", hiragana: "またいらっしゃってください", romaji: "mata irasshatte kudasai", answer: "silakan datang lagi" }
  ],
  9: [
    { word: "わかります", hiragana: "わかります", romaji: "wakarimasu", answer: "mengerti / paham" },
    { word: "あります", hiragana: "あります", romaji: "arimasu", answer: "ada (benda mati)" },
    { word: "好き", hiragana: "すき", romaji: "suki", answer: "suka" },
    { word: "嫌い", hiragana: "きらい", romaji: "kirai", answer: "tidak suka" },
    { word: "上手", hiragana: "じょうず", romaji: "jouzu", answer: "pandai / mahir" },
    { word: "下手", hiragana: "へた", romaji: "heta", answer: "kurang pandai" },
    { word: "料理", hiragana: "りょうり", romaji: "ryouri", answer: "masakan; memasak" },
    { word: "飲み物", hiragana: "のみもの", romaji: "nomimono", answer: "minuman" },
    { word: "スポーツ", hiragana: "スポーツ", romaji: "supootsu", answer: "olahraga" },
    { word: "スポーツをします", hiragana: "スポーツをします", romaji: "supootsu o shimasu", answer: "berolahraga" },
    { word: "野球", hiragana: "やきゅう", romaji: "yakyuu", answer: "bisbol" },
    { word: "野球をします", hiragana: "やきゅうをします", romaji: "yakyuu o shimasu", answer: "bermain bisbol" },
    { word: "ダンス", hiragana: "ダンス", romaji: "dansu", answer: "tari / dansa" },
    { word: "ダンスをします", hiragana: "ダンスをします", romaji: "dansu o shimasu", answer: "berdansa / menari" },
    { word: "音楽", hiragana: "おんがく", romaji: "ongaku", answer: "musik" },
    { word: "歌", hiragana: "うた", romaji: "uta", answer: "lagu" },
    { word: "クラシック", hiragana: "クラシック", romaji: "kurashikku", answer: "musik klasik" },
    { word: "ジャズ", hiragana: "ジャズ", romaji: "jazu", answer: "jazz" },
    { word: "コンサート", hiragana: "コンサート", romaji: "konsaato", answer: "konser" },
    { word: "カラオケ", hiragana: "カラオケ", romaji: "karaoke", answer: "karaoke" },
    { word: "歌舞伎", hiragana: "かぶき", romaji: "kabuki", answer: "Kabuki (teater)" },
    { word: "絵", hiragana: "え", romaji: "e", answer: "gambar / lukisan" },
    { word: "字", hiragana: "じ", romaji: "ji", answer: "huruf / karakter" },
    { word: "漢字", hiragana: "かんじ", romaji: "kanji", answer: "huruf Kanji" },
    { word: "ひらがな", hiragana: "ひらがな", romaji: "hiragana", answer: "huruf Hiragana" },
    { word: "カタカナ", hiragana: "カタカナ", romaji: "katakana", answer: "huruf Katakana" },
    { word: "ローマ字", hiragana: "ローマじ", romaji: "roumaji", answer: "romaji" },
    { word: "細かいお金", hiragana: "こまかいおかね", romaji: "komakai okane", answer: "uang receh" },
    { word: "チケット", hiragana: "チケット", romaji: "chiketto", answer: "tiket" },
    { word: "時間", hiragana: "じかん", romaji: "jikan", answer: "waktu" },
    { word: "用事", hiragana: "ようじ", romaji: "youji", answer: "urusan / keperluan" },
    { word: "約束", hiragana: "やくそく", romaji: "yakusoku", answer: "janji" },
    { word: "ご主人", hiragana: "ごしゅじん", romaji: "goshujin", answer: "suami (orang lain)" },
    { word: "夫", hiragana: "おっと", romaji: "otto", answer: "suami (sendiri)" },
    { word: "主人", hiragana: "しゅじん", romaji: "shujin", answer: "suami (sendiri)" },
    { word: "奥さん", hiragana: "おくさん", romaji: "okusan", answer: "istri (orang lain)" },
    { word: "妻", hiragana: "つま", romaji: "tsuma", answer: "istri (sendiri)" },
    { word: "家内", hiragana: "かない", romaji: "kanai", answer: "istri (sendiri)" },
    { word: "子ども", hiragana: "こども", romaji: "kodomo", answer: "anak" },
    { word: "よく", hiragana: "よく", romaji: "yoku", answer: "sering / dengan baik" },
    { word: "だいたい", hiragana: "だいたい", romaji: "daitai", answer: "kira-kira" },
    { word: "たくさん", hiragana: "たくさん", romaji: "takusan", answer: "banyak" },
    { word: "少し", hiragana: "すこし", romaji: "sukoshi", answer: "sedikit" },
    { word: "全然", hiragana: "ぜんぜん", romaji: "zenzen", answer: "sama sekali tidak" },
    { word: "早く", hiragana: "はやく", romaji: "hayaku", answer: "cepat (awal)" },
    { word: "速く", hiragana: "はやく", romaji: "hayaku", answer: "cepat (kecepatan)" },
    { word: "～から", hiragana: "～から", romaji: "~kara", answer: "karena / dari" },
    { word: "どうして", hiragana: "どうして", romaji: "doushite", answer: "kenapa / mengapa" },
    { word: "残念です", hiragana: "ざんねんです", romaji: "zannen desu", answer: "sayang sekali" },
    { word: "すみません", hiragana: "すみません", romaji: "sumimasen", answer: "maaf / terima kasih" },
    { word: "もしもし", hiragana: "もしもし", romaji: "moshimoshi", answer: "halo (telepon)" },
    { word: "いっしょにいかがですか", hiragana: "いっしょにいかがですか", romaji: "issho ni ikaga desu ka", answer: "mau ikut bersama saya?" },
    { word: "～はちょっと", hiragana: "～はちょっと", romaji: "~wa chotto", answer: "agak sulit..." },
    { word: "だめですか", hiragana: "だめですか", romaji: "dame desu ka", answer: "tidak bisa ya?" },
    { word: "また今度お願いします", hiragana: "またこんどおねがいします", romaji: "mata kondo onegaishimasu", answer: "lain kali saja, ya." }
  ],
  10: [
    { word: "います", hiragana: "います", romaji: "imasu", answer: "ada (makhluk hidup)" },
    { word: "あります", hiragana: "あります", romaji: "arimasu", answer: "ada (benda mati)" },
    { word: "いろいろ", hiragana: "いろいろ", romaji: "iroiro", answer: "berbagai / bermacam-macam" },
    { word: "男の人", hiragana: "おとこのひと", romaji: "otoko no hito", answer: "laki-laki" },
    { word: "女の人", hiragana: "おんなのひと", romaji: "onna no hito", answer: "perempuan" },
    { word: "男の子", hiragana: "おとこのこ", romaji: "otoko no ko", answer: "anak laki-laki" },
    { word: "女の子", hiragana: "おんなのこ", romaji: "onna no ko", answer: "anak perempuan" },
    { word: "犬", hiragana: "いぬ", romaji: "inu", answer: "anjing" },
    { word: "猫", hiragana: "ねこ", romaji: "neko", answer: "kucing" },
    { word: "木", hiragana: "き", romaji: "ki", answer: "pohon" },
    { word: "物", hiragana: "もの", romaji: "mono", answer: "benda / barang" },
    { word: "フィルム", hiragana: "フィルム", romaji: "firumu", answer: "film (rol film)" },
    { word: "電池", hiragana: "でんち", romaji: "denchi", answer: "baterai" },
    { word: "箱", hiragana: "はこ", romaji: "hako", answer: "kotak" },
    { word: "スイッチ", hiragana: "スイッチ", romaji: "suitchi", answer: "sakelar" },
    { word: "冷蔵庫", hiragana: "れいぞうこ", romaji: "reizouko", answer: "kulkas" },
    { word: "テーブル", hiragana: "テーブル", romaji: "teburu", answer: "meja" },
    { word: "ベッド", hiragana: "ベッド", romaji: "beddo", answer: "tempat tidur" },
    { word: "棚", hiragana: "たな", romaji: "tana", answer: "rak" },
    { word: "ドア", hiragana: "ドア", romaji: "doa", answer: "pintu" },
    { word: "窓", hiragana: "まど", romaji: "mado", answer: "jendela" },
    { word: "ポスト", hiragana: "ポスト", romaji: "posuto", answer: "kotak surat" },
    { word: "ビル", hiragana: "ビル", romaji: "biru", answer: "gedung" },
    { word: "公園", hiragana: "こうえん", romaji: "kouen", answer: "taman" },
    { word: "喫茶店", hiragana: "きっさてん", romaji: "kissaten", answer: "kedai kopi / kafe" },
    { word: "本屋", hiragana: "ほんや", romaji: "honya", answer: "toko buku" },
    { word: "～屋", hiragana: "～や", romaji: "~ya", answer: "toko ~" },
    { word: "乗り場", hiragana: "のりば", romaji: "noriba", answer: "tempat naik" },
    { word: "県", hiragana: "けん", romaji: "ken", answer: "prefektur" },
    { word: "上", hiragana: "うえ", romaji: "ue", answer: "atas" },
    { word: "下", hiragana: "した", romaji: "shita", answer: "bawah" },
    { word: "前", hiragana: "まえ", romaji: "mae", answer: "depan" },
    { word: "後ろ", hiragana: "うしろ", romaji: "ushiro", answer: "belakang" },
    { word: "右", hiragana: "みぎ", romaji: "migi", answer: "kanan" },
    { word: "左", hiragana: "ひだり", romaji: "hidari", answer: "kiri" },
    { word: "中", hiragana: "なか", romaji: "naka", answer: "di dalam" },
    { word: "外", hiragana: "そと", romaji: "soto", answer: "di luar" },
    { word: "隣", hiragana: "となり", romaji: "tonari", answer: "di sebelah" },
    { word: "近く", hiragana: "ちかく", romaji: "chikaku", answer: "dekat" },
    { word: "間", hiragana: "あいだ", romaji: "aida", answer: "di antara" },
    { word: "～や～など", hiragana: "～や～など", romaji: "~ya ~nado", answer: "~, ~, dan lain-lain" },
    { word: "いちばん", hiragana: "いちばん", romaji: "ichiban", answer: "paling" },
    { word: "いちばん上", hiragana: "いちばんうえ", romaji: "ichiban ue", answer: "paling atas" },
    { word: "～段目", hiragana: "～だんめ", romaji: "~danme", answer: "tingkat/rak ke-~" },
    { word: "段", hiragana: "だん", romaji: "dan", answer: "tingkat" },
    { word: "どうもすみません", hiragana: "どうもすみません", romaji: "doumo sumimasen", answer: "terima kasih banyak" },
    { word: "チリソース", hiragana: "チリソース", romaji: "chiri sousu", answer: "saus cabai" },
    { word: "奥", hiragana: "おく", romaji: "oku", answer: "bagian dalam / belakang" },
    { word: "スパイスコーナー", hiragana: "スパイスコーナー", romaji: "supaisu kona", answer: "bagian rempah-rempah" }
  ],
  11: [
    { word: "います", hiragana: "います", romaji: "imasu", answer: "mempunyai anak" },
    { word: "います", hiragana: "います", romaji: "imasu", answer: "tinggal / berada di jepang" },
    { word: "かかります", hiragana: "かかります", romaji: "kakarimasu", answer: "memerlukan / menghabiskan (waktu atau uang)" },
    { word: "休みます", hiragana: "やすみます", romaji: "yasumimasu", answer: "libur / beristirahat" },
    { word: "会社を休みます", hiragana: "かいしゃをやすみます", romaji: "kaisha o yasumimasu", answer: "libur / tidak masuk kerja" },
    { word: "一つ", hiragana: "ひとつ", romaji: "hitotsu", answer: "satu (penghitung benda)" },
    { word: "二つ", hiragana: "ふたつ", romaji: "futatsu", answer: "dua (penghitung benda)" },
    { word: "三つ", hiragana: "みっつ", romaji: "mittsu", answer: "tiga (penghitung benda)" },
    { word: "四つ", hiragana: "よっつ", romaji: "yottsu", answer: "empat (penghitung benda)" },
    { word: "五つ", hiragana: "いつつ", romaji: "itsutsu", answer: "lima (penghitung benda)" },
    { word: "六つ", hiragana: "むっつ", romaji: "muttsu", answer: "enam (penghitung benda)" },
    { word: "七つ", hiragana: "ななつ", romaji: "nanatsu", answer: "tujuh (penghitung benda)" },
    { word: "八つ", hiragana: "やっつ", romaji: "yattsu", answer: "delapan (penghitung benda)" },
    { word: "九つ", hiragana: "ここのつ", romaji: "kokonotsu", answer: "sembilan (penghitung benda)" },
    { word: "十", hiragana: "とお", romaji: "to", answer: "sepuluh (penghitung benda)" },
    { word: "いくつ", hiragana: "いくつ", romaji: "ikutsu", answer: "berapa (jumlah benda)" },
    { word: "一人", hiragana: "ひとり", romaji: "hitori", answer: "satu orang" },
    { word: "二人", hiragana: "ふたり", romaji: "futari", answer: "dua orang" },
    { word: "～人", hiragana: "～にん", romaji: "~nin", answer: "~ orang" },
    { word: "～台", hiragana: "～だい", romaji: "~dai", answer: "penghitung mesin, mobil, kendaraan, dll." },
    { word: "～枚", hiragana: "～まい", romaji: "~mai", answer: "penghitung benda tipis (kertas, foto, baju, dll.)" },
    { word: "～回", hiragana: "～かい", romaji: "~kai", answer: "~ kali" },
    { word: "りんご", hiragana: "りんご", romaji: "ringo", answer: "apel" },
    { word: "みかん", hiragana: "みかん", romaji: "mikan", answer: "jeruk mandarin" },
    { word: "サンドイッチ", hiragana: "サンドイッチ", romaji: "sandoicchi", answer: "sandwich" },
    { word: "カレーライス", hiragana: "カレーライス", romaji: "kare raisu", answer: "nasi kari" },
    { word: "アイスクリーム", hiragana: "アイスクリーム", romaji: "aisukurimu", answer: "es krim" },
    { word: "切手", hiragana: "きって", romaji: "kitte", answer: "perangko" },
    { word: "はがき", hiragana: "はがき", romaji: "hagaki", answer: "kartu pos" },
    { word: "封筒", hiragana: "ふうとう", romaji: "futo", answer: "amplop" },
    { word: "速達", hiragana: "そくたつ", romaji: "sokutatsu", answer: "kiriman kilat / pos kilat" },
    { word: "書留", hiragana: "かきとめ", romaji: "kakitome", answer: "surat tercatat" },
    { word: "航空便", hiragana: "こうくうびん", romaji: "kokubin", answer: "pos udara" },
    { word: "船便", hiragana: "ふなびん", romaji: "funabin", answer: "pos laut" },
    { word: "両親", hiragana: "りょうしん", romaji: "ryoshin", answer: "orang tua" },
    { word: "兄弟", hiragana: "きょうだい", romaji: "kyodai", answer: "saudara kandung" },
    { word: "兄", hiragana: "あに", romaji: "ani", answer: "kakak laki-laki (sendiri)" },
    { word: "お兄さん", hiragana: "おにいさん", romaji: "oniisan", answer: "kakak laki-laki (orang lain)" },
    { word: "姉", hiragana: "あね", romaji: "ane", answer: "kakak perempuan (sendiri)" },
    { word: "お姉さん", hiragana: "おねえさん", romaji: "oneesan", answer: "kakak perempuan (orang lain)" },
    { word: "弟", hiragana: "おとうと", romaji: "ototo", answer: "adik laki-laki (sendiri)" },
    { word: "弟さん", hiragana: "おとうとさん", romaji: "ototo-san", answer: "adik laki-laki (orang lain)" },
    { word: "妹", hiragana: "いもうと", romaji: "imoto", answer: "adik perempuan (sendiri)" },
    { word: "妹さん", hiragana: "いもうとさん", romaji: "imoto-san", answer: "adik perempuan (orang lain)" },
    { word: "外国", hiragana: "がいこく", romaji: "gaikoku", answer: "luar negeri / negara asing" },
    { word: "～時間", hiragana: "～じかん", romaji: "~jikan", answer: "~ jam" },
    { word: "～週間", hiragana: "～しゅうかん", romaji: "~shukan", answer: "~ minggu" },
    { word: "～か月", hiragana: "～かげつ", romaji: "~kagetsu", answer: "~ bulan" },
    { word: "～年", hiragana: "～ねん", romaji: "~nen", answer: "~ tahun" },
    { word: "～ぐらい", hiragana: "～ぐらい", romaji: "~gurai", answer: "sekitar / kira-kira ~" },
    { word: "どのぐらい", hiragana: "どのぐらい", romaji: "dono gurai", answer: "berapa lama / seberapa banyak" },
    { word: "全部で", hiragana: "ぜんぶで", romaji: "zenbu de", answer: "semuanya / seluruhnya" },
    { word: "みんな", hiragana: "みんな", romaji: "minna", answer: "semua orang" },
    { word: "～だけ", hiragana: "～だけ", romaji: "~dake", answer: "hanya ~" },
    { word: "いらっしゃいませ", hiragana: "いらっしゃいませ", romaji: "irasshaimase", answer: "selamat datang (ucapan kepada pelanggan/tamu)" },
    { word: "いい天気ですね", hiragana: "いいてんきですね", romaji: "ii tenki desu ne", answer: "cuacanya bagus ya" },
    { word: "お出かけですか", hiragana: "おでかけですか", romaji: "odekake desu ka", answer: "mau pergi ke luar?" },
    { word: "ちょっと～まで", hiragana: "ちょっと～まで", romaji: "chotto ~ made", answer: "saya hanya pergi sebentar ke ~" },
    { word: "行っていらっしゃい", hiragana: "いっていらっしゃい", romaji: "itte irasshai", answer: "selamat jalan, hati-hati (semoga pergi dan kembali dengan selamat)" },
    { word: "行ってまいります", hiragana: "いってまいります", romaji: "itte mairimasu", answer: "saya pergi dulu (dan akan kembali)" },
    { word: "それから", hiragana: "それから", romaji: "sorekara", answer: "lalu / setelah itu" },
    { word: "オーストラリア", hiragana: "オーストラリア", romaji: "Oosutoraria", answer: "australia" }
  ],
  12: [
    { word: "簡単【な】", hiragana: "かんたん【な】", romaji: "kantan (na)", answer: "mudah, sederhana" },
    { word: "近い", hiragana: "ちかい", romaji: "chikai", answer: "dekat" },
    { word: "遠い", hiragana: "とおい", romaji: "toi", answer: "jauh" },
    { word: "速い・早い", hiragana: "はやい", romaji: "hayai", answer: "cepat / awal" },
    { word: "遅い", hiragana: "おそい", romaji: "osoi", answer: "lambat" },
    { word: "多い【人が～】", hiragana: "おおい【ひとが～】", romaji: "oi (hito ga ~)", answer: "banyak (orang)" },
    { word: "少ない【人が～】", hiragana: "すくない【ひとが～】", romaji: "sukunai (hito ga ~)", answer: "sedikit (orang)" },
    { word: "暖かい・温かい", hiragana: "あたたかい", romaji: "atatakai", answer: "hangat" },
    { word: "涼しい", hiragana: "すずしい", romaji: "suzushii", answer: "sejuk" },
    { word: "甘い", hiragana: "あまい", romaji: "amai", answer: "manis" },
    { word: "辛い", hiragana: "からい", romaji: "karai", answer: "pedas" },
    { word: "重い", hiragana: "おもい", romaji: "omoi", answer: "berat" },
    { word: "軽い", hiragana: "かるい", romaji: "karui", answer: "ringan" },
    { word: "いい【コーヒーが～】", hiragana: "いい【コーヒーが～】", romaji: "ii (kohi ga ~)", answer: "suka (kopi)" },
    { word: "季節", hiragana: "きせつ", romaji: "kisetsu", answer: "musim" },
    { word: "春", hiragana: "はる", romaji: "haru", answer: "musim semi" },
    { word: "夏", hiragana: "なつ", romaji: "natsu", answer: "musim panas" },
    { word: "秋", hiragana: "あき", romaji: "aki", answer: "musim gugur" },
    { word: "冬", hiragana: "ふゆ", romaji: "fuyu", answer: "musim dingin" },
    { word: "天気", hiragana: "てんき", romaji: "tenki", answer: "cuaca" },
    { word: "雨", hiragana: "あめ", romaji: "ame", answer: "hujan" },
    { word: "雪", hiragana: "ゆき", romaji: "yuki", answer: "salju" },
    { word: "曇り", hiragana: "くもり", romaji: "kumori", answer: "berawan" },
    { word: "ホテル", hiragana: "ホテル", romaji: "hoteru", answer: "hotel" },
    { word: "空港", hiragana: "くうこう", romaji: "kuko", answer: "bandara" },
    { word: "海", hiragana: "うみ", romaji: "umi", answer: "laut" },
    { word: "世界", hiragana: "せかい", romaji: "sekai", answer: "dunia" },
    { word: "パーティー", hiragana: "パーティー", romaji: "pati", answer: "pesta" },
    { word: "【お】祭り", hiragana: "【お】まつり", romaji: "(o)matsuri", answer: "festival" },
    { word: "試験", hiragana: "しけん", romaji: "shiken", answer: "ujian" },
    { word: "すき焼き", hiragana: "すきやき", romaji: "sukiyaki", answer: "sukiyaki" },
    { word: "刺身", hiragana: "さしみ", romaji: "sashimi", answer: "sashimi" },
    { word: "【お】すし", hiragana: "【お】すし", romaji: "(o)sushi", answer: "sushi" },
    { word: "てんぷら", hiragana: "てんぷら", romaji: "tenpura", answer: "tempura" },
    { word: "生け花", hiragana: "いけばな", romaji: "ikebana", answer: "seni merangkai bunga" },
    { word: "紅葉", hiragana: "もみじ", romaji: "momiji", answer: "daun musim gugur" },
    { word: "どちら", hiragana: "どちら", romaji: "dochira", answer: "yang mana (dari dua)" },
    { word: "どちらも", hiragana: "どちらも", romaji: "dochira mo", answer: "keduanya" },
    { word: "ずっと", hiragana: "ずっと", romaji: "zutto", answer: "terus / sejak dulu / jauh lebih" },
    { word: "はじめて", hiragana: "はじめて", romaji: "hajimete", answer: "untuk pertama kalinya" },
    { word: "ただいま", hiragana: "ただいま", romaji: "tadaima", answer: "saya pulang" },
    { word: "おかえりなさい", hiragana: "おかえりなさい", romaji: "okaerinasai", answer: "selamat datang kembali" },
    { word: "でも", hiragana: "でも", romaji: "demo", answer: "tetapi / namun" },
    { word: "つかれました", hiragana: "つかれました", romaji: "tsukaremashita", answer: "saya lelah / capai" }
  ],
  13: [
    { word: "遊びます", hiragana: "あそびます", romaji: "asobimasu", answer: "bermain" },
    { word: "泳ぎます", hiragana: "およぎます", romaji: "oyogimasu", answer: "berenang" },
    { word: "迎えます", hiragana: "むかえます", romaji: "mukaemasu", answer: "menjemput" },
    { word: "疲れます", hiragana: "つかれます", romaji: "tsukaremasu", answer: "lelah / capek" },
    { word: "出します", hiragana: "だします", romaji: "dashimasu", answer: "mengirim (surat), mengeluarkan" },
    { word: "入ります", hiragana: "はいります", romaji: "hairimasu", answer: "masuk (ke toko/kedai kopi, dll.)" },
    { word: "出ます", hiragana: "でます", romaji: "demasu", answer: "keluar (dari toko/kedai kopi, dll.)" },
    { word: "結婚します", hiragana: "けっこんします", romaji: "kekkon shimasu", answer: "menikah" },
    { word: "買い物します", hiragana: "かいものします", romaji: "kaimono shimasu", answer: "berbelanja" },
    { word: "食事します", hiragana: "しょくじします", romaji: "shokuji shimasu", answer: "makan" },
    { word: "散歩します", hiragana: "さんぽします", romaji: "sanpo shimasu", answer: "berjalan-jalan" },
    { word: "大変【な】", hiragana: "たいへん【な】", romaji: "taihen", answer: "berat, sulit, parah" },
    { word: "欲しい", hiragana: "ほしい", romaji: "hoshii", answer: "ingin" },
    { word: "寂しい", hiragana: "さびしい", romaji: "sabishii", answer: "kesepian, sedih" },
    { word: "広い", hiragana: "ひろい", romaji: "hiroi", answer: "luas" },
    { word: "狭い", hiragana: "せまい", romaji: "semai", answer: "sempit" },
    { word: "市役所", hiragana: "しやくしょ", romaji: "shiyakusho", answer: "balai kota / kantor kota" },
    { word: "プール", hiragana: "プール", romaji: "puru", answer: "kolam renang" },
    { word: "川", hiragana: "かわ", romaji: "kawa", answer: "sungai" },
    { word: "経済", hiragana: "けいざい", romaji: "keizai", answer: "ekonomi" },
    { word: "美術", hiragana: "びじゅつ", romaji: "bijutsu", answer: "seni rupa" },
    { word: "釣り", hiragana: "つり", romaji: "tsuri", answer: "memancing" },
    { word: "スキー", hiragana: "スキー", romaji: "suki", answer: "ski" },
    { word: "会議", hiragana: "かいぎ", romaji: "kaigi", answer: "rapat" },
    { word: "登録", hiragana: "とうろく", romaji: "toroku", answer: "pendaftaran" },
    { word: "週末", hiragana: "しゅうまつ", romaji: "shuumatsu", answer: "akhir pekan" },
    { word: "～ごろ", hiragana: "～ごろ", romaji: "~goro", answer: "sekitar (waktu)" },
    { word: "何か", hiragana: "なにか", romaji: "nanika", answer: "sesuatu" },
    { word: "どこか", hiragana: "どこか", romaji: "dokoka", answer: "suatu tempat" },
    { word: "おなかがすきました。", hiragana: "おなかがすきました。", romaji: "onaka ga sukimashita", answer: "saya lapar" },
    { word: "おなかがいっぱいです。", hiragana: "おなかがいっぱいです。", romaji: "onaka ga ippai desu", answer: "saya kenyang" },
    { word: "のどがかわきました。", hiragana: "のどがかわきました。", romaji: "nodo ga kawakimashita", answer: "saya haus" },
    { word: "そうですね。", hiragana: "そうですね。", romaji: "so desu ne", answer: "saya setuju / betul ya" },
    { word: "そうしましょう。", hiragana: "そうしましょう。", romaji: "so shimasho", answer: "baik, mari kita lakukan" },
    { word: "ご注文は？", hiragana: "ごちゅうもんは？", romaji: "gochumon wa?", answer: "mau pesan apa?" },
    { word: "定食", hiragana: "ていしょく", romaji: "teishoku", answer: "paket makanan" },
    { word: "牛どん", hiragana: "ぎゅうどん", romaji: "gyudon", answer: "gyudon (nasi dengan daging sapi)" },
    { word: "少々お待ちください。", hiragana: "しょうしょうおまちください。", romaji: "shosho omachi kudasai", answer: "tolong tunggu sebentar" }
  ],
  14: [
    { word: "つけます", hiragana: "つけます", romaji: "tsukemasu", answer: "menyalan" },
    { word: "消します", hiragana: "けします", romaji: "keshimasu", answer: "mematikan" },
    { word: "開けます", hiragana: "あけます", romaji: "akemasu", answer: "membuka" },
    { word: "閉めます", hiragana: "しめます", romaji: "shimemasu", answer: "menutup" },
    { word: "急ぎます", hiragana: "いそぎます", romaji: "isogimasu", answer: "terburu-buru" },
    { word: "待ちます", hiragana: "まちます", romaji: "machimasu", answer: "menunggu" },
    { word: "止めます", hiragana: "とめます", romaji: "tomemasu", answer: "berhenti, memarkir" },
    { word: "曲がります", hiragana: "まがります", romaji: "magarimasu", answer: "berbelok" },
    { word: "持ちます", hiragana: "もちます", romaji: "mochimasu", answer: "membawa" },
    { word: "手伝います", hiragana: "てつだいます", romaji: "tetsudaimasu", answer: "membantu" },
    { word: "呼びます", hiragana: "よびます", romaji: "yobimasu", answer: "memanggil" },
    { word: "話します", hiragana: "はなします", romaji: "hanashimasu", answer: "berbicara" },
    { word: "見せます", hiragana: "みせます", romaji: "misemasu", answer: "memperlihatkan" },
    { word: "教えます", hiragana: "おしえます", romaji: "oshiemasu", answer: "memberi tahu / mengajarkan" },
    { word: "始めます", hiragana: "はじめます", romaji: "hajimemasu", answer: "memulai" },
    { word: "降ります", hiragana: "ふります", romaji: "furimasu", answer: "turun (hujan)" },
    { word: "コピーします", hiragana: "コピーします", romaji: "kopi shimasu", answer: "menyalin / fotokopi" },
    { word: "エアコン", hiragana: "エアコン", romaji: "eakon", answer: "ac / pendingin ruangan" },
    { word: "パスポート", hiragana: "パスポート", romaji: "pasupoto", answer: "paspor" },
    { word: "名前", hiragana: "なまえ", romaji: "namae", answer: "nama" },
    { word: "住所", hiragana: "じゅうしょ", romaji: "jusho", answer: "alamat" },
    { word: "地図", hiragana: "ちず", romaji: "chizu", answer: "peta" },
    { word: "塩", hiragana: "しお", romaji: "shio", answer: "garam" },
    { word: "砂糖", hiragana: "さとう", romaji: "sato", answer: "gula" },
    { word: "読み方", hiragana: "よみかた", romaji: "yomikata", answer: "cara membaca" },
    { word: "～方", hiragana: "～かた", romaji: "~kata", answer: "cara ～" },
    { word: "ゆっくり", hiragana: "ゆっくり", romaji: "yukkuri", answer: "pelan-pelan, santai" },
    { word: "すぐ", hiragana: "すぐ", romaji: "sugu", answer: "segera, langsung" },
    { word: "また", hiragana: "また", romaji: "mata", answer: "lagi" },
    { word: "あとで", hiragana: "あとで", romaji: "atode", answer: "nanti" },
    { word: "もう少し", hiragana: "もうすこし", romaji: "mo sukoshi", answer: "sedikit lagi" },
    { word: "もう～", hiragana: "もう～", romaji: "mo~", answer: "lagi / lebih ～" },
    { word: "いいですよ。", hiragana: "いいですよ。", romaji: "ii desu yo", answer: "tentu saja / tidak apa-apa" },
    { word: "さあ", hiragana: "さあ", romaji: "sa", answer: "ayo / nah" },
    { word: "あれ？", hiragana: "あれ？", romaji: "are?", answer: "loh? / oh?" },
    { word: "信号を右へ曲がってください。", hiragana: "しんごうをみぎへまがってください。", romaji: "shingo o migi e magatte kudasai", answer: "belok kanan di lampu merah" },
    { word: "まっすぐ", hiragana: "まっすぐ", romaji: "massugu", answer: "lurus" },
    { word: "これでお願いします。", hiragana: "これでをおねがいします。", romaji: "kore de onegaishimasu", answer: "saya bayar dengan ini" },
    { word: "お釣り", hiragana: "おつり", romaji: "otsuri", answer: "uang kembalian" }
  ],
  15: [
    { word: "立ちます", hiragana: "たちます", romaji: "tachimasu", answer: "berdiri" },
    { word: "座ります", hiragana: "すわります", romaji: "suwarimasu", answer: "duduk" },
    { word: "使います", hiragana: "つかいます", romaji: "tsukaimasu", answer: "menggunakan" },
    { word: "置きます", hiragana: "おきます", romaji: "okimasu", answer: "menaruh / meletakkan" },
    { word: "作ります・造ります", hiragana: "つくります", romaji: "tsukurimasu", answer: "membuat, menghasilkan" },
    { word: "売ります", hiragana: "うります", romaji: "urimasu", answer: "menjual" },
    { word: "知ります", hiragana: "しります", romaji: "shirimasu", answer: "mengetahui, mengenal" },
    { word: "住みます", hiragana: "すみます", romaji: "sumimasu", answer: "tinggal, menetap" },
    { word: "研究します", hiragana: "けんきゅうします", romaji: "kenkyu shimasu", answer: "melakukan penelitian" },
    { word: "知リません", hiragana: "しりません", romaji: "shirimasen", answer: "tidak tahu / tidak kenal" },
    { word: "住んでいます", hiragana: "すんでいます", romaji: "sunde imasu", answer: "tinggal (di suatu tempat)" },
    { word: "資料", hiragana: "しりょう", romaji: "shiryo", answer: "data, bahan" },
    { word: "カタログ", hiragana: "カタログ", romaji: "katarogu", answer: "katalog" },
    { word: "時刻表", hiragana: "じこくひょう", romaji: "jikokuhyo", answer: "jadwal" },
    { word: "服", hiragana: "ふく", romaji: "fuku", answer: "pakaian" },
    { word: "製品", hiragana: "せいひん", romaji: "seihin", answer: "produk" },
    { word: "ソフト", hiragana: "ソフト", romaji: "sofuto", answer: "perangkat lunak (software)" },
    { word: "専門", hiragana: "せんもん", romaji: "senmon", answer: "bidang keahlian / spesialisasi" },
    { word: "歯医者", hiragana: "はいしゃ", romaji: "haisha", answer: "dokter gigi" },
    { word: "床屋", hiragana: "とこや", romaji: "tokoya", answer: "tukang cukur" },
    { word: "プレイガイド", hiragana: "プレイガイド", romaji: "pureigaido", answer: "agen penjualan tiket" },
    { word: "独身", hiragana: "どくしん", romaji: "dokushin", answer: "lajang" },
    { word: "特に", hiragana: "とくに", romaji: "tokuni", answer: "terutama" },
    { word: "思い出す", hiragana: "おもいだします", romaji: "omoidasimasu", answer: "mengingat" },
    { word: "ご家族", hiragana: "ごかぞく", romaji: "gokazoku", answer: "keluarga anda" },
    { word: "いらっしゃいます", hiragana: "いらっしゃいます", romaji: "irasshaimasu", answer: "ada / datang / pergi (bentuk hormat)" },
    { word: "高校", hiragana: "こうこう", romaji: "koko", answer: "sma" }
  ],
  16: [
    { word: "乗ります", hiragana: "のります", romaji: "norimasu", answer: "naik (kereta, bus, dll.)" },
    { word: "降ります", hiragana: "おります", romaji: "orimasu", answer: "turun (dari kereta, bus, dll.)" },
    { word: "乗り換えます", hiragana: "のりかえます", romaji: "norikaemasu", answer: "berganti / transit (kereta, dll.)" },
    { word: "浴びます", hiragana: "あびます", romaji: "abimasu", answer: "mandi (mandi pancuran)" },
    { word: "入れます", hiragana: "いれます", romaji: "iremasu", answer: "memasukkan" },
    { word: "出します", hiragana: "だします", romaji: "dashimasu", answer: "mengeluarkan, menarik" },
    { word: "出ます", hiragana: "でます", romaji: "demasu", answer: "lulus (dari universitas)" },
    { word: "やめます", hiragana: "やめます", romaji: "yamemasu", answer: "berhenti, pensiun, keluar (dari perusahaan)" },
    { word: "押します", hiragana: "おします", romaji: "oshimasu", answer: "menekan" },
    { word: "若い", hiragana: "わかい", romaji: "wakai", answer: "muda" },
    { word: "長い", hiragana: "ながい", romaji: "nagai", answer: "panjang" },
    { word: "短い", hiragana: "みじかい", romaji: "mijikai", answer: "pendek" },
    { word: "明るい", hiragana: "あかるい", romaji: "akarui", answer: "terang" },
    { word: "暗い", hiragana: "くらい", romaji: "kurai", answer: "gelap" },
    { word: "背が高い", hiragana: "せがたかい", romaji: "se ga takai", answer: "bertubuh tinggi" },
    { word: "頭がいい", hiragana: "あたまがいい", romaji: "atama ga ii", answer: "pintar" },
    { word: "体", hiragana: "からだ", romaji: "karada", answer: "tubuh" },
    { word: "頭", hiragana: "あたま", romaji: "atama", answer: "kepala" },
    { word: "髪", hiragana: "かみ", romaji: "kami", answer: "rambut" },
    { word: "顔", hiragana: "かお", romaji: "kao", answer: "wajah" },
    { word: "目", hiragana: "め", romaji: "me", answer: "mata" },
    { word: "耳", hiragana: "みみ", romaji: "mimi", answer: "telinga" },
    { word: "口", hiragana: "くち", romaji: "kuchi", answer: "mulut" },
    { word: "歯", hiragana: "は", romaji: "ha", answer: "gigi" },
    { word: "おなか", hiragana: "おなか", romaji: "onaka", answer: "perut" },
    { word: "足", hiragana: "あし", romaji: "ashi", answer: "kaki" },
    { word: "サービス", hiragana: "サービス", romaji: "sabisu", answer: "pelayanan" },
    { word: "ジョギング", hiragana: "ジョギング", romaji: "jogingu", answer: "jogging" },
    { word: "シャワー", hiragana: "シャワー", romaji: "shawa", answer: "mandi pancuran / shower" },
    { word: "緑", hiragana: "みどり", romaji: "midori", answer: "hijau" },
    { word: "お寺", hiragana: "おてら", romaji: "otera", answer: "kuil buddha" },
    { word: "神社", hiragana: "じんじゃ", romaji: "jinja", answer: "kuil shinto" },
    { word: "留学生", hiragana: "りゅうがくせい", romaji: "ryugakusei", answer: "pelajar asing" },
    { word: "～番", hiragana: "～ばん", romaji: "~ban", answer: "nomor / urutan ke-" },
    { word: "どうやって", hiragana: "どうやって", romaji: "do yatte", answer: "bagaimana caranya" },
    { word: "どの～", hiragana: "どの～", romaji: "dono~", answer: "yang mana ~ (di antara tiga atau lebih)" },
    { word: "～です。", hiragana: "～です。", romaji: "~desu", answer: "kekurangan saya adalah ~" },
    { word: "お引き出しですか。", hiragana: "おひきだしですか。", romaji: "ohikidashi desu ka", answer: "apakah anda melakukan penarikan (uang)?" },
    { word: "まず", hiragana: "まず", romaji: "mazu", answer: "pertama-tama" },
    { word: "キャッシュカード", hiragana: "キャッシュカード", romaji: "kyasshu kado", answer: "kartu atm / kartu penarikan uang" },
    { word: "暗証番号", hiragana: "あんしょうばんごう", romaji: "ansho bango", answer: "nomor pin" },
    { word: "次に", hiragana: "つぎに", romaji: "tsugi ni", answer: "selanjutnya" },
    { word: "金額", hiragana: "きんがく", romaji: "kingaku", answer: "jumlah uang" },
    { word: "確認", hiragana: "かくにん", romaji: "kakunin", answer: "konfirmasi" },
    { word: "ボタン", hiragana: "ボタン", romaji: "botan", answer: "tombol" }
  ],
  17: [
    { word: "覚えます", hiragana: "おぼえます", romaji: "oboemasu", answer: "menghafal, mengingat" },
    { word: "忘れます", hiragana: "わすれます", romaji: "wasuremasu", answer: "lupa" },
    { word: "なくします", hiragana: "なくします", romaji: "nakushimasu", answer: "kehilangan" },
    { word: "出します", hiragana: "だします", romaji: "dashimasu", answer: "menyerahkan" },
    { word: "払います", hiragana: "はらいまま", romaji: "haraimasu", answer: "membayar" },
    { word: "返します", hiragana: "かえします", romaji: "kaeshimasu", answer: "mengembalikan" },
    { word: "脱ぎます", hiragana: "ぬぎます", romaji: "nugimasu", answer: "melepas (pakaian, sepatu, dll.)" },
    { word: "持って行きます", hiragana: "もっていきます", romaji: "motte ikimasu", answer: "membawa pergi" },
    { word: "持って来ます", hiragana: "もってきます", romaji: "motte kimasu", answer: "membawa datang" },
    { word: "心配します", hiragana: "しんぱいします", romaji: "shinpai shimasu", answer: "mencemaskan, khawatir" },
    { word: "残業します", hiragana: "ざんぎょうします", romaji: "zangyo shimasu", answer: "lembur" },
    { word: "出張します", hiragana: "しゅっちょうします", romaji: "shuccho shimasu", answer: "perjalanan dinas" },
    { word: "薬を飲みます", hiragana: "くすりをのみます", romaji: "kusuri o nomimasu", answer: "minum obat" },
    { word: "お風呂に入ります", hiragana: "おふろにはいります", romaji: "ofuro ni hairimasu", answer: "mandi (berendam di bak mandi)" },
    { word: "大切", hiragana: "たいせつ", romaji: "taisetsu", answer: "penting" },
    { word: "大丈夫", hiragana: "だいじょうぶ", romaji: "daijobu", answer: "tidak apa-apa" },
    { word: "危ない", hiragana: "あぶない", romaji: "abunai", answer: "berbahaya" },
    { word: "問題", hiragana: "もんだい", romaji: "mondai", answer: "masalah" },
    { word: "答え", hiragana: "こたえ", romaji: "kotae", answer: "jawaban" },
    { word: "禁煙", hiragana: "きんえん", romaji: "kin'en", answer: "dilarang merokok" },
    { word: "健康保険証", hiragana: "けんこうほけんしょう", romaji: "kenko hokensho", answer: "kartu asuransi kesehatan" },
    { word: "かぜ", hiragana: "かぜ", romaji: "kaze", answer: "masuk angin / flu" },
    { word: "熱", hiragana: "ねつ", romaji: "netsu", answer: "demam" },
    { word: "病気", hiragana: "びょうき", romaji: "byoki", answer: "sakit / penyakit" },
    { word: "薬", hiragana: "くすり", romaji: "kusuri", answer: "obat" },
    { word: "お風呂", hiragana: "おふろ", romaji: "ofuro", answer: "bak mandi" },
    { word: "上着", hiragana: "うわぎ", romaji: "uwagi", answer: "jaket, pakaian luar" },
    { word: "下着", hiragana: "したぎ", romaji: "shitagi", answer: "pakaian dalam" },
    { word: "先生", hiragana: "せんせい", romaji: "sensei", answer: "dokter (saat berbicara kepada dokter) / guru" },
    { word: "～までに", hiragana: "～までに", romaji: "~made ni", answer: "sebelum / paling lambat ～" },
    { word: "ですから", hiragana: "ですから", romaji: "desu kara", answer: "oleh karena itu, jadi..." },
    { word: "どうしましたか", hiragana: "どうしましたか", romaji: "do shimashita ka", answer: "ada apa? / apa masalahnya?" },
    { word: "～が痛いです", hiragana: "～がいたいですが", romaji: "~ga itai desu", answer: "bagian ～ saya sakit" },
    { word: "お大事に", hiragana: "おだいじに", romaji: "odaiji ni", answer: "semoga lekas sembuh." }
  ],
  18: [
    { word: "できます", hiragana: "できます", romaji: "dekimasu", answer: "bisa (II)" },
    { word: "洗います", hiragana: "あらいます", romaji: "araimasu", answer: "mencuci (piring, gelas, dll.) (I)" },
    { word: "弾きます", hiragana: "ひきます", romaji: "hikimasu", answer: "bermain alat musik (piano, gitar, dll.) (I)" },
    { word: "歌います", hiragana: "うたいまま", romaji: "utaimasu", answer: "bernyanyi (I)" },
    { word: "集めます", hiragana: "あつめます", romaji: "atsumemasu", answer: "mengumpulkan (II)" },
    { word: "捨てます", hiragana: "すてます", romaji: "sutemasu", answer: "membuang (II)" },
    { word: "換えます", hiragana: "かえます", romaji: "kaemasu", answer: "menukar, mengganti (II)" },
    { word: "運転します", hiragana: "うんてんします", romaji: "unten shimasu", answer: "mengemudi (III)" },
    { word: "予約します", hiragana: "よやくします", romaji: "yoyaku shimasu", answer: "memesan / membooking (III)" },
    { word: "見学します", hiragana: "けんがくします", romaji: "kengaku shimasu", answer: "mengunjungi untuk belajar (III)" },
    { word: "ピアノ", hiragana: "ピアノ", romaji: "piano", answer: "piano" },
    { word: "～メートル", hiragana: "～メートル", romaji: "~metoru", answer: "~ meter" },
    { word: "国際～", hiragana: "こくさい～", romaji: "kokusai~", answer: "internasional ~" },
    { word: "現金", hiragana: "げんきん", romaji: "genkin", answer: "uang tunai" },
    { word: "趣味", hiragana: "しゅみ", romaji: "shumi", answer: "hobi" },
    { word: "日記", hiragana: "にっき", romaji: "nikki", answer: "buku harian" },
    { word: "お祈り", hiragana: "おいのり", romaji: "oinori", answer: "berdoa" },
    { word: "課長", hiragana: "かちょう", romaji: "kacho", answer: "kepala seksi" },
    { word: "部長", hiragana: "ぶちょう", romaji: "bucho", answer: "kepala departemen" },
    { word: "社長", hiragana: "しゃちょう", romaji: "shacho", answer: "presiden direktur / pimpinan perusahaan" },
    { word: "動物", hiragana: "どうぶつ", romaji: "dobutsu", answer: "binatang" },
    { word: "馬", hiragana: "うま", romaji: "uma", answer: "kuda" },
    { word: "へえ", hiragana: "へえ", romaji: "he", answer: "wah! (ungkapan terkejut)" },
    { word: "それはおもしろいですね。", hiragana: "それはおもしろいですね。", romaji: "sore wa omoshiroi desu ne", answer: "wah, itu menarik ya." },
    { word: "なかなか", hiragana: "なかなか", romaji: "nakanaka", answer: "tidak mudah (dengan bentuk negatif)" },
    { word: "牧場", hiragana: "ぼくじょう", romaji: "bokujo", answer: "peternakan" },
    { word: "ほんとうですか。", hiragana: "ほんとうですか。", romaji: "honto desu ka", answer: "benarkah?" }
  ],
  19: [
    { word: "登ります", hiragana: "のぼります【やまに～】", romaji: "noborimasu", answer: "mendaki (gunung) (I)" },
    { word: "泊まります", hiragana: "とまります【ホテルに～】", romaji: "tomarimasu", answer: "menginap (di hotel) (I)" },
    { word: "掃除します", hiragana: "そうじします", romaji: "soji shimasu", answer: "membersihkan (III)" },
    { word: "洗濯します", hiragana: "せんたくします", romaji: "sentaku shimasu", answer: "mencuci pakaian (III)" },
    { word: "練習します", hiragana: "れんしゅうします", romaji: "renshu shimasu", answer: "berlatih (III)" },
    { word: "なります", hiragana: "なります", romaji: "narimasu", answer: "menjadi (I)" },
    { word: "眠い", hiragana: "ねむい", romaji: "nemui", answer: "mengantuk" },
    { word: "強い", hiragana: "つよい", romaji: "tsuyoi", answer: "kuat" },
    { word: "弱い", hiragana: "よわい", romaji: "yowai", answer: "lemah" },
    { word: "調子がいい", hiragana: "ちょうしがいい", romaji: "choshi ga ii", answer: "kondisinya baik" },
    { word: "調子が悪い", hiragana: "ちょうしがわるい", romaji: "choshi ga warui", answer: "kondisinya buruk" },
    { word: "調子", hiragana: "ちょうし", romaji: "choshi", answer: "kondisi" },
    { word: "ゴルフ", hiragana: "ゴルフ", romaji: "gorufu", answer: "golf" },
    { word: "相撲", hiragana: "すもう", romaji: "sumo", answer: "sumo" },
    { word: "パチンコ", hiragana: "パチンコ", romaji: "pachinko", answer: "pachinko" },
    { word: "お茶", hiragana: "おちゃ", romaji: "ocha", answer: "teh hijau" },
    { word: "日", hiragana: "ひ", romaji: "hi", answer: "hari, tanggal" },
    { word: "一度", hiragana: "いちど", romaji: "ichido", answer: "sekali" },
    { word: "一度も", hiragana: "いちども", romaji: "ichidomo", answer: "tidak pernah (dengan bentuk negatif)" },
    { word: "だんだん", hiragana: "だんだん", romaji: "dandan", answer: "berangsur-angsur" },
    { word: "もうすぐ", hiragana: "もうすぐ", romaji: "mosugu", answer: "sebentar lagi" },
    { word: "おかげさまで", hiragana: "おかげさまで", romaji: "okagesama de", answer: "terima kasih, berkat bantuan anda" },
    { word: "乾杯", hiragana: "かんぱい", romaji: "kanpai", answer: "bersulang" },
    { word: "実は", hiragana: "じつは", romaji: "jitsu wa", answer: "sebenarnya" },
    { word: "ダイエット", hiragana: "ダイエット", romaji: "daietto", answer: "diet" },
    { word: "何回も", hiragana: "なんかいも", romaji: "nankai mo", answer: "berkali-kali" },
    { word: "しかし", hiragana: "しかし", romaji: "shikashi", answer: "tetapi, namun" },
    { word: "無理【な】", hiragana: "むり【な】", romaji: "muri", answer: "berlebihan, tidak mungkin" },
    { word: "体にいい", hiragana: "からだにいい", romaji: "karada ni ii", answer: "baik untuk kesehatan" },
    { word: "ケーキ", hiragana: "ケーキ", romaji: "keki", answer: "kue" }
  ],
  20: [
    { word: "要る", hiragana: "いります【ビザが～】", romaji: "irimasu", answer: "memerlukan, membutuhkan (visa) (I)" },
    { word: "調べる", hiragana: "しらべます", romaji: "shirabemasu", answer: "memeriksa, menyelidiki (II)" },
    { word: "直す", hiragana: "なおします", romaji: "naoshimasu", answer: "memperbaiki (I)" },
    { word: "修理する", hiragana: "しゅうりします", romaji: "shuri shimasu", answer: "memperbaiki (III)" },
    { word: "電話する", hiragana: "でんわします", romaji: "denwa shimasu", answer: "menelepon (III)" },
    { word: "僕", hiragana: "ぼく", romaji: "boku", answer: "saya (informal, laki-laki)" },
    { word: "君", hiragana: "きみ", romaji: "kimi", answer: "kamu (informal)" },
    { word: "～君", hiragana: "～くん", romaji: "~kun", answer: "sapaan untuk laki-laki" },
    { word: "うん", hiragana: "うん", romaji: "un", answer: "ya (informal)" },
    { word: "ううん", hiragana: "ううん", romaji: "un", answer: "tidak (informal)" },
    { word: "サラリーマン", hiragana: "サラリーマン", romaji: "sarariman", answer: "pekerja kantoran" },
    { word: "言葉", hiragana: "ことば", romaji: "kotoba", answer: "kata, bahasa" },
    { word: "物価", hiragana: "ぶっか", romaji: "bukka", answer: "harga" },
    { word: "着物", hiragana: "きもの", romaji: "kimono", answer: "kimono" },
    { word: "ビザ", hiragana: "ビザ", romaji: "biza", answer: "visa" },
    { word: "初め", hiragana: "はじめ", romaji: "hajime", answer: "awal, permulaan" },
    { word: "終わり", hiragana: "おわり", romaji: "owari", answer: "akhir" },
    { word: "こっち", hiragana: "こっち", romaji: "kocchi", answer: "sebelah sini" },
    { word: "あっち", hiragana: "あっち", romaji: "acchi", answer: "sebelah sana (jauh)" },
    { word: "どっち", hiragana: "どっち", romaji: "docchi", answer: "yang mana / sebelah mana" },
    { word: "あの間", hiragana: "あのあいだ", romaji: "ano aida", answer: "hari yang lain / beberapa waktu lalu" },
    { word: "皆で", hiragana: "みんなで", romaji: "minna de", answer: "semua bersama-sama" },
    { word: "～けど", hiragana: "～けど", romaji: "~kedo", answer: "tetapi, tapi" },
    { word: "国へ帰るの？", hiragana: "くにへかえるの？", romaji: "kuni e kaeru no?", answer: "apakah akan kembali ke negara asal?" },
    { word: "どうするの？", hiragana: "どうするの？", romaji: "do suru no?", answer: "apa yang akan kamu lakukan?" },
    { word: "どうしようかな。", hiragana: "どうしようかな。", romaji: "do shiyo kana", answer: "apa yang harus saya lakukan ya?" },
    { word: "よかったら", hiragana: "よかったら", romaji: "yokattara", answer: "kalau / jika berkenan" },
    { word: "色々", hiragana: "いろいろ", romaji: "iroiro", answer: "bermacam-macam" }
  ],
  21: [
    { word: "思う", hiragana: "おもいます", romaji: "omoimasu", answer: "berpikir (I)" },
    { word: "言う", hiragana: "いいまま", romaji: "iimasu", answer: "mengatakan (I)" },
    { word: "足る", hiragana: "たります", romaji: "tarimasu", answer: "cukup, menjadi cukup (II)" },
    { word: "勝つ", hiragana: "かちます", romaji: "kachimasu", answer: "menang (I)" },
    { word: "負ける", hiragana: "まけます", romaji: "makemasu", answer: "kalah (II)" },
    { word: "ある", hiragana: "あります【おまつり～】", romaji: "arimasu", answer: "ada / diadakan (festival) (I)" },
    { word: "役に立ちます", hiragana: "やくにたちます", romaji: "yaku ni tachimasu", answer: "berguna (I)" },
    { word: "無駄【な】", hiragana: "むだ【な】", romaji: "muda", answer: "boros, sia-sia" },
    { word: "不便【な】", hiragana: "ふべん【な】", romaji: "fuben", answer: "tidak praktis" },
    { word: "同じ", hiragana: "おなじ", romaji: "onaji", answer: "sama" },
    { word: "凄い", hiragana: "すごい", romaji: "sugoi", answer: "hebat" },
    { word: "首相", hiragana: "しゅしょう", romaji: "shusho", answer: "perdana menteri" },
    { word: "大統領", hiragana: "だいとうりょう", romaji: "daitoryo", answer: "presiden" },
    { word: "政治", hiragana: "せいじ", romaji: "seiji", answer: "politik" },
    { word: "ニュース", hiragana: "ニュース", romaji: "nyusu", answer: "berita" },
    { word: "スピーチ", hiragana: "スピーチ", romaji: "supichi", answer: "pidato" },
    { word: "アルバイト", hiragana: "アルバイト", romaji: "arubaito", answer: "kerja sampingan, paruh waktu" },
    { word: "意見", hiragana: "いけん", romaji: "iken", answer: "pendapat" },
    { word: "お話", hiragana: "おはなし", romaji: "ohanashi", answer: "berbicara / cerita" },
    { word: "ユーモア", hiragana: "ユーモア", romaji: "yuma", answer: "humor" },
    { word: "無駄", hiragana: "むだ", romaji: "muda", answer: "sia-sia" },
    { word: "デザイン", hiragana: "デザイン", romaji: "dezain", answer: "desain" },
    { word: "交通", hiragana: "こうつう", romaji: "kotsu", answer: "lalu lintas" },
    { word: "ラッシュ", hiragana: "ラッシュ", romaji: "rasshu", answer: "jam sibuk" },
    { word: "最近", hiragana: "さいきん", romaji: "saikin", answer: "akhir-akhir ini" },
    { word: "多分", hiragana: "たぶん", romaji: "tabun", answer: "mungkin" },
    { word: "きっと", hiragana: "きっと", romaji: "kitto", answer: "pasti" },
    { word: "本当に", hiragana: "ほんとうに", romaji: "honto ni", answer: "sungguh-sungguh" },
    { word: "そんなに", hiragana: "そんなに", romaji: "sonna ni", answer: "tidak begitu banyak (negatif)" },
    { word: "～について", hiragana: "～について", romaji: "~ni tsuite", answer: "tentang, mengenai" },
    { word: "しかたがありません", hiragana: "しかたがありません", romaji: "shikata ga arimasen", answer: "tidak ada pilihan lain / apa boleh buat" },
    { word: "しばらくですね。", hiragana: "しばらくですね。", romaji: "shibaraku desu ne", answer: "tolong tunggu sebentar ya" },
    { word: "～でも飲みませんか。", hiragana: "～でものみませんか。", romaji: "~demo nomimasen ka", answer: "bagaimana kalau minum sesuatu?" },
    { word: "見ないと……", hiragana: "ないと……", romaji: "minai to...", answer: "kalau tidak lihat..." },
    { word: "勿論", hiragana: "もちろん", romaji: "mochiron", answer: "tentu saja" }
  ],
  22: [
    { word: "着ます", hiragana: "きます【シャツを～】", romaji: "kimasu", answer: "mengenakan (baju, kemeja) (II)" },
    { word: "はきます", hiragana: "はきます【くつを～】", romaji: "hakimasu", answer: "mengenakan (sepatu, celana) (I)" },
    { word: "かぶります", hiragana: "かぶります【ぼうしを～】", romaji: "kaburimasu", answer: "mengenakan topi (I)" },
    { word: "かけます", hiragana: "かけます【めがねを～】", romaji: "kakemasu", answer: "mengenakan kacamata (II)" },
    { word: "生まれます", hiragana: "うまれます", romaji: "umaremasu", answer: "dilahirkan (II)" },
    { word: "コート", hiragana: "コート", romaji: "koto", answer: "mantel" },
    { word: "スーツ", hiragana: "スーツ", romaji: "sutsu", answer: "jas" },
    { word: "セーター", hiragana: "セーター", romaji: "seta", answer: "sweter" },
    { word: "帽子", hiragana: "ぼうし", romaji: "boshi", answer: "topi" }
  ],
  23: [
    { word: "聞きます", hiragana: "ききます【せんせいに～】", romaji: "kikimasu", answer: "bertanya (kepada guru) (I)" },
    { word: "回します", hiragana: "まわします", romaji: "mawashimasu", answer: "memutar (I)" },
    { word: "引きます", hiragana: "ひきます", romaji: "hikimasu", answer: "menarik (I)" },
    { word: "変えます", hiragana: "かえます", romaji: "kaemasu", answer: "mengubah, mengganti (II)" },
    { word: "触ります", hiragana: "さわります【ドアに～】", romaji: "sawarimasu", answer: "menyentuh (pintu) (I)" },
    { word: "出ます", hiragana: "でます【おつりが～】", romaji: "demasu", answer: "keluar (uang kembalian) (II)" },
    { word: "動きます", hiragana: "うごきます【とけいが～】", romaji: "ugokimasu", answer: "bergerak (jam) (I)" },
    { word: "歩きます", hiragana: "あるきます【みちを～】", romaji: "arukimasu", answer: "berjalan (di jalan) (I)" },
    { word: "気をつけます", hiragana: "きをつけます【くるまに～】", romaji: "ki o tsukemasu", answer: "berhati-hati (terhadap mobil) (II)" },
    { word: "引っ越しします", hiragana: "ひっこしします", romaji: "hikkoshi shimasu", answer: "pindah rumah (III)" },
    { word: "電気屋", hiragana: "でんきや", romaji: "denkiya", answer: "toko elektronik" },
    { word: "～屋", hiragana: "～や", romaji: "~ya", answer: "toko ～" },
    { word: "サイズ", hiragana: "サイズ", romaji: "saizu", answer: "ukuran" },
    { word: "音", hiragana: "おと", romaji: "oto", answer: "suara" },
    { word: "機械", hiragana: "きかい", romaji: "kikai", answer: "mesin" },
    { word: "つまみ", hiragana: "つまみ", romaji: "tsumami", answer: "tombol/kenop" },
    { word: "故障", hiragana: "こしょう", romaji: "kosho", answer: "rusak/kerusakan" },
    { word: "道", hiragana: "みち", romaji: "michi", answer: "jalan" },
    { word: "交差点", hiragana: "こうさてん", romaji: "kosaten", answer: "persimpangan jalan" },
    { word: "信号", hiragana: "しんごう", romaji: "shingo", answer: "lampu lalu lintas" },
    { word: "角", hiragana: "かど", romaji: "kado", answer: "sudut" },
    { word: "橋", hiragana: "はし", romaji: "hashi", answer: "jembatan" },
    { word: "駐車場", hiragana: "ちゅうしゃじょう", romaji: "chushajo", answer: "tempat parkir" },
    { word: "一日", hiragana: "いちにち", romaji: "ichinichi", answer: "satu hari" },
    { word: "お正月", hiragana: "おしょうがつ", romaji: "oshogatsu", answer: "tahun baru" },
    { word: "ごちそうさまでした。", hiragana: "ごちそうさまでした。", romaji: "gochisosama deshita", answer: "terima kasih atas makanannya." },
    { word: "建物", hiragana: "たてもの", romaji: "tatemono", answer: "bangunan" },
    { word: "外国人登録証", hiragana: "がいこくじんとうろくしょう", romaji: "gaikokujin torokusho", answer: "kartu registrasi orang asing" }
  ],
  24: [
    { word: "くれます", hiragana: "くれます", romaji: "kuremasu", answer: "memberikan (kepada saya) (II)" },
    { word: "連れて行きます", hiragana: "つれていきます", romaji: "tsurete ikimasu", answer: "mengantar pergi (seseorang) (I)" },
    { word: "連れて来ます", hiragana: "つれてきます", romaji: "tsurete kimasu", answer: "membawa datang (seseorang) (III)" },
    { word: "送ります", hiragana: "おくります【ひとを～】", romaji: "okurimasu", answer: "mengantar / mengawal seseorang (I)" },
    { word: "紹介します", hiragana: "しょうかいします", romaji: "shokai shimasu", answer: "memperkenalkan (III)" },
    { word: "案内します", hiragana: "あんないします", romaji: "annai shimasu", answer: "menunjukkan jalan / mengantar (III)" },
    { word: "説明します", hiragana: "せつめいします", romaji: "setsumei shimasu", answer: "menjelaskan (III)" },
    { word: "いれます【コーヒーを～】", hiragana: "いれます【コーヒーを～】", romaji: "iremasu", answer: "membuat / menyeduh kopi (II)" },
    { word: "おじいさん/おじいちゃん", hiragana: "おじいさん / おじいちゃん", romaji: "ojiisan / ojiichan", answer: "kakek" },
    { word: "おばあさん/おばあちゃん", hiragana: "おばあさん / おばあちゃん", romaji: "obaasan / obaachan", answer: "nenek" },
    { word: "準備", hiragana: "じゅんび", romaji: "junbi", answer: "persiapan" },
    { word: "意味", hiragana: "いみ", romaji: "imi", answer: "arti / makna" },
    { word: "お菓子", hiragana: "おかし", romaji: "okashi", answer: "permen / makanan ringan" },
    { word: "全部", hiragana: "ぜんぶ", romaji: "zenbu", answer: "semua" },
    { word: "自分で", hiragana: "じぶんで", romaji: "jibun de", answer: "oleh diri sendiri" },
    { word: "ほかに", hiragana: "ほかに", romaji: "hoka ni", answer: "selain / kecuali / lagi pula" },
    { word: "ワゴン車", hiragana: "ワゴンしゃ", romaji: "wagonsha", answer: "mobil wagon / van" },
    { word: "お弁当", hiragana: "おべんとう", romaji: "obento", answer: "kotak makan siang" }
  ],
  25: [
    { word: "考えます", hiragana: "かんがえます", romaji: "kangaemasu", answer: "berpikir, mempertimbangkan (II)" },
    { word: "着きます", hiragana: "つきます【えきに～】", romaji: "tsukimasu", answer: "tiba (di stasiun) (I)" },
    { word: "留学します", hiragana: "りゅうがくします", romaji: "ryugaku shimasu", answer: "belajar di luar negeri (III)" },
    { word: "取りま゙す", hiragana: "とります【としを～】", romaji: "torimasu", answer: "mengambil; bertambah usia (I)" },
    { word: "田舎", hiragana: "いなか", romaji: "inaka", answer: "pedesaan, kampung halaman" },
    { word: "大使館", hiragana: "たいしかん", romaji: "taishikan", answer: "kedutaan besar" },
    { word: "グループ", hiragana: "グループ", romaji: "gurupu", answer: "kelompok" },
    { word: "チャンス", hiragana: "チャンス", romaji: "chansu", answer: "kesempatan" },
    { word: "億", hiragana: "おく", romaji: "oku", answer: "seratus juta" },
    { word: "もし【～たら】", hiragana: "もし【～たら】", romaji: "moshi", answer: "jika ～" },
    { word: "いくら【～でも】", hiragana: "いくら【～でも】", romaji: "ikura", answer: "sebanyak apa pun / bahkan jika ～" },
    { word: "転勤", hiragana: "てんきん", romaji: "tenkin", answer: "mutasi kerja / pindah tugas" },
    { word: "こと", hiragana: "こと", romaji: "koto", answer: "hal, perkara" },
    { word: "一杯飲みましょう。", hiragana: "いっぱいのみましょう。", romaji: "ippai nomimashou", answer: "mari kita minum bersama." },
    { word: "【いろいろ】お世話になりました。", hiragana: "【いろいろ】おせわになりました。", romaji: "(iroiro) osewa ni narimashita", answer: "terima kasih atas semua bantuan anda." },
    { word: "頑張ります", hiragana: "がんばります", romaji: "ganbarimasu", answer: "saya akan berusaha sebaik mungkin (I)" },
    { word: "どうぞお元気で。", hiragana: "どうぞおげんきで。", romaji: "dozo ogenki de", answer: "semoga sehat selalu." }
  ]

  
};

let currentMode = 'study'; 
let currentQuizType = 'jp-id';
let flashcardFrontSide = 'jp'; // 'jp' = Bahasa Jepang dulu, 'id' = Arti Bahasa Indonesia dulu
let currentData = [];
let currentIndex = 0;
let score = 0;
let selectedCustomWords = [];

// INISIALISASI SAAT HALAMAN SELESAI DIMUAT
document.addEventListener("DOMContentLoaded", function() {
  populateRangeSelects();
  renderMenu();
});

// Mengisi pilihan dropdown bab untuk Flashcard Range
function populateRangeSelects() {
  const startSelect = document.getElementById('fc-start-chapter');
  const endSelect = document.getElementById('fc-end-chapter');
  if (!startSelect || !endSelect) return;

  startSelect.innerHTML = '';
  endSelect.innerHTML = '';

  const activeChapters = Object.keys(chapterData).map(Number).sort((a, b) => a - b);
  activeChapters.forEach(ch => {
    const opt1 = document.createElement('option');
    opt1.value = ch;
    opt1.innerText = `Bab ${ch}`;
    startSelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = ch;
    opt2.innerText = `Bab ${ch}`;
    endSelect.appendChild(opt2);
  });

  if (activeChapters.length > 0) {
    startSelect.value = activeChapters[0];
    endSelect.value = activeChapters[activeChapters.length - 1];
  }
}

// Mengubah Sisi Depan Flashcard (Jepang / Indonesia)
function changeFlashcardFrontSide(val) {
  flashcardFrontSide = val;
}

// Ganti Mode (Belajar / Flashcard / Kuis)
function switchMode(mode) {
  currentMode = mode;
  document.getElementById('tab-study').classList.toggle('active', mode === 'study');
  document.getElementById('tab-flashcard').classList.toggle('active', mode === 'flashcard');
  document.getElementById('tab-quiz').classList.toggle('active', mode === 'quiz');

  const quizSubTabs = document.getElementById('quiz-type-tabs');
  const fcRangeBox = document.getElementById('flashcard-range-box');

  if (mode === 'quiz') {
    quizSubTabs.classList.remove('hidden');
    fcRangeBox.classList.add('hidden');
    document.getElementById('menu-title').innerText = 'Pilih Bab Kuis';
  } else if (mode === 'flashcard') {
    quizSubTabs.classList.add('hidden');
    fcRangeBox.classList.remove('hidden');
    document.getElementById('menu-title').innerText = 'Pilih Bab Flashcard';
  } else {
    quizSubTabs.classList.add('hidden');
    fcRangeBox.classList.add('hidden');
    document.getElementById('menu-title').innerText = 'Pilih Bab Belajar';
  }

  renderMenu();
}

function switchQuizType(type) {
  currentQuizType = type;
  document.getElementById('quiz-type-jp-id').classList.toggle('active', type === 'jp-id');
  document.getElementById('quiz-type-id-jp').classList.toggle('active', type === 'id-jp');
}

// Render Tombol Bab di Menu Utama
function renderMenu() {
  const container = document.getElementById('chapter-grid');
  if (!container) return;
  
  container.innerHTML = '';
  const totalChapters = 25;

  for (let i = 1; i <= totalChapters; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn-chapter';

    if (chapterData[i]) {
      btn.innerText = `Bab ${i}`;
      btn.onclick = () => {
        if (currentMode === 'study') openStudy(i);
        else if (currentMode === 'flashcard') startFlashcard(i);
        else startQuiz(i);
      };
    } else {
      btn.innerText = `Bab ${i}`;
      btn.classList.add('disabled');
      btn.disabled = true;
    }

    container.appendChild(btn);
  }
}

// Fitur Pilih Kata Khusus (Custom Word Selector)
function openWordSelector() {
  const startCh = parseInt(document.getElementById('fc-start-chapter').value);
  const endCh = parseInt(document.getElementById('fc-end-chapter').value);

  let minCh = Math.min(startCh, endCh);
  let maxCh = Math.max(startCh, endCh);

  let availableWords = [];
  for (let i = minCh; i <= maxCh; i++) {
    if (chapterData[i]) {
      availableWords = availableWords.concat(chapterData[i]);
    }
  }

  if (availableWords.length === 0) return;

  const selectorList = document.getElementById('word-selector-list');
  selectorList.innerHTML = '';
  selectedCustomWords = [...availableWords]; // Default terpilih semua

  availableWords.forEach((item, idx) => {
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.justifyContent = 'space-between';
    label.style.padding = '10px 14px';
    label.style.background = '#fff';
    label.style.border = '1px solid #e5e7eb';
    label.style.borderRadius = '8px';
    label.style.cursor = 'pointer';

    label.innerHTML = `
      <div style="display:flex; flex-direction:column;">
        <span style="font-weight:bold; color:#1f2937;">${item.hiragana} ${item.word !== item.hiragana ? '(' + item.word + ')' : ''}</span>
        <span style="font-size:0.85rem; color:#6b7280;">${item.answer}</span>
      </div>
      <input type="checkbox" class="word-checkbox" data-index="${idx}" checked style="width: 18px; height: 18px;">
    `;

    const checkbox = label.querySelector('.word-checkbox');
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedCustomWords.push(item);
      } else {
        selectedCustomWords = selectedCustomWords.filter(w => w.hiragana !== item.hiragana || w.answer !== item.answer);
      }
      updateStartCustomBtnCount();
    });

    selectorList.appendChild(label);
  });

  updateStartCustomBtnCount();
  switchScreen('select-words-screen');
}

function selectAllWords(status) {
  const checkboxes = document.querySelectorAll('.word-checkbox');
  checkboxes.forEach(cb => cb.checked = status);

  const startCh = parseInt(document.getElementById('fc-start-chapter').value);
  const endCh = parseInt(document.getElementById('fc-end-chapter').value);
  let minCh = Math.min(startCh, endCh);
  let maxCh = Math.max(startCh, endCh);

  let availableWords = [];
  for (let i = minCh; i <= maxCh; i++) {
    if (chapterData[i]) availableWords = availableWords.concat(chapterData[i]);
  }

  selectedCustomWords = status ? [...availableWords] : [];
  updateStartCustomBtnCount();
}

function updateStartCustomBtnCount() {
  const btn = document.getElementById('btn-start-custom');
  if (btn) btn.innerText = `Mulai (${selectedCustomWords.length})`;
}

function startCustomWordsFlashcard() {
  if (selectedCustomWords.length === 0) {
    alert('Pilih setidaknya 1 kata!');
    return;
  }

  currentData = shuffle(selectedCustomWords);
  currentIndex = 0;

  document.getElementById('fc-chapter-title').innerText = `Kata Pilihan (${currentData.length})`;
  switchScreen('flashcard-screen');
  renderFlashcard();
}

// Mode Belajar
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

// Mode Flashcard Satu Bab
function startFlashcard(chapter) {
  if (!chapterData[chapter]) return;

  currentData = [...chapterData[chapter]];
  currentIndex = 0;

  document.getElementById('fc-chapter-title').innerText = `Bab ${chapter}`;
  switchScreen('flashcard-screen');
  renderFlashcard();
}

// Mode Flashcard Rentang Bab (Range)
function startRangeFlashcard() {
  const startCh = parseInt(document.getElementById('fc-start-chapter').value);
  const endCh = parseInt(document.getElementById('fc-end-chapter').value);

  let minCh = Math.min(startCh, endCh);
  let maxCh = Math.max(startCh, endCh);

  let combinedData = [];
  for (let i = minCh; i <= maxCh; i++) {
    if (chapterData[i]) {
      combinedData = combinedData.concat(chapterData[i]);
    }
  }

  if (combinedData.length === 0) return;

  currentData = shuffle(combinedData);
  currentIndex = 0;

  document.getElementById('fc-chapter-title').innerText = `Bab ${minCh} - ${maxCh}`;
  switchScreen('flashcard-screen');
  renderFlashcard();
}

function renderFlashcard() {
  const cardEl = document.getElementById('flashcard');
  cardEl.classList.remove('flipped');

  setTimeout(() => {
    const item = currentData[currentIndex];
    document.getElementById('fc-progress-text').innerText = `${currentIndex + 1} / ${currentData.length}`;
    
    const frontMain = document.getElementById('fc-front-main');
    const frontSub = document.getElementById('fc-front-sub');
    const backMain = document.getElementById('fc-back-main');
    const backSub = document.getElementById('fc-back-sub');

    if (flashcardFrontSide === 'jp') {
      // Depan: Bahasa Jepang, Belakang: Indonesia
      frontMain.innerText = item.hiragana;
      frontSub.innerText = item.word !== item.hiragana ? `${item.word} (${item.romaji})` : `(${item.romaji})`;
      backMain.innerText = item.answer;
      backSub.innerText = "";
    } else {
      // Depan: Indonesia, Belakang: Bahasa Jepang
      frontMain.innerText = item.answer;
      frontSub.innerText = "";
      backMain.innerText = item.hiragana;
      backSub.innerText = item.word !== item.hiragana ? `${item.word} (${item.romaji})` : `(${item.romaji})`;
    }
  }, 150);
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (currentIndex < currentData.length - 1) {
    currentIndex++;
    renderFlashcard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderFlashcard();
  }
}

function shuffleFlashcards() {
  currentData = shuffle(currentData);
  currentIndex = 0;
  renderFlashcard();
}

// Mode Kuis & Utility
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

  currentData = shuffle(chapterData[chapter]);
  currentIndex = 0;
  score = 0;

  document.getElementById('chapter-title').innerText = `Bab ${chapter}`;
  switchScreen('quiz-screen');
  showQuestion();
}

function showQuestion() {
  const currentItem = currentData[currentIndex];
  document.getElementById('progress-text').innerText = `Soal ${currentIndex + 1} / ${currentData.length}`;
  
  const optionsContainer = document.getElementById('options-container');
  const inputContainer = document.getElementById('input-container');
  const inputField = document.getElementById('user-input');

  document.getElementById('feedback').innerText = '';
  document.getElementById('feedback').className = 'feedback-msg';
  document.getElementById('btn-next').classList.add('hidden');

  if (currentQuizType === 'jp-id') {
    optionsContainer.classList.remove('hidden');
    inputContainer.classList.add('hidden');

    document.getElementById('question-label').innerText = "Apa arti dari kata berikut?";
    document.getElementById('question-text').innerText = currentItem.hiragana;
    document.getElementById('sub-question').innerText = `(${currentItem.romaji})`;

    const otherItems = currentData.filter(item => item.answer !== currentItem.answer);
    const shuffledOthers = shuffle(otherItems).slice(0, 3);
    const choices = shuffle([currentItem, ...shuffledOthers]);

    optionsContainer.innerHTML = '';
    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.innerText = choice.answer;
      btn.onclick = () => selectOption(btn, choice.answer, currentItem.answer);
      optionsContainer.appendChild(btn);
    });

  } else {
    optionsContainer.classList.add('hidden');
    inputContainer.classList.remove('hidden');

    document.getElementById('question-label').innerText = "Bagaimana Bahasa Jepang untuk:";
    document.getElementById('question-text').innerText = currentItem.answer;
    document.getElementById('sub-question').innerText = "";

    inputField.value = '';
    inputField.disabled = false;
    inputField.focus();
  }
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

function checkTypedAnswer() {
  const inputField = document.getElementById('user-input');
  const userVal = inputField.value.trim().toLowerCase();
  const currentItem = currentData[currentIndex];

  if (!userVal) return;

  const validAnswers = [
    currentItem.word.toLowerCase(),
    currentItem.hiragana.toLowerCase(),
    currentItem.romaji.toLowerCase(),
    currentItem.romaji.replace(/~/g, "").trim().toLowerCase(),
    currentItem.hiragana.replace(/～/g, "").trim().toLowerCase()
  ];

  const feedbackEl = document.getElementById('feedback');
  inputField.disabled = true;

  if (validAnswers.includes(userVal.replace(/~/g, "").trim())) {
    score++;
    feedbackEl.innerText = "Benar! 🎉";
    feedbackEl.className = "feedback-msg correct";
  } else {
    feedbackEl.innerText = `Salah! Jawaban: ${currentItem.hiragana} / ${currentItem.romaji}`;
    feedbackEl.className = "feedback-msg wrong";
  }

  document.getElementById('btn-next').classList.remove('hidden');
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const btnNext = document.getElementById('btn-next');
    if (btnNext.classList.contains('hidden')) {
      checkTypedAnswer();
    } else {
      nextQuestion();
    }
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('final-score').innerText = `${score} / ${currentData.length}`;
  switchScreen('result-screen');
}

function showMenu() {
  switchScreen('menu-screen');
  renderMenu();
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}
