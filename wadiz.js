var N = "\n";
Jsoup = org.jsoup.Jsoup;
const blank = "\u200b".repeat(500);
Mlink= "https://www.wadiz.kr/web/campaign/detail/111487?utm_source=wadizshare_in&utm_medium=url";
var ment = "평행우주 와디즈 현황";
var ment2 = "값에 오류가 있을 수 있어요";
//var example = {"data":578489687,"timestamp":"04/26 18:00","message":null}
 
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){ 
 try{
   
/*if(msg=="/인자값찾기"){
let inja = Jsoup.connect(Mlink).get()
replier.reply(inja);
}*/
   
if(msg=="/와디즈") { 
let map = Jsoup.connect(Mlink).get()
//var bx = map.select("h3 class").select("img").attr("src");
//var remday = map.select("p[class=remaining-day]").text();
var achiv = map.select("p[class=achievement-rate]").text().replace(/달성.*?달성/g, '');
var tamount = map.select("p[class=total-amount]").text().replace(/펀딩.*?펀딩/g, '');
var tsup = map.select("p[class=total-supporter]").text().replace(/명의 서포터.*?명의 서포터/g, '');
var like = map.select("div[class=btn-wrap-flex]").text().replace(/문의 공유하기.*?문의 공유하기/g, '');

 replier.reply(ment+N+"달성현황: "+achiv+N+"달성액: "+tamount+N+"서포터: "+tsup+N+"좋아요❤: " +like+N+ ment2);
}


}catch(e){
  replier.reply(e);
}
}
