//日誌0:1/23
//日誌1:1/24 20:00-23:50
//日誌2:1/25 6:30-07:09 變數進不去
//日誌3:3/5  簡化屬性分析的運算+性別改成下拉是選單+簡化內在分析的運算(23:30-23:48)
//日誌4:3/7簡化計算式 差年月對應
//日誌5:3/8年月對應完成+數字化
//日誌6:ver5:3/11完成數據化幸運色判斷、天干與十神基本函式比較
//      ver6:排列方式修改
//日誌7:3/12 ver7:庫馬花、衝合害
//日誌8:
//3/19缺:
//1.顯現內容(內外顯現+格調)
//2.元素過多與缺陷、可能病因
//3.DailyLuck差功能test(運勢;幸運色推薦;穿搭)
//4.九宮飛星運算code出來
var otg = new Array;
var odz = new Array;

var year = document.getElementById("yid");
var month = document.getElementById("mid");
var day = document.getElementById("did");

var synmonth = 29.530588853; //synodic month (new Moon to new Moon)
//偏移量參數:
ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45);
ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074);
//
var ctg = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var cdz = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var cdzam=new Array("老鼠","牛","老虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬");
var cdzwithtgindex=new Array(9,597,024,1,419,246,35,531,684,7,473,80);
//-

// var ctengod= new Array("七殺","正官","偏印","正印","比肩","劫財","食神","傷官","偏財","正財");
jdez = new Array;
//十神:
//-
var ctengod1= new Array("比肩","食神","偏財","七殺","偏印");
//+
var ctengod2= new Array("劫財","傷官","正財","正官","正印");

//十神特性:
var tengodpersonality1=["1.具有強烈之自尊心與自信心<br>2.有自知之明，樂觀進取，重視成功的方法。<br>3.堅毅不屈，不懼不畏，獨立自主<br>4. 凡事先為自己，不考慮他人立場，也缺乏容忍之雅量，因此不容易與他人打成一片","1.氣質清高、溫文儒雅，性格開朗，寬容厚道，和平善良，不與人爭。<br>2. 喜歡悠遊自足，無拘無束之生活，也易沉迷於遊樂，忽視現實生活，失去奮發進取之精神。",
"1.慷慨豪邁、圓滑機智，精明幹練，豪爽俠義，風流多情。<br>2.做事乾淨俐落，交際手腕靈巧，善於把握機會去賺取錢財。<br>3.因為賺錢速度快，不太珍惜金錢或沉迷於酒色之中，以致揮霍家業而不知節制。<br>4.容易贏得女人歡心。","1.果斷力強、敢愛敢恨。<br>2.阿莎力，凶狠氣躁，專制霸道。<br>3.積極，公關能力強。<br>4.報復心強，有仇必報，但會選時機。","1.思考細膩，感覺敏銳，善於臨機應變，具優秀之領悟能力，對於企劃、創造、設計方面，具有獨特之見解。<br>2.愛插嘴，點子多，反應快，較不易贊同別人的想法的特性。<br>3.性格內向多疑，喜離群獨處，不喜參與社交活動，常有厭惡世俗之心，雖有鬥志卻耐心不足。"
                        
];
var tengodpersonality2=["1.往往具有獨特突出，獨樹一格之性格，有優異之外交能力與口才，特別是善於在社交場合製造氣氛，控制局勢，以博取他人之好感<br>2.心思敏捷迅速，善於見風轉舵，迎合時尚及他人之需。<br>3.內心經常自相矛盾，自我衝突，以致難以捉摸。<br>4.有時薄己利他，有時又忌妒他人之成就<br>5.野心過大，求功心切，往往不經思考，就貿然行動，以致一敗塗地。","1.多才多藝、活潑善辯、聰明足智、創意豐富<br>2.重視他人對自己之肯定，有不斷超越他人之慾望，學習能力強。<br>3.易成英雄人物，大都相貌清秀或博學多能。","1.為人節儉、重視信用，安分守己、量力而為，點滴致富。<br>2.家庭觀念濃厚，對妻兒盡責<br>3.重視物質追求，缺乏精神調節，以致精神空虛，所謂「家富心窮」。<br>4.貪圖安逸，享受現成，苟且偷安之心態。<br>5.常因過於計較金錢得失，被認為是守財奴，除了對女性不吝其財之外，對家族親友均斤斤計較，讓人認為薄情寡義。<br>6.做事過於守本分，謹慎過度，缺乏勇氣與魄力去追求變化與突破，故其生平事業較平淡無奇，缺乏轟轟烈烈之表現與成就。",
                        "光明正大的心態，但不積極，為人愛面子，是人人心中的好朋友的特性。","1.慈悲、心軟的特性。<br>2.重視學問與品德修養。<br>3.清高自負，自遠小人，自勵自愛，重人情，愛面子，但往往會自視清高而輕視金錢。<br>5.本性木訥而不善營謀，容易脫離現實，不切實際，<br>6.缺乏應變能力，不善於察言觀色、勾心鬥角，也不願同流合污。"
];

//十神資料
var dailyctengod1=["1.人脈日，懂得整合人脈，化敵為友，則會有不同的新氣象<br>2.會有久未見面的朋友出現，千萬別借錢給人，以免肉包子打狗，有去無回<br>3.別賭氣做任何決定，易流失大筆錢財<br>4.請注意父親的身體健康",
                   "1.有種慵懶的感覺，提不起勁，很想吃美食~<br>2.進入這種悠閒氣氛場合，學習嶄新的學問與知識會有不錯的效果喔<br>3.會有賺錢的機會上門(走設計或藝術類機會較高)<br>4.養生時間點",
                   "1.歡喜心、愛玩、用錢開始慷慨大方，講求情調氣氛<br>2.容易有大筆錢財進出的機會，可以試試手氣，但請定停損點不太過<br>3.有出遊、玩樂的機會，但玩太過容易燒錢<br>4.留意父親或男性長輩的身體狀況<br>5.如果可以的話，把時間放在低調衝事業也是不錯的選擇<br>6.男生易有桃花運，單身者不妨出門嘗試看看喔~","1.做事容易有魄力，執行力變強、承擔很多責任(同時壓力大)<br>2.容易有血光、災厄，開車、騎車請多留意<br>3.女性容易遇到異性，單身者可以嘗試看看~",
                   "1.小貴人運，容易遇到授人以漁的貴人<br>2.想法多、點子多，但容易想偏，做決定時盡可能與信任的人討論過再說<br>3.騎車、開車請專注別想事情容易出事。"]

var dailyctengod2=["1.人脈日，對於做生意、業務、組織，是很好的開創時機<br>2.容易茫茫然，活在當下，避免不必要的開銷，不然容易燒大量的掉錢財和資源而不自知。<br>3.男命請多加關心另一半的身體狀況<br>4.避免做有風險性的投資及合夥事業或者借錢給朋友，會肉包子打狗，請好理財規劃，最好的投資就是自己。",
    "1.主觀意識與表現欲變得強烈，腦袋變得很清楚，在設計或美感上容易做出有獨到的建解請多加利用<br>2.容易用放大鏡來看周遭的人事物，以至於情緒不穩想碎念、甚至想砍人的跡象出現，請做好情緒管理以防憾事發生<br>3.容易被人誤解，請低調行事<br>4.可以把心思放在學習事務上會有事半功倍的效果<br>5.容易有血光、災厄，開車、騎車請多留意",
"1.歡喜心、想四處遊玩，但對於金錢的使用比較保守<br>2.容易看到賺錢的機會，想要請積極爭取喔<br>3.多關心母親和女性長輩的身體健康","1.說話容易有說服力、易出風頭<br>2.展身手的好時機，考運跟工作都表現的不錯，容易讓主管或旁人看見，奠定升遷的基石<br>3.女性容易遇到好的異性緣，單身者請把握~~",
    "1.貴人運，請別吝嗇開金口，只要開口都會得到幫助的。<br>2.別宅在家耍費，腦筋容易遲鈍、反應變的不靈敏<br>3.母親或是女性長輩的健康容易亮紅燈，請多注意"
  ]

var tgdata = new Array(
  "陽木，人如大樹，庇蔭無數，<br>有惻隱之心、上進心與植物般的韌性，能在逆境中開闢出屬於自己的一條路，<br>進退有情有義，處事認真負責，<br>不喜變動、吃軟不吃硬、喜明爭不喜暗鬥，適合當組織領導者。",
  "陰木，人如藤蔓，盤根錯節，<br>富同情心、性情和藹，但內心佔有欲強，<br> 雖有才能, 但常因為興趣廣泛，覺得什麼都不錯，以至於無法定下來，<br>若能定下來朝固定領域發展能有大成就，<br>多俊男美女，適合幕後領導者。",
  "陽火，人如大火，熱力四射，<br>熱情開朗、積極、喜照顧人、不拘小節<br>但性情急、沒心機、比較健忘，情緒來的快去得也快，<br>很少人能抵擋他(她)熱情的一面，易成為焦點人物，適合公關、業務",
  "陰火，人如燈燭，燃燒自己照亮別人，<br>外靜內進、思想縝密，具有天生準確的第六感，<br>正因如此常憑感覺做事，喜歡靠近不喜歡就閃人，只相信眼見為憑，適合當老師。",
  "陽土，人如大石，信言篤實，<br>性情篤實沉穩、為人憨直、外柔內剛、逆來順受、重誠信，<br>行事墨守成規，雖在學習吸收力一途是所有屬性中最差的(尤其丑月)，但一旦吸收進去不會忘記，是可造之材。",
  "陰土，人如黏土，可塑性高，<br>主觀意識強、溝通能力強，為人重義氣、講信用、包容力強，<br>可塑性高、學習吸收力強，行事依循規矩，但常固執而不自覺，常有懷才不遇之感。",
  "陽金，人如大釜，大刀闊斧，<br>粗曠豪爽、性情剛烈而重義氣，個性好勝、人緣佳、 容易相處，<br>行事直來直往，有話直說，且直切要點，但往往得罪人而不自知，適合白手起家。",
  "陰金，人如寶玉，寶氣暗藏，<br>溫文儒雅、重感情、毅力，表現突出，有強烈的自尊心，<br>有恆心、行事循序漸進，為追求夢想不遺餘力，辛是辛苦的辛，一生需要辛勤勞絕，才會成功，而通常成就是一般人的兩倍以上，適合白手起家。",
  "陽水，人如江流，一洩千里，<br>寬宏大度之意, 能潛伏和包容，膽大心細、人緣好，<br>沒心機、作人圓滑不易得罪人，做事直接快速，但容易欠缺慎重思考而壞事，反應靈敏，見危險就閃，因此犯錯的機率較少，善於計，算賺錢快，虧錢也快，事業容易有成就。",
  "陰水，人如雨露，<br>聰明、交際廣、人緣佳，善於經營，其人平靜、柔和、內向、勤勉力行,<br> 然而每愛好猜臆，注重原則，不務實際，故內心常蓄不平，並且有重情調，有鑽牛角尖的傾向，不論大小事都要管，事業容易有成就。"
);

var dzdata =new Array("善於保護自己，個性讓人捉摸不定，有居安思危的觀念。<br>盤算打得精，因而因小失大，易聰明反被聰明誤。<br>做決定容易比人慢，如果要揪周遭子月的朋友吃飯、出遊，請二選一給他選擇。<br>容易有始無終，需學習堅持到底的精神，成功就在你眼前。",
  "本性善良，耐力好、喜歡安定、任勞任怨，勤勞且腳踏實地。<br>但脾氣很大、學習力差，容易因專注忽略的現實周遭。<br>對地理、命理特別敏感。喜追根究底，宜越挫越勇。",
  "為衝動派、好動、愛自由、坐不住。野心大、不服輸，只要旁人側面的問\"怎麼辦?\"，就會跳出去幫助他。樂觀積極又仁慈。自我期許高，既能幹又肯做事，掌控能力強，沉著內斂，不會推卸責任，屬完美主義者，爆發力強，但往往後繼無力，且生性驕傲，明顯固執，不太能接受人家批評。寅月的人適合做行銷。",
  "智慧高，完美主義者。有衝勁，狡猾善變。有人緣，有桃花，機警，閒不住，防衛性強。不容易顯老，文靜，喜愛乾淨，有潔癖，心地善良。只能接受成功，不能坦然面對失敗，容易有始無終。第六感很強，直覺性敏銳。屬兔的男性善於裝蒜，善應對，即使犯錯也不輕易認錯，最適「狡兔三窟」。辦公室戀曲稀鬆平常，常會吃窩邊草。喜歡羅曼蒂克，異性緣佳，容易獲得職場異性的幫助。兔女郎本性善良，為保護自己，偶而也會偽裝。",
  "喜當老大，非常自負，好高騖遠，喜奉承巴結，勢力，亦有桃花緣。思想變化快，點子多，聰明。多半好面子，喜歡被尊重，喜歡人家「說好聽的話」，眼光高，看高不看低（做事不實際）。個性千變萬化，常給人神龍見首不見尾的神秘感。屬龍女性比男性更善變，內心世界不容易被察覺。福報不錯，常化險為夷。多才多藝，學什麼像什麼，容易有成就，通常有「精神潔癖」的傾向。是事業上好夥伴及熱心助人的好友。",
  "喜歡聊天，好辯，不服輸，敏捷好辯又好訴訟。很會鑽研，分析力強，外表冷漠，內心如火，對喜歡的人說話較多。個性冰冷，城府很深，好辯，猜疑心重。冷靜沉著，有眼光，有遠見，數字概念清楚，善於理財，為生意上好角色。適合做業務推動。屬蛇女性有一種神秘力量。心思細密，看來聰明，主觀太強，很難約束。包容力大，若觸怒之反撲力量很強。善於自處，且能力相當強。",
  "好勝心強，禁不起刺激，受刺激必有回應，口服心不服。急躁，容易被設計。奔波，勞碌，憨直，性直，心腸軟。脾氣很拗，敢衝敢拼，對朋友熱情，喜拍馬屁。很樂觀，喜交際，有人緣。性情不定，好惡分明，喜怒哀樂形於色，易招惹是非。性格奔放，喜自由，急躁且欲速則不達，若能修正心性調整處世，越老越有成就。屬馬男性異性緣好，適合從事與女性有關行業，在同業中容易被排擠。屬馬女性多半帶有男性性格，膽子大，多操勞，閒不下來，老年時易變成嘮叨老人。",
  "為人親切，富人情味，一絲不苟，行事謹慎。孝順，但不知如何表達，個性膽小，注重外表，喜鑽牛角尖，打破砂鍋問到底，愛生氣。內心喜歡當領導人物，但須依附他人方能成功。對感情專注忠貞。男性屬羊，多半聰明，喜歡表現自己。",
  "好動有衝勁，重義氣，坐不住，沒一時閒著。善模仿，學習能力強，但只有三分鐘熱度，沒耐心。猴急，狡猾善變，喜走捷徑。觀察力敏銳，心思細膩，富機智，能力強，但欠缺穩重。喜歡招搖，帶點風騷，異性緣好，希望自己是群體中最受注目的焦點。屬猴女性頗有女人味。",
  "沒有衝勁，較悲觀。雞婆個性，急躁，雙重個性。熱心喜服務人群，積極主動，會較從自己利益著眼。很有審美觀，自信心、自尊心、虛榮心都很強，而且喜歡被讚美。第六感強。屬雞男性給人一種愛拈花惹草的感覺，異性緣特別好。屬雞女性多半帶點「雞婆」個性，喜歡替人出主意，喜歡湊熱鬧，人緣很好，也很重視感覺。",
  "想當老大，易突發奇想，率性而為，而有驚人之舉，不為環境而改變，從一而終，認定人與事。講忠心，信用佳，善良，固執，重感情，是好朋友及好部屬。好惡分明，十分謹慎，戒心很強，不隨便相信人。常出現五行高手，對研究玄學很投入。人間福報好，無形福報多，常遇貴人逢凶化吉。賺錢不難，不容易缺錢，但欠缺金錢觀，難有鉅額財富。想法樂觀積極，不太會隱藏自己個性及秘密，特別喜歡照顧別人。有時會有狗改不了吃屎的習慣。死心眼，易單戀，或被戀愛衝昏頭。",
  "很有智慧，非常注重原則，不易溝通，常把事情放心裡。外表剛毅，內心脆弱，性格矛盾，不易了解。善利用別人，借力使力，為生意高手。很明理，但常追根究底，有時會很「番」，不講道理。口才好，好辯。眼光獨特，極有開創力。很注重口腹之慾，重享受卻不挑食。會扮豬吃老虎。"
);

//年柱十神資料
var yearindextengoddata1=["1.小時候好玩，不喜歡讀書，好交朋友，有錢與人平分共用<br>2.家庭經濟陷入危機，為錢煩惱，父母缺錢或自己身上花錢看病<br>3.從小就優柔寡斷，乖巧懂事，甚至身兼數職 ( 分擔起家計 )。","1.小時候很快樂，較會思考，頭腦好，讀書學習靜的下來。<br>2.聰明，學習力強，小時候很會讀書。<br>3.一出生就有得吃，家境不錯，小時候體衰力弱，是父母親最操心的小孩。<br>4.父母是靠雙手抵足奮鬥的人，不靠祖業的人。<br>5.從小就聰明伶俐，善解人意，工作上不論文或武都可勝任。","1.小時候就會作生意，想賺錢，較不喜歡讀書，早期有賺錢，但守不住【曾經擁有過】有祖產<br>2. 會將父親當成你一生做事做人的標桿。","1.女孩子早熟。<br>2.小時候身體不好或較難教育或養育，不聽話。<br>3.家教甚嚴，管教方式為打罵；身上臉上易帶疤痕【身強不會】。",
"1.父親外遇機率大，母親受傷害機率高，易給神明當養子。<br>2.表小時候大多較難養，吃人水米長大【給人當兒子】<br>3.出生時大多父親不在身邊，祖母溺愛父親，以致母親反受其害。"];
var yearindextengoddata2=["1.小時候家裡會發生事故，會分攤家庭經濟。<br>2.容易欣賞成熟的異性 (早熟)，容易跟人吵架，好玩，好交朋友。<br>3.父母是他一生最大的掛記，出生時正逢家中最困窘的時候。<br>4.從小就體恤又很懂事。","1.與長上不易溝通，16 歲如遇傷官，須特別注意災難。<br>2.父母感情有問題，有較悲傷的童年。<br>3.身強:幼時體弱多病 <br>4.身弱:家道逐漸走下坡<br>5.小時候愛出鋒頭，自卑感較重。","1.小時愛玩，不喜歡讀書，家境好，有祖產，家裡是媽媽掌管經濟。<br>2.身強：小時候伸手就有錢，家境不錯。<br>3.身弱：小時候家裡缺錢，缺錢時長上可提供資源，或不斷供應財源，甚至結婚後亦同。","1. 小時候家教很好，常是班上的幹部。<br>2.小時候愛哭，但很認真讀書，家境不錯。蔭父母【賺錢、發財】<br>3.女孩子的男朋友早出現 (易有戀父情結)。",
"1.女命正印剋食傷。印太多不容易有子息。<br>2.祖產、地產有，但不一定值錢，大多家族由女大人主管著，為人孝順父母。"];

//月柱十神資料
var mounthindextengoddata1=[
  "1.兄弟姊妹排第一，重視自己朋友，先生或太太排最後，因此常遭先生、太太埋怨<br>2.親兄弟姊妹不會幫忙，須靠自己打拼<br>3.有錢兄弟朋友多，沒錢時無人過問<br>4.常為了錢財與人反目，但有錢會借人家。","1.會研發及發明東西，交的朋友都不錯<br>2.很有才華，能運用頭腦賺錢，較有食祿，適合文學及翻譯人員。<br>3.想靠自己的雙手獨立賺錢。","出社會很愛賺錢，做人易親近，<br>也易從事大票的金錢遊戲，<br>賺錢容易，因而不重視金錢。","1.身體不好2.身弱:出社會名聲地位往上爬 3.身強:出門有多少就花多少，花錢阿莎力。","1.愛唱反調，出社會貴人多【身弱時】，【身強】則會犯小人。<br>2.身強表假貴人，出社會朋友常會講好聽的話，為了好聽話，常會破財虧錢<br>3.常被身邊最親近的人所害。"];

var mounthindextengoddata2=[
"1.兄弟姊妹排第一，重視自己的朋友、先生或太太反而排最後，因此常遭先生、太太埋怨。<br>2.易被朋友分割感情 (如男、女朋友)，早年生活非常辛苦。<br>3.會為朋友、平輩、兄弟姐妹而失財，付出多，會替人擔憂，別人不一定會幫忙<br>3.有錢或有能力兄弟多，反之無人過問<br>4.錢容易有借無還。","1.與兄弟姊妹較不親近，思想奇異，反應靈敏、點子多，男性易走極端。<br>2.凡事喜歡靠自己；<br>3.女命：常因太過強勢，導致夫妻相處感情較易發生問題。","1.出社會愛賺錢，賺錢容易，也很容易滿足，不喜歡唸書，會半工半讀。<br>2.很早賺錢，但容易與現今社會快速躍動有接續不上之嘆。<br>3.男性要結婚可早婚","1.別人心目中的好朋友。<br>2.出社會名聲地位往上揚。<br>3.身強：讀書運好，考運好，會交到好朋友，講話會被肯定。讀書時常拿獎狀，名聲地位好。<br>4.身弱：出社會為了有好名聲，找工作只想找好看的工作，女人常為男人而身累俱疲。","表在社會中較常會接觸到宗教的人，喜歡到宗教場所，貴人多。"];

//日柱配偶藏干:
var dayindexdzwithtengod1=["1.配偶重視朋友、兄弟、姊妹遠超過於你。<br>2.配偶性格剛毅敏捷，思想與己相似。<br>3.追求比己年長、成熟之異性為伴侶，較依賴配偶。",
"1.配偶有才華，較喜樂，易發福。<br>2.配偶性格敦厚寬宏，夫妻間追逐互不拘束。<br>3.自身行事緩慢，企劃力強，但實踐力弱。<br>4.女命如逢流年偏印，易剋損子息或生產時較不順。<br>5.口才佳，感情重實質生活。<br>6.配偶較風流，注重性生活之協調。","1.配偶具偏財之優缺點。<br>2.配偶精明能幹銳利，行事爽快，不拘小節。<br>3.男命有寵妾傷妻之傾向，女命之能力較夫賢能，不論男女命宜晚婚可免家庭風波。","1.配偶多半個性急躁、剛烈、倔強，但精明能幹，豪放，善外交。<br>2.易體弱多病，且責任壓力皆重。","1.有晚婚之傾向。<br>2.身強者配偶多半難言佳美。感情婚姻多波折，因對配偶之要求及期望過高，如結婚將會任何權力皆由配偶掌管，對配偶較依賴。<br>3.女命婚後易有婆媳問題，且家中事物由婆婆掌理，以職業婦女為佳。"
                           
];

var dayindexdzwithtengod2=["1.配偶易破財。2.夫妻常有感情困擾之事。","1.男命：夫妻間該多溝通。女命：丈夫龜毛，比丈夫兇。<br>2.配偶間易互相猜忌，男命事業心重，不易納妻言，女命有凌駕丈夫之心態，易有婚變之兆，夫妻行事較難達成共識。","1.男命妻賢美多助，易獲妻財。<br>2.女命丈夫具正財優缺點特性。","1.藏干正官，反應力極佳，太太端莊高貴，中年大發。<br>2.配偶易為公教人員或主管級，性格率直，不擅掩飾，生活方式較單調。<br>3.夫妻彼此較重視精神感受及生活之協調。","1.配偶品格氣質佳，且為人厚道，斯文有理。<br>2.配偶工作易屬文職，婚姻生活上盼望得到配偶之呵護照顧，配偶性格穩重踏實，年紀較己為大。"
                           
];


//主程式
function myFunction() {
  var yy = Number(year.value);
  var mm = Number(month.value);
  var dd = Number(day.value);

  //      alert(typeof(yy));
  if (!ValidDate()) {
    //         document.getElementById("demo").innerHTML ="時間點不正確，請重新輸入" ;
    alert("時間點不正確，請重新輸入");
  } else {
    var a = Jdays(yy, mm, dd);

    GetGZ(a, yy, ptsa, ptsb, ptsc, otg, odz);
    
    //外在性格分析
    document.getElementById("demo").innerHTML = ctg[otg[2]];
     for (var i=0;i<ctg.length;i++){
        if (otg[2]==i) {
           document.getElementById("tgdemo").innerHTML =tgdata[i];
       }
     }
    
    //內在習性分析 已在3/5簡化 23:30-23:48
    //屬性陰陽
    var op=otg[2]%2;
    //十神陣列:
    var tengodarray=new Array();
    tenGodDataArraySort(op,ctengod1,ctengod2,tengodarray);
    var dzwithtengod=tgCompare(otg[2],dzWithTg(odz[1])[0]);
    var dztitle="<h1>帶"+tengodarray[dzwithtengod];
    dztitle+="的"+cdzam[odz[1]]+"</h1>";
    var tengodpersonality=new Array();
    tenGodDataArraySort(op,tengodpersonality1,tengodpersonality2,tengodpersonality);
    var dzcontent="<h2>習性:</h2><br>";
    dzcontent+=" ";
    for(var i=0;i<cdz.length;i++){
      if(odz[1]==i){
        dzcontent+=dzdata[i];
      }
    }
    dzcontent+="<br><h2>潛藏人格特質:</h2><br>"+tengodpersonality[dzwithtengod];
    
    document.getElementById("demo2").innerHTML =dztitle;
    document.getElementById("dzdemo").innerHTML =dzcontent;
    
    
    //各時間控制~
    var dataarray;
    //年柱
    var yeardataarray=new Array();
        tenGodDataArraySort(op,yearindextengoddata1,yearindextengoddata2,yeardataarray);
    //月柱
    var monthdataarray=new Array();
        tenGodDataArraySort(op,mounthindextengoddata1,mounthindextengoddata2,monthdataarray);
    //日柱
    var daydataarray=new Array();
        tenGodDataArraySort(op,dayindexdzwithtengod1,dayindexdzwithtengod2,daydataarray);

    
    document.getElementById("word1").innerHTML =yeardataarray[tgCompare(otg[2],otg[0])];
    document.getElementById("word2").innerHTML =monthdataarray[tgCompare(otg[2],otg[1])];
    document.getElementById("word3").innerHTML =daydataarray[tgCompare(otg[2],dzWithTg(odz[2])[0])];

    //喜用神
    var typedata=["生不逢時，對於自身掌控力較弱，比較需要旁人的協助<br>喜用神:正印、偏印、比肩、劫財",
                  "生逢時助，對於自身掌控力較強，作風比較強勢<br>喜用神:正財、偏財、正官、七殺、食神、傷官"];
    var d=weakOrStrong(otg[2],odz[1]);
    var uu=(otg[2]<4||otg[2]>7)? (d==1)?"50%":"50%" : (d==1)?"25%":"75%";
    var ddr=(d==1)?"20%":"80%";
    document.getElementById("wos").innerHTML ="約與"+ddr+"的人一樣，"+typedata[d]+"，<br>在同屬性所佔比例:"+ uu;
    
    //幸運色判斷  
    //性別:
    var sex = document.getElementById("sexid").value;
    var sexbase = ["", ""];
    if (sex == 0) {
      sexbase[0] = "與愛情運";
    } else if (sex == 1) {
      sexbase[1] = "與愛情運";
    }
    var colorbase = ["綠色系", "粉紅、紅色系", "黃色、咖啡色色系", "銀白色系", "藍黑色系"];
    if (Math.floor(otg[2]/2) == 0) {
      document.getElementById("color").innerHTML =
        "求身體健康" + ":" + colorbase[0] + "<br>" +
        "求才華" + ":" + colorbase[1] + "<br>" +
        "求財運" + sexbase[0] + ":" + colorbase[2] + "<br>" +
        "求考運" + sexbase[1] + ":" + colorbase[3] + "<br>" +
        "求貴人" + ":" + colorbase[4] + "<br>";
    } else if (Math.floor(otg[2]/2) == 1) {
      document.getElementById("color").innerHTML =
        "求身體健康" + ":" + colorbase[1] + "<br>" +
        "求才華" + ":" + colorbase[2] + "<br>" +
        "求財運" + sexbase[0] + ":" + colorbase[3] + "<br>" +
        "求考運" + sexbase[1] + ":" + colorbase[4] + "<br>" +
        "求貴人" + ":" + colorbase[0] + "<br>";
    } else if (Math.floor(otg[2]/2) == 2) {
      document.getElementById("color").innerHTML =
        "求身體健康" + ":" + colorbase[2] + "<br>" +
        "求才華" + ":" + colorbase[3] + "<br>" +
        "求財運" + sexbase[0] + ":" + colorbase[4] + "<br>" +
        "求考運" + sexbase[1] + ":" + colorbase[0] + "<br>" +
        "求貴人" + ":" + colorbase[1] + "<br>";
    } else if (Math.floor(otg[2]/2) == 3) {
      document.getElementById("color").innerHTML =
        "求身體健康" + ":" + colorbase[3] + "<br>" +
        "求才華" + ":" + colorbase[4] + "<br>" +
        "求財運" + sexbase[0] + ":" + colorbase[0] + "<br>" +
        "求考運" + sexbase[1] + ":" + colorbase[1] + "<br>" +
        "求貴人" + ":" + colorbase[2] + "<br>";
    } else if (Math.floor(otg[2]/2) == 4) {
      document.getElementById("color").innerHTML =
        "求身體健康" + ":" + colorbase[4] + "<br>" +
        "求才華" + ":" + colorbase[0] + "<br>" +
        "求財運" + sexbase[0] + ":" + colorbase[1] + "<br>" +
        "求考運" + sexbase[1] + ":" + colorbase[2] + "<br>" +
        "求貴人" + colorbase[3] + "<br>";
    }
    
    //今日運勢  
    var Today = new Date();
    var tdyy = Number(Today.getFullYear());
    var tdmm = Number(Today.getMonth()) + 1;
    var tddd = Number(Today.getDate());
    var tdmimi = Number(Today.getMinutes());
    var tda = Jdays(tdyy, tdmm, tddd);
    var tdtg = new Array;
    var tddz = new Array;
    GetGZ(tda, tdyy, ptsa, ptsb, ptsc, tdtg, tddz);
    //
    var dailyarray=new Array();
    tenGodDataArraySort(op,dailyctengod1,dailyctengod2,dailyarray);
    var dailytengodindex=tgCompare(otg[2],tdtg[2]);
    document.getElementById("tengoddemo").innerHTML =""+tengodarray[dailytengodindex];
    document.getElementById("fudemo").innerHTML =dailyarray[dailytengodindex];
    var thewos=weakOrStrong(otg[2],odz[1]);
    
    var dailynotice="";
    var dailycolor="";
    var tgtypeindex=Math.floor(otg[2]/2);
    var disguessindex=Math.floor(dailytengodindex/2);
    var dailycolorindex=0;
    if(op==0){
      switch(dailytengodindex){
        case 0:
        case 1:
            dailycolorindex=(tgtypeindex+3<5)?tgtypeindex+2:tgtypeindex+3-5;
            break;
        case 2:
        case 3:
        case 6:
            dailycolorindex=(wos==0)? (tgtypeindex+4<5)?tgtypeindex+4:tgtypeindex+4-5  : (tgtypeindex+2<5)?tgtypeindex+2:tgtypeindex+2-5;
            break;
        case 8:
            dailycolorindex=(tgtypeindex+2<5)?tgtypeindex+2:tgtypeindex+2-5;
            break;
        case 4:
        case 5:
            dailycolorindex=(tgtypeindex+3<5)?tgtypeindex+3:tgtypeindex+3-5;
            break;
        case 7:
            dailycolorindex=(tgtypeindex+4<5)?tgtypeindex+4:tgtypeindex+4-5;
            break;
        case 9:
            dailycolorindex=(tgtypeindex+2<5)?tgtypeindex+2:tgtypeindex+2-5;
            break;
    }}
    
    // alert("end");
    
    // document.getElementById("notice").innerHTML =;
    document.getElementById("clothcolor").innerHTML =colorbase[dailycolorindex];
  } 
}

//十神或解釋的陣列排列函式:
//op=日主陰陽，即屬性%2，陽為0，陰為1
//tengodarray1為陰十神陣列
//tengodarray2為陽十神陣列
//thetgsort:結果陣列，0~9為內容排列 10為陰陽判斷
function tenGodDataArraySort(op,tengodarray1,tengodarray2,thetgsort){
   if(op==0){
         for(var i=0;i<10;i++){
             if(i%2==0){
               thetgsort[i]=tengodarray1[i/2];
             }else if(i%2==1){
               thetgsort[i]=tengodarray2[(i-1)/2]; 
             }
         }
   }else if(op==1){
         for(var i=0;i<10;i++){
             if(i%2==0){
               thetgsort.push(tengodarray2[i/2]);
             }else if(i%2==1){
               thetgsort.push(tengodarray1[(i-1)/2]); 
             }
          }
   }
   thetgsort[10]=op;
}
//天干比較求出十神陣列中的Index
function tgCompare(cc,dd) {
        var tengodidex=(dd-cc>=0)?dd-cc:dd-cc+10;
        return tengodidex;
}

//個人十神index陣列
function selfTg(tgarray){
    var tgtemparray=new Array();
    // tgSort(tgarray[2]%2,tgtemparray)
    //yearindex
    tgtemparray[0]=tgCompare(tgarray[2],tgarray[0]);
    //monthindex
    tgtemparray[1]=tgCompare(tgarray[2],tgarray[1]);
    //hourindex
    tgtemparray[2]=tgCompare(tgarray[2],tgarray[3]);
    return tgtemparray;
}
//庫馬花判定 花為0 庫為1 馬為2
function bankHorseFlowerCompare(thedz){
   return thedz%3;
}

//求庫馬花陣列
function selfbankHorseFlowerAnalysis(theselfdz){
   //庫馬花判定
   var result=new Array();
   for(var i=0;i<4;i++){
     result[i]=bankHorseFlowerCompare(theselfdz);
   } 
   
   for(var i=0;i<3;i++)result[i+4]=0;
   for(var i=0;i<4;i++){
     //花
     if(result[i]==0) result[6]++;
     //庫
     else if (result[i]==1) result[4]++;
     //馬
     else result[5]++;
   }
   return result;
}

//庫解析
function bank(num){
  var bankdata=new Array("","節儉、省自己","善理財、開銷適當、精打細算","散財童子，不敢討債、慷慨、四處借人錢，喜投資","不聚財，賺盡天下財，不是富翁就是乞丐");
  return bankdata[num];
}
//馬解析
function hourse(num){
  var hoursedata=new Array("沒有衝勁，路途即使隔一條街也覺得是天涯海角。","閒不住，喜歡到處跑","有目標肯跑，但有車關，屬於業務人才。","沒方向就混亂，膽大藝高，但一生帶車關","在家閒不住，容易白跑以至一生無成就");
  return hoursedata[num];
}
//花解析
function flower(num){
  var flowerdata=new Array("平時臉很臭，沒什麼笑容","有人緣","交際廣，屬於公關人緣","交際廣，容易和異性聊得來與遇到異性緣","不是人緣好到爆，就是孤單老人");
  return flowerdata[num];
}
//身強身弱
function weakOrStrong(tg,dz){
   var result=0;
   var season=[[11,0,1],[2,3,4],[5,6,7],[8,9,10]];
   if(Math.floor(tg/2)==0 && 4-dz>=0 || Math.floor(tg/2)==0 && dz==11){
      result=1;
   }else if(Math.floor(tg/2)==1 && dz>=2 &&7>=dz){
      result=1;
   }else if(Math.floor(tg/2)==2 && dz>=5 &&7>=dz){
      result=1;
   }else if(Math.floor(tg/2)==3 && dz>=8 && 10>=dz){
      result=1;
   }else if(Math.floor(tg/2)==4 && dz>=8 && 11>=dz || Math.floor(tg/2)==4 && 1>=dz){  
      result=1;
   }
   return result;
}

//天干五合 否為-1 是為該合化屬性的index
function tgFiveFit(cc,dd,op){
   var result=-1;
   var occ;
   var odd;
   if(cc<dd){
     occ=cc;
     odd=dd;
   }else if(dd<cc){
     occ=dd;
     odd=cc;
            }
   var dvalue=odd-occ;
   if(dvalue==5){
     result=occ+odd%10;
     op=1;
   }
   return result;
}
//天干相剋 回傳undefined則不為相剋關係
function tgRestraint(tg1,tg2){
  var result;
  var otg1=tg1;
  var otg2=tg2;
  var value=otg1*10+otg2;
  //判斷矩陣   
  var tgarray=new Array(0,2,4,1,3);
  for(var i=0;i<tgarray.length;i++){
    if(i!=tgarray.length-1){
       if(value==tgarray[i]*10+tgarray[i+1]){
           result= new Array(tgarray[i],tgarray[i+1],0);
       }else if(value==tgarray[i+1]*10+tgarray[i]){
           result= new Array(tgarray[i+1],tgarray[i],1);     
       }
    }else{
       if(value==tgarray[i]*10+tgarray[0]){
           result= new Array(tgarray[i],tgarray[0],0);
       }else if(value==tgarray[0]*10+tgarray[i]){
           result= new Array(tgarray[0],tgarray[i],1);     
       }
    }
    return result;
  }
}
//藏干
function dzWithTg(dz){
   var result;
   var value=cdzwithtgindex[dz];
   var h=Math.floor(value/100);
   var t=Math.floor(value/10)-h*10;
   var o=value-h*100-t*10;
   switch(dz){
          case 1:
          case 2:
          case 4:
          case 5:
               result=new Array(h,t,o,0.5,0.3,0.2);
               break;
          case 6:
          case 11:
               result=new Array(t,o,0.7,0.3);
               break;
          default:
               result=new Array(o,1);
   }
       return result;
}
//通根檢測
function sameTgAtSomeLocationTgWtithDzTest(tg,dz){
  var result;
  
  if(Array.isArray(dzWithTg(dz))){
     if(dzWithTg(dz)[0]==tg){
        result=1;
     }else{
        result=0;
     }
  }else{
      if(dzWithTg(dz)==tg){
        result=1;
     }else{
        result=0;
     }
  }
  return result;
}

//衝
function dzImpulse(cc,dd){
    var dzfitdata=new Array("子午衝","丑未衝","寅申衝","卯酉衝","辰戌衝","巳亥衝");
    var occ=cc;
    var odd=dd;
    var temp;
    //確保occ<odd;
    if(occ<odd){}
    else{temp=occ;occ=odd;odd=temp};
    //
    if(odd-occ==6){
       return dzfitdata[occ];
    }else{return "nothing";}
}
//合: 
function dzFit(cc,dd){
    var dzfitdata=new Array("子丑合","寅亥合","卯戌合","辰酉合","巳申合","午未合");
    var occ=cc;
    var odd=dd;
    var temp;
    //確保occ<odd;
    if(occ<odd){}
    else{temp=occ;occ=odd;odd=temp};
    
    if(occ>1){
      if(occ+odd-4==9){
         return dzfitdata[occ-2+1];
      }
    }else{
      if(occ+odd==1){
         return dzfitdata[occ];
      }
    }
    return "nothing";
}
//害
function dzDisjoint(cc,dd){
    var dzdisjointdata=new Array("子未害","丑午害","寅巳害","卯辰害","申亥害","酉戌害");
    var occ=cc;
    var odd=dd;
    var temp;
    //確保occ<odd;
    if(occ<odd){}
    else{temp=occ;occ=odd;odd=temp};
    if(occ<8){
       if(occ+odd==7){
         return dzdisjointdata[occ];
       }
    }else{
       if(occ+odd==19){
         return dzdisjointdata[occ-4];
       }
    }
    return "nothing";
}
//刑 
function dzDamage(cc,dd){
     var Damagetype=-1;
     var array1=new Array(0,3);
     var array2=new Array(2,4,8);
     var array3=new Array(1,7,10);
     var array4=new Array(4,6,9,11);
     if(array1.indexOf(cc)!=-1 && array1.indexOf(dd)!=-1 && cc!=dd){
         Damagetype=0;
     }else if(array2.indexOf(cc)!=-1 && array2.indexOf(dd)!=-1 && cc!=dd){
         Damagetype=1;
     }else if(array3.indexOf(cc)!=-1 && array3.indexOf(dd)!=-1 && cc!=dd){
         Damagetype=2;    
     }else if(array4.indexOf(cc)==array4.indexOf(dd)&&array4.indexOf(cc)!=-1){
         Damagetype=3;
     }else Damagetype="nothing";
     return Damagetype;
}
//
function arraySortFromSmallToBig(cc,dd,ee){
      var temp=new Array(cc,dd,ee);
      temp.sort(function(a, b){return a-b});
      return temp;
}
//三會
function dzIntersection(cc,dd,ee){
    var result=-1;
    var temp=arraySortFromSmallToBig(cc,dd,ee);
    var dvalue1=temp[1]-temp[0];
    var dvalue2=temp[2]-temp[1];
    if(dvalue1==dvalue2 && dvalue1==1){
      switch(temp[0]){
        case 2:
          result=1;
          break;
        case 5:
          result=2;
          break;
        case 8:
          result=3;
          break;
      }
    }else if(temp[0]=0 && dvalue1==1 && dvalue2==10){
       result=0;      
    }
  return result;
}
//三合
function dzThreeFit(cc,dd,ee,indexarray){
  var result=-1;
  var temp=arraySortFromSmallToBig(cc,dd,ee);
  indexarray=new Array(temp.indexOf(cc),temp.indexOf(dd),temp.indexOf(ee));
  var dvalue1=temp[1]-temp[0];
  var dvalue2=temp[2]-temp[1];
  if(dvalue1==dvalue2 && dvalue1==4){
     result=temp[0];
  }
  return result;
}
//十神比較 
//cc dd: 比較之天干index
//op=日主陰陽，即屬性%2，陽為0，陰為1
//tengodarray:十神array
function tenGodCompare(cc,dd,op){
  var occ;
  var odd;
  if(cc<dd){
    occ=cc;
    odd=dd;
  }else{
    occ=dd;
    odd=cc;
  }
  var result=-1;
  if(op==0){
  //比劫食傷才財殺 官 P 印 
  //0 1 2 3 4 5 6 7 8 9
     if(occ==2 && odd-occ==6){
       result=0;
     }else if(occ==3 && odd-occ==4){
       result=1;
     }else if(occ==1 && odd-occ==4){
       result=2;
     }else if(occ==0 && odd-occ==4){
       result=3;
     }
    
  }else if(op==1){
  //劫比傷 食財才官 殺印 P
  // 0 1 2 3 4 5 6 7 8 9
       if(occ==3 && odd-occ==6){
       result=0;
     }else if(occ==2 && odd-occ==4){
       result=1;
     }else if(occ==0 && odd-occ==4){
       result=2;
     }else if(occ==1 && odd-occ==4){
       result=3;
     }
  }
  return result;
}

//天合地合
function tgFitDzFit(tg1,dz1,tg2,dz2){
  var result=0;
  var tgop;
  var dzop;
  tgFiveFit(tg1,tg2,tgop);
  dzFit(dz1,dz2,dzop);
  if(tgop==1 && tgop==dzop)result=1;
  return result;
}
//反吟:天克地衝，表運勢反覆向下的轉捩點，主謀事不利，百事不順。
function tgFitDzImpulze(tgarray,dzarray){
   var result=-1;
   var abtg=tgRestraint(tgarray[0],tgarray[1]);
   var abdz=DzImpulze(dzarray[0],[1]);
   if(abtg!= "undefined" || abdz!= "nothing" ){
      result=1;
   }
      return result;
}
//伏吟:天同或地同，表同一個意象會在你的生命中重複出現，
//缺點:擔心憂慮，呻吟悲傷，痛心鬱悶，糾纏拖拉，深處伏隱，原地徘徊，滯留停止，牽絆不動等。
//優點:重現再現之意，另起爐灶之征。
function tgSameDzSame(tg1,dz1,tg2,dz2){
  var result=new Array();
  result[0]=(tg1==tg2)?1:0;
  result[1]=(dz1==dz2)?1:0;
  return result;
}

//ValidDate()已於1/24上午6:35確認可執行
function ValidDate() {
  var vd = true;
  if (month.checkValidity() == false) {
    vd = false;
  } else {
    var u1 = -(year.value % 4 == 0); //能被4整除-1其餘為0
    var u2 = ((year.value % 100 == 0) - (year % 400 == 0)) && (year > 1582); //1582以後且年份能被100整除，但不能被400除盡的年份不是閏年
    var u = u1 + u2;
    //計算當月天數 以7.5月為中央 與中央差+0.5%2餘數為1的才要加1 ，當月分為2才須減2或減1(閏年)
    var vmd = 30 + ((Math.abs(month.value - 7.5) + 0.5) % 2) - (month.value == 2) * (2 + u)
    if (day.checkValidity() == false || day.value > vmd) {
      if (u == 0 && month.value == 2 && day.value == 29) {
          alert("此年無閏月");       
      } else {
        alert("時間點不正確，請重新輸入");
      }
      vd = false;
    }
    if (year.value == 1582 && month.value == 10 && day.value >= 5 && day.value < 15) {
      alert("時間點不正確，請重新輸入");
      vd = false;
    }
  }
  //         if(vd==true)document.getElementById("demo").innerHTML = "甲";
  //         else document.getElementById("demo").innerHTML = "乙";
  return vd;

}

//計算當年春分點
function VE(yy) {
  var yx = yy;
  if (yx >= 1000 && yx <= 8001) {
    var m = (yx - 2000) / 1000;
    jdve = 2451623.80984 + 365242.37404 * m + 0.05169 * m * m - 0.00411 * m * m * m - 0.00057 * m * m * m * m;
  } else {
    if (yx >= 0 && yx < 1000) {
      m = yx / 1000;
      jdve = 1721139.29189 + 365242.1374 * m + 0.06134 * m * m + 0.00111 * m * m * m - 0.00071 * m * m * m * m;
    } else {
      alert("超出?算能力范?");
      return false;
    }
  }
  return jdve
}

function MeanJQJD(yy, jdve, ty, ini, num) {
  //for 偏心率計算:------------------------------------------------
  var ath = 2 * Math.PI / 24;
  var tx = (jdve - 2451545) / 365250;
  var e = 0.0167086342 - 0.0004203654 * tx - 0.0000126734 * tx * tx + 0.0000001444 * tx * tx * tx - 0.0000000002 * tx * tx * tx * tx + 0.0000000003 * tx * tx * tx * tx * tx;
  //每年退行角度計算:-----------------------------------------------
  var tt = yy / 1000;
  //       計算式
  var vp = 111.25586939 - 17.0119934518333 * tt - 0.044091890166673 * tt * tt - 4.37356166661345E-04 * tt * tt * tt + 8.16716666602386E-06 * tt * tt * tt * tt;
  //       轉成徑度量
  var rvp = vp * 2 * Math.PI / 360;
  //切割點:
  var peri = new Array(30);
  var i;
  for (i = 1; i <= (ini + num); i++) {
    var flag = 0;
    var th = ath * (i - 1) + rvp;
    if (th > Math.PI && th <= 3 * Math.PI) {
      th = 2 * Math.PI - th;
      flag = 1;
    }
    if (th > 3 * Math.PI) {
      th = 4 * Math.PI - th;
      flag = 2;
    }
    var f1 = 2 * Math.atan((Math.sqrt((1 - e) / (1 + e)) * Math.tan(th / 2)));
    var f2 = (e * Math.sqrt(1 - e * e) * Math.sin(th)) / (1 + e * Math.cos(th));
    var f = (f1 - f2) * ty / 2 / Math.PI;
    if (flag == 1) f = ty - f;
    if (flag == 2) f = 2 * ty - f;
    peri[i] = f;
  }
  for (i = ini; i <= (ini + num); i++) {
    jdez[i] = jdve + peri[i] - peri[1];
  }
  return true;
}

function Perturbation(jdez) {
  var t = (jdez - 2451545) / 36525;
  var s = 0;
  for (k = 0; k <= 23; k++) {
    s = s + ptsa[k] * Math.cos(ptsb[k] * 2 * Math.PI / 360 + ptsc[k] * 2 * Math.PI / 360 * t);
  }
  var w = 35999.373 * t - 2.47;
  var l = 1 + 0.0334 * Math.cos(w * 2 * Math.PI / 360) + 0.0007 * Math.cos(2 * w * 2 * Math.PI / 360);
  var ptb = 0.00001 * s / l;
  return ptb;
}

function DeltaT(yy, mm) {
  var u, t, dt, y;
  y = yy + (mm - 0.5) / 12;
  if (y <= -500) {
    u = (y - 1820) / 100;
    dt = (-20 + 32 * u * u);
  } else {
    if (y < 500) {
      u = y / 100;
      dt = (10583.6 - 1014.41 * u + 33.78311 * u * u - 5.952053 * u * u * u - 0.1798452 * u * u * u * u + 0.022174192 * u * u * u * u * u + 0.0090316521 * u * u * u * u * u * u);
    } else {
      if (y < 1600) {
        u = (y - 1000) / 100;
        dt = (1574.2 - 556.01 * u + 71.23472 * u * u + 0.319781 * u * u * u - 0.8503463 * u * u * u * u - 0.005050998 * u * u * u * u * u + 0.0083572073 * u * u * u * u * u * u);
      } else {
        if (y < 1700) {
          t = y - 1600;
          dt = (120 - 0.9808 * t - 0.01532 * t * t + t * t * t / 7129);
        } else {
          if (y < 1800) {
            t = y - 1700;
            dt = (8.83 + 0.1603 * t - 0.0059285 * t * t + 0.00013336 * t * t * t - t * t * t * t / 1174000);
          } else {
            if (y < 1860) {
              t = y - 1800;
              dt = (13.72 - 0.332447 * t + 0.0068612 * t * t + 0.0041116 * t * t * t - 0.00037436 * t * t * t * t + 0.0000121272 * t * t * t * t * t - 0.0000001699 * t * t * t * t * t * t + 0.000000000875 * t * t * t * t * t * t * t);
            } else {
              if (y < 1900) {
                t = y - 1860;
                dt = (7.62 + 0.5737 * t - 0.251754 * t * t + 0.01680668 * t * t * t - 0.0004473624 * t * t * t * t + t * t * t * t * t / 233174);
              } else {
                if (y < 1920) {
                  t = y - 1900;
                  dt = (-2.79 + 1.494119 * t - 0.0598939 * t * t + 0.0061966 * t * t * t - 0.000197 * t * t * t * t);
                } else {
                  if (y < 1941) {
                    t = y - 1920;
                    dt = (21.2 + 0.84493 * t - 0.0761 * t * t + 0.0020936 * t * t * t);
                  } else {
                    if (y < 1961) {
                      t = y - 1950;
                      dt = (29.07 + 0.407 * t - t * t / 233 + t * t * t / 2547);
                    } else {
                      if (y < 1986) {
                        t = y - 1975;
                        dt = (45.45 + 1.067 * t - t * t / 260 - t * t * t / 718);
                      } else {
                        if (y < 2005) {
                          t = y - 2000;
                          dt = (63.86 + 0.3345 * t - 0.060374 * t * t + 0.0017275 * t * t * t + 0.000651814 * t * t * t * t + 0.00002373599 * t * t * t * t * t);
                        } else {
                          if (y < 2050) {
                            t = y - 2000;
                            dt = (62.92 + 0.32217 * t + 0.005589 * t * t);
                          } else {
                            if (y < 2150) {
                              u = (y - 1820) / 100;
                              dt = (-20 + 32 * u * u - 0.5628 * (2150 - y));
                            } else {
                              u = (y - 1820) / 100;
                              dt = (-20 + 32 * u * u);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (y < 1955 || y >= 2005) dt = dt - (0.000012932 * (y - 1955) * (y - 1955));
  var DeltaT = dt / 60; //將秒轉換為分
  return DeltaT
}

function Jdays(yr, mh, dy) { //將年月日時，轉??儒略日 

  var yp = yr + Math.floor((mh - 3) / 10);
  if (((yr > 1582) || (yr == 1582 && mh > 10) || (yr == 1582 && mh == 10 && dy >= 15))) {
    var init = 1721119.5;
    var jdy = Math.floor(yp * 365.25) - Math.floor(yp / 100) + Math.floor(yp / 400);
  } else {
    if ((yr < 1582) || (yr == 1582 && mh < 10) || (yr == 1582 && mh == 10 && dy <= 4)) {
      var init = 1721117.5;
      var jdy = Math.floor(yp * 365.25);
    } else {
      return false;
    }
  }
  var mp = Math.floor(mh + 9) % 12;
  var jdm = mp * 30 + Math.floor((mp + 1) * 34 / 57);
  var jdd = dy - 1;
  var jdh = 0.5 / 24;

  var jd = jdy + jdm + jdd + jdh + init;
  return jd;
}

//////////////////////////////////////////////////////////
function Jtime(op, jd) { //?儒略日???年月日?分秒
  if (jd >= 2299160.5 || op) {
    var y4h = 146097;
    var init = 1721119.5;
  } else {
    var y4h = 146100;
    var init = 1721117.5;
  }
  var jdr = Math.floor(jd - init);
  var yh = y4h / 4;
  var cen = Math.floor((jdr + 0.75) / yh);
  var d = Math.floor(jdr + 0.75 - cen * yh);
  var ywl = 1461 / 4;
  var jy = Math.floor((d + 0.75) / ywl);
  d = Math.floor(d + 0.75 - ywl * jy + 1);
  var ml = 153 / 5;
  mp = Math.floor((d - 0.5) / ml);
  d = Math.floor((d - 0.5) - 30.6 * mp + 1);
  var y = (100 * cen) + jy;
  var m = (mp + 2) % 12 + 1;
  if (m < 3) y = y + 1;
  var sd = Math.floor((jd + 0.5 - Math.floor(jd + 0.5)) * 24 * 60 * 60 + 0.00005);
  var mt = Math.floor(sd / 60);
  var ss = sd % 60;
  var hh = Math.floor(mt / 60);
  var mmt = mt % 60;
  var yy = Math.floor(y);
  var mm = Math.floor(m);
  var dd = Math.floor(d);
  var yc = "     " + yy;
  yc = yc.substr(yc.length - 5, 5);
  var dytm = yc;
  dytm += "年";
  dytm += ((mm < 10) ? "0" : "") + mm + "月";
  dytm += ((dd < 10) ? "0" : "") + dd + "日";
  dytm += ((hh < 10) ? "0" : "") + hh + "?";
  dytm += ((mmt < 10) ? "0" : "") + mmt + "分";
  dytm += ((ss < 10) ? "0" : "") + ss + "秒";
  return dytm;
}
//副程式功能：對Perturbaton作調整後的自春分點開始的24節氣,可只取部份
function GetAdjustedJQ(yy, ini, num, jdjq) {
  var veb = VE(yy);
  var ty = VE(yy + 1) - veb; //求指定年的春分點及回歸年長
  if (MeanJQJD(yy, veb, ty, ini, num) == true) { //輸入指定年,JD,回歸年長,求該回歸年各節氣之長
    for (i = ini + 1; i <= (ini + num); i++) {
      ptb = Perturbation(jdez[i]); //取得受perturbation影響所需微調
      dt = DeltaT(yy, Math.floor(i / 2) + 3); //修正dynamical time to Universal time
      jdjq[i] = jdez[i] + ptb - dt / 60 / 24; //加上攝動調整值ptb，減去對應的Delta T值(分鐘轉換為日)
      jdjq[i] = jdjq[i] + 1 / 3; //因中國時間比格林威治時間先行8小時，即1/3日
    }
  }
}
//副程式功能：求出以立春點開始的不含中氣之12節氣
function GetPureJQsinceSpring(yy, ptsa, ptsb, ptsc, jdpjq) {
  var sjdjq = new Array;
  var yea = yy - 1;
  GetAdjustedJQ(yea, 21, 3, sjdjq); //求出含指定年立春開始之3個節氣JD值,以前一年的年值代入
  //轉移春分前之立春至驚蟄之節氣至jdpjq變數中，以重整index
  jdpjq[0] = sjdjq[22]; //此為立春
  jdpjq[1] = sjdjq[24]; //此為驚蟄
  yea = yy;
  GetAdjustedJQ(yea, 0, 26, sjdjq); //求出指定年節氣之JD值,從驚蟄開始，到雨水
  //轉移春分至小寒之節氣至jdpjq變數中，以重整index
  for (i = 1; i <= 13; i++) {
    jdpjq[i + 1] = sjdjq[2 * i];
  }
}
// 1/25 07:05 bug變數進不去
function GetGZ(spcjd, ya, ptsa, ptsb, ptsc, tg, dz) {
  var ty;
  var td;
  var dh;

  //比較求算節氣年ty,求出年干支
  var jr = new Array;
  GetPureJQsinceSpring(ya, ptsa, ptsb, ptsc, jr); //取得自立春開始的非中氣之24節氣
  if (spcjd < jr[0]) { //jr[0]為立春，約在2月5日前後，
    ty = ya - 1;
    //若小於jr[0],則屬於前一個節氣年
    GetPureJQsinceSpring(ty, ptsa, ptsb, ptsc, jr); //取得自立春開始的不含中氣之12節氣  
  } else {
    ty = ya;
  }

  tg[0]=(((ty%10)+6)<10)?((ty%10)+6):((ty%10)+6)%10;
  dz[0] =(((ty % 12)+8)<12)?((ty % 12)+8):((ty % 12)+8)%12;

  var j, tm, tmm;
  //比較求算節氣月,求出月干支
  for (j = 0; j <= 13; j++) {
    if (jr[j] >= spcjd) {
      tm = j - 1;
      break;
    } //已超過指定時刻，故應取前一個節氣
  }

  dz[1]=( ( (tm % 12) +2 )<12)?(tm%12)+2:((tm % 12+2)%12);
  
  //計算年干起始點
  var starttgidx;
  for(var i=0;i<10;i++){
         if(i==tg[0]){
            starttgidx=( 2*( i%5+1 )<10 )? 2*(i%5+1) : 2*(i%5+1)%10;
         }
  }
  var idx=starttgidx+(tm%12);
  tg[1]=(idx<10)?idx:idx%10;


  var jda, thes, dayjd, dgz;
  //計算日柱之干支
  //jda = Jdays(op, yea, tmon, tday, thehou) + 0.5;     //加0.5是將起始點從正午改為從0點開始。
  jda = spcjd + 0.5;
  thes = ((jda - Math.floor(jda)) * 86400) + 3600; //將jd的小數部份化為秒，並加上起始點前移的一小時(3600秒)，取其整數值
  dayjd = Math.floor(jda) + thes / 86400; //將秒數化為日數，加回到jd的整數部份
  dgz = (Math.floor(dayjd + 49) % 60 + 60) % 60;
  var dtg = dgz % 10;
  var ddz = dgz % 12;
  tg[2]= dtg;
  dz[2] =ddz;
  var hgz
    //計算時柱之干支
  // dh = dayjd * 12;
  // hgz = (Math.floor(dh + 48) % 60 + 60) % 60;
  // var htg = hgz % 10; //時干
  // var hdz = hgz % 12; //時支
  // tg[3]=htg;
  // dz[3] =hdz;
}
//互動關係
function testFunction(){
  var oyear = document.getElementById("oyid");
  var omonth = document.getElementById("omid");
  var oday = document.getElementById("odid");

  var oyy = Number(oyear.value);
  var omm = Number(omonth.value);
  var odd = Number(oday.value);

  var oa = Jdays(oyy, omm, odd);
  var ootg=new Array();
  var oodz=new Array();
  GetGZ(oa, oyy, ptsa, ptsb, ptsc, ootg, oodz);
  var oop=ootg[2]%2;  
  var thetgsort=new Array();
  tenGodDataArraySort(otg[2]%2,ctengod1,ctengod2,thetgsort);
  //tgFiveFit
  var j=tgCompare(otg[2],ootg[2]);
  var index=Math.floor(j/2);
  var relationship=["對等關係，如朋友般互動","比較照顧對方，為對方著想","對方容易帶來歡樂很搭","對方有點像上司","對方比較照顧你，為你著想"];
  //dzDamage()、dzDisjoint(牛頭不對馬嘴)、dzFit(好溝通)、dzImpulze(彼此有動力，會吵架)

  var result="";
  var heartcompare=[dzDisjoint(odz[1],oodz[1]),dzFit(odz[1],oodz[1]),dzImpulse(odz[1],oodz[1]),dzDamage(odz[1],oodz[1])];
  alert(dzDamage(odz[1],oodz[1]));
  for(var i=0;i<heartcompare.length;i++){
    if(heartcompare[i]!="nothing"){
      switch(i){
        case 0:result+="在想法上比較沒有交集，容易牛頭不對馬嘴";break;
        case 1:result+="和睦、好溝通，懂對方在想什麼";break;
        case 2:result+="看到彼此會有動或是覺得對方有趣，良性互動的時候會彼此激勵，惡性的互動時候頂來頂去吵翻天";break;
        case 3:result+="容易有心結，需要講開";break;
        
      }
      result+="<br>";
    }else {result+="普通";break;}
  }
  document.getElementById("eachother0").innerHTML = relationship[index];
  document.getElementById("eachother1").innerHTML = result;
  //情絲
  var result="";
  var tootherheartcompare=[dzDisjoint(odz[2],oodz[1]),dzFit(odz[2],oodz[1]),dzImpulse(odz[2],oodz[1])];
  var othertoheartcompare=[dzDisjoint(odz[1],oodz[2]),dzFit(odz[1],oodz[2]),dzImpulse(odz[1],oodz[2])]; 
  for(var i=0;i<tootherheartcompare.length;i++){
    if(tootherheartcompare[i]!="nothing"){
      switch(i){
        case 0:result+="對方越來不知道該怎麼跟你搭話，無言以對";break;
        case 1:result+="對方會為你想~，";break;
        case 2:result+="起初對方覺得你是有趣生物~，但日子久了會挑剔你，對於你的缺點會越看越不順眼";break;
        default: result+="普通";
      }
      result+="<br>";
    }
  }
  for(var i=0;i<othertoheartcompare.length;i++){
    if(othertoheartcompare[i]!="nothing"){
      switch(i){
        case 0:result+="越來不知道該怎麼跟對方搭話";break;
        case 1:result+="容易為對方想";break;
        case 2:result+="起初你覺得是有趣生物~，但日子久了會挑剔你，對於對方的缺點會越看越不順眼";break;
        default: result+="普通";
      }
      result+="<br>";
    }
  }
  document.getElementById("eachother2").innerHTML = result;
  
}