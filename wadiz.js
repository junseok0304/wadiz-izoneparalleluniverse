const blank = "\u200b".repeat(500); 
Jsoup = org.jsoup.Jsoup;
var N = "\n";
Tlink = "https://www.wadiz.kr/web/campaign/detail/106620?utm_source=wadizshare_in&utm_medium=url";
T2link = "https://www.wadiz.kr/web/campaign/detail/106552?utm_source=wadizshare_in&utm_medium=url";
Mlink= "https://www.wadiz.kr/web/campaign/detail/111487?utm_source=wadizshare_in&utm_medium=url";
var ment = "🛰평행우주 프로젝트 와디즈 현황🛰";
var ment2 = "요청시각 기준이며 값에 오류가 있을 수 있습니다.";

var dr = "http://lt2.kr/pu/api/direct.php";
//var example = {"data":578489687,"timestamp":"04/26 18:00","message":null}
 
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){ 
 try{
   
/*if(msg=="/인자값찾기"){
let inja = Jsoup.connect(Mlink).get()
replier.reply(inja);
}*/

   
if(msg=="/와디즈전체") { 
let map = Jsoup.connect(Mlink).get()
//var bx = map.select("h3 class").select("img").attr("src");
var remday = map.select("p[class=remaining-day]").text();
var achiv = map.select("p[class=achievement-rate]").text().replace(/달성.*?달성/g, '');
var tamount = map.select("p[class=total-amount]").text().replace(/펀딩.*?펀딩/g, '');
var tsup = map.select("p[class=total-supporter]").text().replace(/명의 서포터.*?명의 서포터/g, '');
var like = map.select("div[class=btn-wrap-flex]").text().replace(/문의 공유하기.*?문의 공유하기/g, '');

 replier.reply(N+achiv+" 달성"+N+N+tamount+" 펀딩"+N+N+tsup+"명의 서포터"+N+N+like+"개의 좋아요");
}
   
/*if(msg=="/와디즈") { 
let map = Jsoup.connect(Mlink).get()
//var bx = map.select("h3 class").select("img").attr("src");
//var remday = map.select("p[class=remaining-day]").text();
var achiv = map.select("p[class=achievement-rate]").text().replace(/달성.*?달성/g, '');
var tamount = map.select("p[class=total-amount]").text().replace(/펀딩.*?펀딩/g, '');
var tsup = map.select("p[class=total-supporter]").text().replace(/명의 서포터.*?명의 서포터/g, '');
var like = map.select("div[class=btn-wrap-flex]").text().replace(/문의 공유하기.*?문의 공유하기/g, '');

 replier.reply(ment+N+"달성률🚧: "+achiv+N+"달성 금액💳: "+tamount+N+"서포터 수👤: "+tsup+N+"좋아요❤: " +like+N+ ment2);
}

if(msg=="/와디즈미니") { 
let map = Jsoup.connect(Mlink).get()
//var bx = map.select("h3 class").select("img").attr("src");
//var remday = map.select("p[class=remaining-day]").text();
//var achiv = map.select("p[class=achievement-rate]").text().replace(/달성.*?달성/g, '');
var tamount = map.select("p[class=total-amount]").text().replace(/펀딩.*?펀딩/g, '');
var tsup = map.select("p[class=total-supporter]").text().replace(/명의 서포터.*?명의 서포터/g, '');
var like = map.select("div[class=btn-wrap-flex]").text().replace(/문의 공유하기.*?문의 공유하기/g, '');

  
 replier.reply(ment+N+"달성 금액💳: "+tamount+N+"서포터 수👤: "+tsup+N+"좋아요❤: " +like+N+ ment2);
}

if(msg=="/와디즈테스트") { 
let map = Jsoup.connect(T2link).get()
//var bx = map.select("h3 class").select("img").attr("src");
//var remday = map.select("p[class=remaining-day]").text();
var achiv = map.select("p[class=achievement-rate]").text().replace(/달성.*?달성/g, '');
var tamount = map.select("p[class=total-amount]").text().replace(/펀딩.*?펀딩/g, '');
var tsup = map.select("p[class=total-supporter]").text().replace(/명의 서포터.*?명의 서포터/g, '');
var like = map.select("div[class=btn-wrap-flex]").text().replace(/문의 공유하기.*?문의 공유하기/g, '');

 replier.reply("테스트입니다.컴퍼비즈프로🎧 현황"+N+"달성률: "+achiv+N+"달성 금액: "+tamount+N+"서포터 수: "+tsup+N+"좋아요❤: " +like+N + ment2);
}
*/


}catch(e){
  replier.reply(e);
}
}
