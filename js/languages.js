(function(u,e){typeof module=="object"&&typeof module.exports=="object"?e():typeof define=="function"&&define.amd?define([],e):(u=typeof globalThis<"u"?globalThis:u||self)&&e()})(this,function(){var u={ar:{months:["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062B\u0627\u0646\u064A","\u0634\u0628\u0627\u0637","\u0622\u0630\u0627\u0631","\u0646\u064A\u0633\u0627\u0646","\u0645\u0627\u064A\u0648","\u062D\u0632\u064A\u0631\u0627\u0646","\u062A\u0645\u0648\u0632","\u0622\u0628","\u0623\u064A\u0644\u0648\u0644","\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u0623\u0648\u0644","\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A","\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"],dayOfWeekShort:["\u0646","\u062B","\u0639","\u062E","\u062C","\u0633","\u062D"],dayOfWeek:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0627\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A","\u0627\u0644\u0623\u062D\u062F"]},ro:{months:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],dayOfWeekShort:["Du","Lu","Ma","Mi","Jo","Vi","S\xE2"],dayOfWeek:["Duminic\u0103","Luni","Mar\u0163i","Miercuri","Joi","Vineri","S\xE2mb\u0103t\u0103"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeekShort:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dayOfWeek:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},is:{months:["Jan\xFAar","Febr\xFAar","Mars","Apr\xEDl","Ma\xED","J\xFAn\xED","J\xFAl\xED","\xC1g\xFAst","September","Okt\xF3ber","N\xF3vember","Desember"],dayOfWeekShort:["Sun","M\xE1n","\xDEri\xF0","Mi\xF0","Fim","F\xF6s","Lau"],dayOfWeek:["Sunnudagur","M\xE1nudagur","\xDEri\xF0judagur","Mi\xF0vikudagur","Fimmtudagur","F\xF6studagur","Laugardagur"]},bg:{months:["\u042F\u043D\u0443\u0430\u0440\u0438","\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u041C\u0430\u0440\u0442","\u0410\u043F\u0440\u0438\u043B","\u041C\u0430\u0439","\u042E\u043D\u0438","\u042E\u043B\u0438","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438","\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438","\u041D\u043E\u0435\u043C\u0432\u0440\u0438","\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"],dayOfWeekShort:["\u041D\u0434","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],dayOfWeek:["\u041D\u0435\u0434\u0435\u043B\u044F","\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u044F\u0434\u0430","\u0427\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A","\u041F\u0435\u0442\u044A\u043A","\u0421\u044A\u0431\u043E\u0442\u0430"]},fa:{months:["\u0641\u0631\u0648\u0631\u062F\u06CC\u0646","\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A","\u062E\u0631\u062F\u0627\u062F","\u062A\u06CC\u0631","\u0645\u0631\u062F\u0627\u062F","\u0634\u0647\u0631\u06CC\u0648\u0631","\u0645\u0647\u0631","\u0622\u0628\u0627\u0646","\u0622\u0630\u0631","\u062F\u06CC","\u0628\u0647\u0645\u0646","\u0627\u0633\u0641\u0646\u062F"],dayOfWeekShort:["\u06CC\u06A9\u0634\u0646\u0628\u0647","\u062F\u0648\u0634\u0646\u0628\u0647","\u0633\u0647 \u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067E\u0646\u062C\u0634\u0646\u0628\u0647","\u062C\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],dayOfWeek:["\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647","\u062F\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200C\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647","\u062C\u0645\u0639\u0647","\u0634\u0646\u0628\u0647","\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647"]},ru:{months:["\u042F\u043D\u0432\u0430\u0440\u044C","\u0424\u0435\u0432\u0440\u0430\u043B\u044C","\u041C\u0430\u0440\u0442","\u0410\u043F\u0440\u0435\u043B\u044C","\u041C\u0430\u0439","\u0418\u044E\u043D\u044C","\u0418\u044E\u043B\u044C","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u041E\u043A\u0442\u044F\u0431\u0440\u044C","\u041D\u043E\u044F\u0431\u0440\u044C","\u0414\u0435\u043A\u0430\u0431\u0440\u044C"],dayOfWeekShort:["\u0412\u0441","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"],dayOfWeek:["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041F\u044F\u0442\u043D\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043E\u0442\u0430"]},uk:{months:["\u0421\u0456\u0447\u0435\u043D\u044C","\u041B\u044E\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C","\u041A\u0432\u0456\u0442\u0435\u043D\u044C","\u0422\u0440\u0430\u0432\u0435\u043D\u044C","\u0427\u0435\u0440\u0432\u0435\u043D\u044C","\u041B\u0438\u043F\u0435\u043D\u044C","\u0421\u0435\u0440\u043F\u0435\u043D\u044C","\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C","\u0416\u043E\u0432\u0442\u0435\u043D\u044C","\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043D\u044C"],dayOfWeekShort:["\u041D\u0434\u043B","\u041F\u043D\u0434","\u0412\u0442\u0440","\u0421\u0440\u0434","\u0427\u0442\u0432","\u041F\u0442\u043D","\u0421\u0431\u0442"],dayOfWeek:["\u041D\u0435\u0434\u0456\u043B\u044F","\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A","\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041F'\u044F\u0442\u043D\u0438\u0446\u044F","\u0421\u0443\u0431\u043E\u0442\u0430"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["S","M","T","W","T","F","S"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],postsMonthTip:"Posts published in LMM yyyy",titleFormat:"LMM yyyy"},el:{months:["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2","\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2","\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2","\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2","\u039C\u03AC\u03B9\u03BF\u03C2","\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2","\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2","\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2","\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2","\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2","\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2","\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"],dayOfWeekShort:["\u039A\u03C5\u03C1","\u0394\u03B5\u03C5","\u03A4\u03C1\u03B9","\u03A4\u03B5\u03C4","\u03A0\u03B5\u03BC","\u03A0\u03B1\u03C1","\u03A3\u03B1\u03B2"],dayOfWeek:["\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE","\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1","\u03A4\u03C1\u03AF\u03C4\u03B7","\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7","\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7","\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE","\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"]},de:{months:["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeekShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeekShort:["zo","ma","di","wo","do","vr","za"],dayOfWeek:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},tr:{months:["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],dayOfWeekShort:["Paz","Pts","Sal","\xC7ar","Per","Cum","Cts"],dayOfWeek:["Pazar","Pazartesi","Sal\u0131","\xC7ar\u015Famba","Per\u015Fembe","Cuma","Cumartesi"]},fr:{months:["Janvier","F\xE9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xFBt","Septembre","Octobre","Novembre","D\xE9cembre"],dayOfWeekShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayOfWeek:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeekShort:["Dom","Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b"],dayOfWeek:["Domingo","Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado"]},th:{months:["\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21","\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C","\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21","\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19","\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21","\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19","\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21","\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21","\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19","\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21","\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19","\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"],dayOfWeekShort:["\u0E2D\u0E32.","\u0E08.","\u0E2D.","\u0E1E.","\u0E1E\u0E24.","\u0E28.","\u0E2A."],dayOfWeek:["\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C","\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C","\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23","\u0E1E\u0E38\u0E18","\u0E1E\u0E24\u0E2B\u0E31\u0E2A","\u0E28\u0E38\u0E01\u0E23\u0E4C","\u0E40\u0E2A\u0E32\u0E23\u0E4C","\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"]},pl:{months:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017Adziernik","listopad","grudzie\u0144"],dayOfWeekShort:["nd","pn","wt","\u015Br","cz","pt","sb"],dayOfWeek:["niedziela","poniedzia\u0142ek","wtorek","\u015Broda","czwartek","pi\u0105tek","sobota"]},pt:{months:["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayOfWeek:["Domingo","Segunda","Ter\xE7a","Quarta","Quinta","Sexta","S\xE1bado"]},ch:{months:["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"],dayOfWeekShort:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["S\xF6n","M\xE5n","Tis","Ons","Tor","Fre","L\xF6r"]},kr:{months:["1\uC6D4","2\uC6D4","3\uC6D4","4\uC6D4","5\uC6D4","6\uC6D4","7\uC6D4","8\uC6D4","9\uC6D4","10\uC6D4","11\uC6D4","12\uC6D4"],dayOfWeekShort:["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],dayOfWeek:["\uC77C\uC694\uC77C","\uC6D4\uC694\uC77C","\uD654\uC694\uC77C","\uC218\uC694\uC77C","\uBAA9\uC694\uC77C","\uAE08\uC694\uC77C","\uD1A0\uC694\uC77C"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayOfWeek:["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeekShort:["S\xF8n","Man","Tir","Ons","Tor","Fre","L\xF8r"],dayOfWeek:["s\xF8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xF8rdag"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeekShort:["S\xF8n","Man","Tir","Ons","Tor","Fre","L\xF8r"],dayOfWeek:["S\xF8ndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","L\xF8rdag"]},ja:{months:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],dayOfWeekShort:["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],dayOfWeek:["\u65E5\u66DC","\u6708\u66DC","\u706B\u66DC","\u6C34\u66DC","\u6728\u66DC","\u91D1\u66DC","\u571F\u66DC"]},vi:{months:["Th\xE1ng 1","Th\xE1ng 2","Th\xE1ng 3","Th\xE1ng 4","Th\xE1ng 5","Th\xE1ng 6","Th\xE1ng 7","Th\xE1ng 8","Th\xE1ng 9","Th\xE1ng 10","Th\xE1ng 11","Th\xE1ng 12"],dayOfWeekShort:["CN","T2","T3","T4","T5","T6","T7"],dayOfWeek:["Ch\u1EE7 nh\u1EADt","Th\u1EE9 hai","Th\u1EE9 ba","Th\u1EE9 t\u01B0","Th\u1EE9 n\u0103m","Th\u1EE9 s\xE1u","Th\u1EE9 b\u1EA3y"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeekShort:["Ned","Pon","Tor","Sre","\u010Cet","Pet","Sob"],dayOfWeek:["Nedelja","Ponedeljek","Torek","Sreda","\u010Cetrtek","Petek","Sobota"]},cs:{months:["Leden","\xDAnor","B\u0159ezen","Duben","Kv\u011Bten","\u010Cerven","\u010Cervenec","Srpen","Z\xE1\u0159\xED","\u0158\xEDjen","Listopad","Prosinec"],dayOfWeekShort:["Ne","Po","\xDAt","St","\u010Ct","P\xE1","So"]},hu:{months:["Janu\xE1r","Febru\xE1r","M\xE1rcius","\xC1prilis","M\xE1jus","J\xFAnius","J\xFAlius","Augusztus","Szeptember","Okt\xF3ber","November","December"],dayOfWeekShort:["Va","H\xE9","Ke","Sze","Cs","P\xE9","Szo"],dayOfWeek:["vas\xE1rnap","h\xE9tf\u0151","kedd","szerda","cs\xFCt\xF6rt\xF6k","p\xE9ntek","szombat"]},az:{months:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],dayOfWeekShort:["B","Be","\xC7a","\xC7","Ca","C","\u015E"],dayOfWeek:["Bazar","Bazar ert\u0259si","\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131","\xC7\u0259r\u015F\u0259nb\u0259","C\xFCm\u0259 ax\u015Fam\u0131","C\xFCm\u0259","\u015E\u0259nb\u0259"]},bs:{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sri","\u010Cet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","\u010Cetvrtak","Petak","Subota"]},ca:{months:["Gener","Febrer","Mar\xE7","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],dayOfWeekShort:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],dayOfWeek:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},"en-GB":{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},et:{months:["Jaanuar","Veebruar","M\xE4rts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayOfWeekShort:["P","E","T","K","N","R","L"],dayOfWeek:["P\xFChap\xE4ev","Esmasp\xE4ev","Teisip\xE4ev","Kolmap\xE4ev","Neljap\xE4ev","Reede","Laup\xE4ev"]},eu:{months:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],dayOfWeekShort:["Ig.","Al.","Ar.","Az.","Og.","Or.","La."],dayOfWeek:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"]},fi:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes\xE4kuu","Hein\xE4kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],dayOfWeekShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayOfWeek:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},gl:{months:["Xan","Feb","Maz","Abr","Mai","Xun","Xul","Ago","Set","Out","Nov","Dec"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Xov","Ven","Sab"],dayOfWeek:["Domingo","Luns","Martes","M\xE9rcores","Xoves","Venres","S\xE1bado"]},hr:{months:["Sije\u010Danj","Velja\u010Da","O\u017Eujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],dayOfWeekShort:["Ned","Pon","Uto","Sri","\u010Cet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","\u010Cetvrtak","Petak","Subotagg"]},ko:{months:["1\uC6D4","2\uC6D4","3\uC6D4","4\uC6D4","5\uC6D4","6\uC6D4","7\uC6D4","8\uC6D4","9\uC6D4","10\uC6D4","11\uC6D4","12\uC6D4"],dayOfWeekShort:["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],dayOfWeek:["\uC77C\uC694\uC77C","\uC6D4\uC694\uC77C","\uD654\uC694\uC77C","\uC218\uC694\uC77C","\uBAA9\uC694\uC77C","\uAE08\uC694\uC77C","\uD1A0\uC694\uC77C"]},lt:{months:["Sausio","Vasario","Kovo","Baland\u017Eio","Gegu\u017E\u0117s","Bir\u017Eelio","Liepos","Rugpj\u016B\u010Dio","Rugs\u0117jo","Spalio","Lapkri\u010Dio","Gruod\u017Eio"],dayOfWeekShort:["Sek","Pir","Ant","Tre","Ket","Pen","\u0160e\u0161"],dayOfWeek:["Sekmadienis","Pirmadienis","Antradienis","Tre\u010Diadienis","Ketvirtadienis","Penktadienis","\u0160e\u0161tadienis"]},lv:{months:["Janv\u0101ris","Febru\u0101ris","Marts","Apr\u012Blis ","Maijs","J\u016Bnijs","J\u016Blijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],dayOfWeekShort:["Sv","Pr","Ot","Tr","Ct","Pk","St"],dayOfWeek:["Sv\u0113tdiena","Pirmdiena","Otrdiena","Tre\u0161diena","Ceturtdiena","Piektdiena","Sestdiena"]},mk:{months:["\u0458\u0430\u043D\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0438\u043B","\u043C\u0430\u0458","\u0458\u0443\u043D\u0438","\u0458\u0443\u043B\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438","\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438","\u043D\u043E\u0435\u043C\u0432\u0440\u0438","\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"],dayOfWeekShort:["\u043D\u0435\u0434","\u043F\u043E\u043D","\u0432\u0442\u043E","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043F\u0435\u0442","\u0441\u0430\u0431"],dayOfWeek:["\u041D\u0435\u0434\u0435\u043B\u0430","\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0440\u0442\u043E\u043A","\u041F\u0435\u0442\u043E\u043A","\u0421\u0430\u0431\u043E\u0442\u0430"]},mn:{months:["1-\u0440 \u0441\u0430\u0440","2-\u0440 \u0441\u0430\u0440","3-\u0440 \u0441\u0430\u0440","4-\u0440 \u0441\u0430\u0440","5-\u0440 \u0441\u0430\u0440","6-\u0440 \u0441\u0430\u0440","7-\u0440 \u0441\u0430\u0440","8-\u0440 \u0441\u0430\u0440","9-\u0440 \u0441\u0430\u0440","10-\u0440 \u0441\u0430\u0440","11-\u0440 \u0441\u0430\u0440","12-\u0440 \u0441\u0430\u0440"],dayOfWeekShort:["\u0414\u0430\u0432","\u041C\u044F\u0433","\u041B\u0445\u0430","\u041F\u04AF\u0440","\u0411\u0441\u043D","\u0411\u044F\u043C","\u041D\u044F\u043C"],dayOfWeek:["\u0414\u0430\u0432\u0430\u0430","\u041C\u044F\u0433\u043C\u0430\u0440","\u041B\u0445\u0430\u0433\u0432\u0430","\u041F\u04AF\u0440\u044D\u0432","\u0411\u0430\u0430\u0441\u0430\u043D","\u0411\u044F\u043C\u0431\u0430","\u041D\u044F\u043C"]},"pt-BR":{months:["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"],dayOfWeek:["Domingo","Segunda","Ter\xE7a","Quarta","Quinta","Sexta","S\xE1bado"]},sk:{months:["Janu\xE1r","Febru\xE1r","Marec","Apr\xEDl","M\xE1j","J\xFAn","J\xFAl","August","September","Okt\xF3ber","November","December"],dayOfWeekShort:["Ne","Po","Ut","St","\u0160t","Pi","So"],dayOfWeek:["Nede\u013Ea","Pondelok","Utorok","Streda","\u0160tvrtok","Piatok","Sobota"]},sq:{months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","N\xEBntor","Dhjetor"],dayOfWeekShort:["Die","H\xEBn","Mar","M\xEBr","Enj","Pre","Shtu"],dayOfWeek:["E Diel","E H\xEBn\xEB","E Mart\u0113","E M\xEBrkur\xEB","E Enjte","E Premte","E Shtun\xEB"]},"sr-YU":{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sre","\u010Det","Pet","Sub"],dayOfWeek:["Nedelja","Ponedeljak","Utorak","Sreda","\u010Cetvrtak","Petak","Subota"]},sr:{months:["\u0458\u0430\u043D\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0438\u043B","\u043C\u0430\u0458","\u0458\u0443\u043D","\u0458\u0443\u043B","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440","\u043E\u043A\u0442\u043E\u0431\u0430\u0440","\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"],dayOfWeekShort:["\u043D\u0435\u0434","\u043F\u043E\u043D","\u0443\u0442\u043E","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043F\u0435\u0442","\u0441\u0443\u0431"],dayOfWeek:["\u041D\u0435\u0434\u0435\u0459\u0430","\u041F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A","\u0423\u0442\u043E\u0440\u0430\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043A","\u041F\u0435\u0442\u0430\u043A","\u0421\u0443\u0431\u043E\u0442\u0430"]},sv:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["S\xF6n","M\xE5n","Tis","Ons","Tor","Fre","L\xF6r"],dayOfWeek:["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"]},"zh-TW":{months:["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"],dayOfWeekShort:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],dayOfWeek:["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"]},"zh-CN":{months:["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"],dayOfWeekShort:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],dayOfWeek:["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],postsMonthTip:"\u67E5\u770Byyyy\u5E74MM\u6708\u7684\u6587\u7AE0",titleFormat:"yyyy\u5E74MM\u6708"},he:{months:["\u05D9\u05E0\u05D5\u05D0\u05E8","\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8","\u05DE\u05E8\u05E5","\u05D0\u05E4\u05E8\u05D9\u05DC","\u05DE\u05D0\u05D9","\u05D9\u05D5\u05E0\u05D9","\u05D9\u05D5\u05DC\u05D9","\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8","\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8","\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8","\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8","\u05D3\u05E6\u05DE\u05D1\u05E8"],dayOfWeekShort:["\u05D0'","\u05D1'","\u05D2'","\u05D3'","\u05D4'","\u05D5'","\u05E9\u05D1\u05EA"],dayOfWeek:["\u05E8\u05D0\u05E9\u05D5\u05DF","\u05E9\u05E0\u05D9","\u05E9\u05DC\u05D9\u05E9\u05D9","\u05E8\u05D1\u05D9\u05E2\u05D9","\u05D7\u05DE\u05D9\u05E9\u05D9","\u05E9\u05D9\u05E9\u05D9","\u05E9\u05D1\u05EA","\u05E8\u05D0\u05E9\u05D5\u05DF"]},hy:{months:["\u0540\u0578\u0582\u0576\u057E\u0561\u0580","\u0553\u0565\u057F\u0580\u057E\u0561\u0580","\u0544\u0561\u0580\u057F","\u0531\u057A\u0580\u056B\u056C","\u0544\u0561\u0575\u056B\u057D","\u0540\u0578\u0582\u0576\u056B\u057D","\u0540\u0578\u0582\u056C\u056B\u057D","\u0555\u0563\u0578\u057D\u057F\u0578\u057D","\u054D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580","\u0540\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580","\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580","\u0534\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"],dayOfWeekShort:["\u053F\u056B","\u0535\u0580\u056F","\u0535\u0580\u0584","\u0549\u0578\u0580","\u0540\u0576\u0563","\u0548\u0582\u0580\u0562","\u0547\u0562\u0569"],dayOfWeek:["\u053F\u056B\u0580\u0561\u056F\u056B","\u0535\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B","\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B","\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B","\u0540\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B","\u0548\u0582\u0580\u0562\u0561\u0569","\u0547\u0561\u0562\u0561\u0569"]},kg:{months:["\u04AE\u0447\u0442\u04AF\u043D \u0430\u0439\u044B","\u0411\u0438\u0440\u0434\u0438\u043D \u0430\u0439\u044B","\u0416\u0430\u043B\u0433\u0430\u043D \u041A\u0443\u0440\u0430\u043D","\u0427\u044B\u043D \u041A\u0443\u0440\u0430\u043D","\u0411\u0443\u0433\u0443","\u041A\u0443\u043B\u0436\u0430","\u0422\u0435\u043A\u0435","\u0411\u0430\u0448 \u041E\u043E\u043D\u0430","\u0410\u044F\u043A \u041E\u043E\u043D\u0430","\u0422\u043E\u0433\u0443\u0437\u0434\u0443\u043D \u0430\u0439\u044B","\u0416\u0435\u0442\u0438\u043D\u0438\u043D \u0430\u0439\u044B","\u0411\u0435\u0448\u0442\u0438\u043D \u0430\u0439\u044B"],dayOfWeekShort:["\u0416\u0435\u043A","\u0414\u04AF\u0439","\u0428\u0435\u0439","\u0428\u0430\u0440","\u0411\u0435\u0439","\u0416\u0443\u043C","\u0418\u0448\u0435"],dayOfWeek:["\u0416\u0435\u043A\u0448\u0435\u043C\u0431","\u0414\u04AF\u0439\u0448\u04E9\u043C\u0431","\u0428\u0435\u0439\u0448\u0435\u043C\u0431","\u0428\u0430\u0440\u0448\u0435\u043C\u0431","\u0411\u0435\u0439\u0448\u0435\u043C\u0431\u0438","\u0416\u0443\u043C\u0430","\u0418\u0448\u0435\u043D\u0431"]},rm:{months:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],dayOfWeekShort:["Du","Gli","Ma","Me","Gie","Ve","So"],dayOfWeek:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"]},ka:{months:["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8","\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8","\u10DB\u10D0\u10E0\u10E2\u10D8","\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8","\u10DB\u10D0\u10D8\u10E1\u10D8","\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8","\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8","\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD","\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8","\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8","\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8","\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"],dayOfWeekShort:["\u10D9\u10D5","\u10DD\u10E0\u10E8","\u10E1\u10D0\u10DB\u10E8","\u10DD\u10D7\u10EE","\u10EE\u10E3\u10D7","\u10DE\u10D0\u10E0","\u10E8\u10D0\u10D1"],dayOfWeek:["\u10D9\u10D5\u10D8\u10E0\u10D0","\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8","\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8","\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8","\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8","\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8","\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"]}}});