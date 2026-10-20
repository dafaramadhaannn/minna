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
    { word: "画面", hiragana: "そして", romaji: "soshite", answer: "dan / kemudian" },
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
  ]
};

let currentMode = 'study'; 
let currentQuizType = 'jp-id';
let currentData = [];
let currentIndex = 0;
let score = 0;

// INISIALISASI SAAT HALAMAN SELESAI DIMUAT
document.addEventListener("DOMContentLoaded", function() {
  renderMenu();
});

// Ganti Mode (Belajar / Flashcard / Kuis)
function switchMode(mode) {
  currentMode = mode;
  document.getElementById('tab-study').classList.toggle('active', mode === 'study');
  document.getElementById('tab-flashcard').classList.toggle('active', mode === 'flashcard');
  document.getElementById('tab-quiz').classList.toggle('active', mode === 'quiz');

  const subTabs = document.getElementById('quiz-type-tabs');
  if (mode === 'quiz') {
    subTabs.classList.remove('hidden');
    document.getElementById('menu-title').innerText = 'Pilih Bab Kuis';
  } else if (mode === 'flashcard') {
    subTabs.classList.add('hidden');
    document.getElementById('menu-title').innerText = 'Pilih Bab Flashcard';
  } else {
    subTabs.classList.add('hidden');
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

// Mode Flashcard
function startFlashcard(chapter) {
  if (!chapterData[chapter]) return;

  currentData = [...chapterData[chapter]];
  currentIndex = 0;

  document.getElementById('fc-chapter-title').innerText = `Bab ${chapter}`;
  switchScreen('flashcard-screen');
  renderFlashcard();
}

function renderFlashcard() {
  const cardEl = document.getElementById('flashcard');
  cardEl.classList.remove('flipped');

  setTimeout(() => {
    const item = currentData[currentIndex];
    document.getElementById('fc-progress-text').innerText = `${currentIndex + 1} / ${currentData.length}`;
    document.getElementById('fc-kanji').innerText = item.hiragana;
    document.getElementById('fc-sub').innerText = item.word !== item.hiragana ? `${item.word} (${item.romaji})` : `(${item.romaji})`;
    document.getElementById('fc-meaning').innerText = item.answer;
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

// Mode Kuis
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
