var today=new Date();
var day=today.getDay();
var dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.writeln("Today's date is "+ today.getDate()+ "/ "+today.getUTCDay() +" /"+today.getFullYear()+". ToDay is:"+dayList[day]+" and");                  
var hour=today.getHours();
var minute=today.getMinutes();
var second=today.getSeconds();

var prepand=hour>=12?"PM":"AM";

hour =hour>=12?hour-12:hour;

if(hour===0 && prepand ==="PM"){
    if(minute===0 && second===0){
        hour=12;
        prepand="Noon";
    }else{
        hour=12;
        prepand="PM";
    }
}
if(hour===0 && prepand ==="AM"){
    if(minute===0 && second===0){
        hour=12;
        prepand="Mid-Night";
    }else{
        hour=12;
        prepand="AM";
    }
}
document.writeln("Current Time is : " + hour +":" +minute +":"+ second +" "+prepand);