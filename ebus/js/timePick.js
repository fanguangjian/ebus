function CurentTime(){
    var myDate = new Date();//获取系统当前时间

    var YY = myDate.getFullYear();
    var MM = myDate.getMonth()+1;
    var DD = myDate.getDate();
    var hh = myDate.getHours();
    var mm = myDate.getMinutes();
    var ss = myDate.getSeconds();
    var ww = myDate.getDay();

    // console.log(YY, MM,DD,hh,mm,ss,ww);

        var clock = YY + "-";
       
        if(MM < 10)  clock += "0";       
            clock += MM + "-";
       
        if(DD < 10) clock += "0";           
            clock += DD + " ";
       
        if(hh < 10) clock += "0";           
            clock += hh + ":";

        if(mm < 10) clock += '0'; 
            clock += mm + ":"; 
        if(ss < 10) clock += '0'; 
            clock += ss; 
        if  (ww==0)  ww="星期日";
        if  (ww==1)  ww="星期一";
        if  (ww==2)  ww="星期二";
        if  (ww==3)  ww="星期三";
        if  (ww==4)  ww="星期四";
        if  (ww==5)  ww="星期五";
        if  (ww==6)  ww="星期六";

        // return(clock); 
        // console.log(clock)
        // $("#dateTime").html("当前时间: "+clock +"&nbsp&nbsp"+ww); //将值赋给div
        $("#dateTime").find("span").eq(0).html("当前时间: "+clock +"&nbsp&nbsp"); //将值赋给div
        $("#dateTime").find("span").eq(1).html(ww); //将值赋给div


}
$(function(){
        setInterval("CurentTime();",1000); //每隔一秒运行一次
        // window.setTimeout("CurentTime()", 1000);

})

// function showLocale(objD){
//     var str,colorhead,colorfoot;
//     var yy = objD.getYear();
//     if(yy<1900) yy = yy+1900;
//     var MM = objD.getMonth()+1;
//     if(MM<10) MM = '0' + MM;
//     var dd = objD.getDate();
//     if(dd<10) dd = '0' + dd;
//     var hh = objD.getHours();
//     if(hh<10) hh = '0' + hh;
//     var mm = objD.getMinutes();
//     if(mm<10) mm = '0' + mm;
//     var ss = objD.getSeconds();
//     if(ss<10) ss = '0' + ss;
//     var ww = objD.getDay();
//     if  ( ww==0 )  colorhead="<font>";
//     if  ( ww > 0 && ww < 6 )  colorhead="<font>";
//     if  ( ww==6 )  colorhead="<font>";
//     if  (ww==0)  ww="星期日";
//     if  (ww==1)  ww="星期一";
//     if  (ww==2)  ww="星期二";
//     if  (ww==3)  ww="星期三";
//     if  (ww==4)  ww="星期四";
//     if  (ww==5)  ww="星期五";
//     if  (ww==6)  ww="星期六";
//     colorfoot="</font>"
//     str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
//     return(str);
// }

// function tick(){
//     var today;
//     today = new Date();
//     document.getElementById("dateTime").innerHTML = showLocale(today);
//     window.setTimeout("tick()", 1000);
// }

// // tick();



