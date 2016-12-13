// ตั้งค่าตัวอักษร
var katakana;
var romanji;
function katakana_level_change(level){
  switch (level) {
    case "1":
                katakana =
                [
                  "ア",  "イ",  "ウ",  "エ",  "オ",
                  "カ",  "キ",  "ク",  "ケ",  "コ",
                  "サ",  "シ",  "ス",  "セ",  "ソ"
                ];
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so"
                ];
      break;
    case "2":
                katakana =
                [
                  "タ",  "チ",  "ツ",  "テ",  "ト",
                  "ナ",  "ニ",  "ヌ",  "ネ",  "ノ",
                  "ハ",  "ヒ",  "フ",  "ヘ",  "ホ"
                ];
                romanji =
                [
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho"
                ];
      break;
    case "3":
                katakana =
                [
                  "マ",  "ミ",  "ム",  "メ",  "モ",
                  "ヤ",	       "ユ",	　      "ヨ",
                  "ラ",  "リ",  "ル",  "レ",  "ロ",
                  "ワ",			　               "ヲ",  "ン"
                ];
                romanji =
                [
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo",  "nn"
                ];
      break;
    case "1-3" :
                katakana =
                [
                  "ア",  "イ",  "ウ",  "エ",  "オ",
                  "カ",  "キ",  "ク",  "ケ",  "コ",
                  "サ",  "シ",  "ス",  "セ",  "ソ",
                  "タ",  "チ",  "ツ",  "テ",  "ト",
                  "ナ",  "ニ",  "ヌ",  "ネ",  "ノ",
                  "ハ",  "ヒ",  "フ",  "ヘ",  "ホ",
                  "マ",  "ミ",  "ム",  "メ",  "モ",
                  "ヤ",	       "ユ",	　      "ヨ",
                  "ラ",  "リ",  "ル",  "レ",  "ロ",
                  "ワ",			　               "ヲ",  "ン"
                ];
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so",
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho",
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo",  "nn"

                ];
       break;
    case "4":
                katakana =
                [
                  "ガ",  "ギ",  "グ",  "ゲ",  "ゴ",
                  "ザ",  "ジ",  "ズ",  "ゼ",  "ゾ",
                  "ダ",  "ヂ",  "ヅ",  "デ",  "ド",
                  "バ",  "ビ",  "ブ",  "ベ",  "ボ",
                  "パ",  "ピ",  "プ",  "ペ",  "ポ"
                ];
                romanji =
                [
                  "ga",	 "gi",	"gu",	"ge",	"go",
                  "za",	 "ji",	"zu",	"ze",	"zo",
                  "da",  "di",	"du",	"de",	"do",
                  "ba",	 "bi",	"bu",	"be",	"bo",
                  "pa",	 "pi",	"pu",	"pe",	"po"
                ];
       break;
    case "1-4":
                katakana =
                [
                  "ア",  "イ",  "ウ",  "エ",  "オ",
                  "カ",  "キ",  "ク",  "ケ",  "コ",
                  "サ",  "シ",  "ス",  "セ",  "ソ",
                  "タ",  "チ",  "ツ",  "テ",  "ト",
                  "ナ",  "ニ",  "ヌ",  "ネ",  "ノ",
                  "ハ",  "ヒ",  "フ",  "ヘ",  "ホ",
                  "マ",  "ミ",  "ム",  "メ",  "モ",
                  "ヤ",	       "ユ",	　      "ヨ",
                  "ラ",  "リ",  "ル",  "レ",  "ロ",
                  "ワ",			　               "ヲ",  "ン",
                  "ガ",  "ギ",  "グ",  "ゲ",  "ゴ",
                  "ザ",  "ジ",  "ズ",  "ゼ",  "ゾ",
                  "ダ",  "ヂ",  "ヅ",  "デ",  "ド",
                  "バ",  "ビ",  "ブ",  "ベ",  "ボ",
                  "パ",  "ピ",  "プ",  "ペ",  "ポ"
                ];
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so",
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho",
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo",  "nn",
                  "ga",	 "gi",	"gu",	  "ge",  	"go",
                  "za",	 "ji",	"zu",   "ze",  	"zo",
                  "da",  "di",	"du",   "de",  	"do",
                  "ba",	 "bi",	"bu",   "be",  	"bo",
                  "pa",	 "pi",	"pu",   "pe",  	"po"
                ];
       break;
    case "5":
                katakana =
                [
                  "キャ",	      "キュ",   	  "キョ",
                  "シャ",	      "シュ",     	"ショ",
                  "チャ",	      "チュ",	      "チョ",
                  "ニャ",	      "ニュ",	      "ニョ",
                  "ヒャ",	      "ヒュ",	      "ヒョ",
                  "ミャ",	      "ミュ",	      "ミョ",
                  "リャ",	      "リュ",	      "リョ",
                  "ギャ",	      "ギュ",	      "ギョ",
                  "ジャ",	      "ジュ",	      "ジョ",
                  "ビャ",	      "ビュ",	      "ビョ",
                  "ピャ",	      "ピュ",	      "ピョ"
                ];
                romanji =
                [
                  "kya",		    "kyu",			    "kyo",
                  "sha",	     	"shu",     			"sho",
                  "cha",	     	"chu",     			"cho",
                  "nya",	     	"nyu",     			"nyo",
                  "hya",	     	"hyu",     			"hyo",
                  "mya",	     	"myu",     			"myo",
                  "rya",    		"ryu",      		"ryo",
                  "gya",	     	"gyu",     			"gyo",
                  "ja",		     	"ju",      			"jo",
                  "bya",	     	"byu",     			"byo",
                  "pya",	     	"pyu",     			"pyo"
                ];
       break;
    default:
                katakana =
                [
                  "ア",  "イ",  "ウ",  "エ",  "オ",
                  "カ",  "キ",  "ク",  "ケ",  "コ",
                  "サ",  "シ",  "ス",  "セ",  "ソ",
                  "タ",  "チ",  "ツ",  "テ",  "ト",
                  "ナ",  "ニ",  "ヌ",  "ネ",  "ノ",
                  "ハ",  "ヒ",  "フ",  "ヘ",  "ホ",
                  "マ",  "ミ",  "ム",  "メ",  "モ",
                  "ヤ",	       "ユ",	　      "ヨ",
                  "ラ",  "リ",  "ル",  "レ",  "ロ",
                  "ワ",			　               "ヲ",  "ン",
                  "ガ",  "ギ",  "グ",  "ゲ",  "ゴ",
                  "ザ",  "ジ",  "ズ",  "ゼ",  "ゾ",
                  "ダ",  "ヂ",  "ヅ",  "デ",  "ド",
                  "バ",  "ビ",  "ブ",  "ベ",  "ボ",
                  "パ",  "ピ",  "プ",  "ペ",  "ポ",
                  "キャ",	      "キュ",   	  "キョ",
                  "シャ",	      "シュ",     	"ショ",
                  "チャ",	      "チュ",	      "チョ",
                  "ニャ",	      "ニュ",	      "ニョ",
                  "ヒャ",	      "ヒュ",	      "ヒョ",
                  "ミャ",	      "ミュ",	      "ミョ",
                  "リャ",	      "リュ",	      "リョ",
                  "ギャ",	      "ギュ",	      "ギョ",
                  "ジャ",	      "ジュ",	      "ジョ",
                  "ビャ",	      "ビュ",	      "ビョ",
                  "ピャ",	      "ピュ",	      "ピョ"
                ];
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so",
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho",
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo",  "nn",
                  "ga",	 "gi",	"gu",	  "ge",  	"go",
                  "za",	 "ji",	"zu",   "ze",  	"zo",
                  "da",  "di",	"du",   "de",  	"do",
                  "ba",	 "bi",	"bu",   "be",  	"bo",
                  "pa",	 "pi",	"pu",   "pe",  	"po",
                  "kya",		    "kyu",			    "kyo",
                  "sha",	     	"shu",     			"sho",
                  "cha",	     	"chu",     			"cho",
                  "nya",	     	"nyu",     			"nyo",
                  "hya",	     	"hyu",     			"hyo",
                  "mya",	     	"myu",     			"myo",
                  "rya",    		"ryu",      		"ryo",
                  "gya",	     	"gyu",     			"gyo",
                  "ja",		     	"ju",      			"jo",
                  "bya",	     	"byu",     			"byo",
                  "pya",	     	"pyu",     			"pyo"
                ];

  }
  random_char();
}
katakana_level_change("init");

// คะแนน
var score = 0;

// jquery event
$(function(){
  $("#katakana-button input[type=button]").click(function(){
    check_result($(this)[0].value,$("#random_char").text());
  });

  $('#romanji_textbox').keypress(function (e) {
    if (e.which == 13) {
      var text_value = $(this)[0].value;
      if(romanji.indexOf(text_value)==-1){
        toastr.error("character not found");
        $(this)[0].value = "";
      }else{
        check_result(text_value,$("#random_char").text());
        $(this)[0].value = "";
      }
      return false;    //<---- Add this line
    }
  });

  $('#katakana_textbox').keypress(function (e) {
    if (e.which == 13) {
      var text_value = $(this)[0].value;
      if(katakana.indexOf(text_value)==-1){
        toastr.error("character not found");
        $(this)[0].value = "";
      }else{
        check_result(text_value,$("#random_char").text());
        $(this)[0].value = "";
      }
      return false;    //<---- Add this line
    }
  });

  $('#katakana_level').tooltip({
    title :
            "======================= "+
            "ระดับของตัวอักษรมีอยู่ 5 ระดับให้เลือก \r\n"+
            "======================= \r\n"+
            "แบบ 1 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "アイウエオカキクケコサシスセソ \r\n"+
            "\r\n"+
            "แบบ 2 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "タチツテトナニヌネノハヒフヘホ \r\n"+
            "\r\n"+
            "แบบ 3 จะมีอยู่ 16 ตัวอักษรได้แก่ \r\n"+
            "マミムメモヤユヨラリルレロワヲン \r\n"+
            "\r\n"+
            "แบบ 4 จะมีอยู่ 25 ตัวอักษรได้แก่ \r\n"+
            "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ \r\n"+
            "\r\n"+
            "แบบ 5 จะมีอยู่ 33 ตัวอักษรได้แก่ \r\n"+
            "キャ,キュ,キョ,シャ,シュ,ショ,\r\n" +
            "チャ,チュ,チョ,ニャ,ニュ,ニョ,\r\n" +
            "ヒャ,ヒュ,ヒョ,ミャ,ミュ,ミョ,\r\n" +
            "リャ,リュ,リョ,ギャ,ギュ,ギョ,\r\n" +
            "ジャ,ジュ,ジョ,ビャ,ビュ,ビョ,\r\n" +
            "ピャ,ピュ,ピョ"

    ,
    placement : "bottom"
  });

});

// ตรวจสอบผลลัพท์
function check_result(value,text){
  if(
    katakana.indexOf(text) == romanji.indexOf(value) ||
    katakana.indexOf(text) == katakana.indexOf(value)
    ){
    speak(value);
    count+=3;
    toastr.success("+1 score");
    toastr.success("+2 seconds");
    score += 1;
    $("#score").val(score);
    random_char();
  }else{
    toastr.error("-2 score");
    score -= 2;
    if(score <= -1){
      gameover();
    }
    $("#score").val(score);
  }
}

// สุ่มตัวอักษร
function random_char(){
  // สุ่มตัวเลข
  var rand_i = Math.floor((Math.random() * katakana.length));
  // นำตัวเลขที่สุ่มมัน set ค่าลงไปใน element
  $("#random_char").text(katakana[rand_i]);
}

// set ข้อความเริ่มต้น
random_char();

// ตั้งค่า toastr
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}









var count=11;
var counter=setInterval(timer, 1000);
function timer()
{
  count=count-1;
  if (count <= -1)
  {
    clearInterval(counter);
  　gameover();
    return;
  }
 document.getElementById("timer").innerHTML= count + " secs";
}



function newgame(){
  count=11;
  score=0;
  clearInterval(counter);
  counter=setInterval(timer, 1000);
  $("#score").val(score);
  random_char();
}

function gameover(){
  score=0;
  $("#score").val(score);
  $('#myModal').modal('show');
}


function speak(value){
  value = !/[A-Za-z]+/gm.test(value) ? romanji[katakana.indexOf(value)] : value ;
  toastr.info('play '+value+'.mp3');
  var audio = new Audio('speech/'+value+'.mp3');
  audio.play();
}
