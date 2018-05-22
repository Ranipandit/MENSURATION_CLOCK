    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
	day = date.getDate();

	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	document.getElementById("daymonth").innerHTML = months[month] + " " + day;
	document.getElementById("year").innerHTML = year;

    var hourHand = document.getElementById("hour");
    var minHand  = document.getElementById("min");
    var secHand  = document.getElementById("sec");

    function clock(){
    var d = new Date()
    var hour = d.getHours() % 12;
    var min  = d.getMinutes();
    var sec  = d.getSeconds();

    var hourdeg = (hour * 30) + (0.5 * min);// 30/60
    var mindeg  = min * 6 + (0.1 * sec); // 6/60
    var secdeg  = sec * 6; // 360/60

    hourHand.style.transform = 'rotate('+ hourdeg +'deg)';
    minHand.style.transform = 'rotate('+ mindeg +'deg)';
    secHand.style.transform = 'rotate('+ secdeg +'deg)';

    setTimeout(clock , 1000);
   };

   clock();

  /* localStorage.setItem("last period date" ,18);
   localStorage.setItem("period cycle" , 30);*/

   function submit(){
    

   var last_period_date = parseInt(document.getElementById("last_period_date").value);
   var period_cycle = parseInt(document.getElementById("period_cycle").value);

   var dt = new Date();
   var currentDate = parseInt(dt.getDate());

   document.getElementById("day_left").style.border = "1px #0a0a75";

   if(last_period_date < currentDate){
    var dayLeft = (period_cycle - currentDate) + last_period_date
    document.getElementById("day_left").innerHTML = "Aapki periods aane me " + dayLeft + " din baaki hai.!!";
   }
   else if(currentDate == period_cycle){
    document.getElementById("day_left").innerHTML = "Aapki periods aane me " + last_period_date + " din baaki hai.!!";
   }
   else if(last_period_date > currentDate){
    var dayleft = last_period_date - currentDate;
    document.getElementById("day_left").innerHTML = "Aapki periods aane me " + dayleft + " din baaki hai.!!";

   }
   else if(last_period_date == currentDate){
   document.getElementById("day_left").innerHTML = "Congratulations ....!!! Aapki periods aa chuki hai.";
   document.getElementById("day_left").style.backgroundImage = "url('img/pad2.gif')"; 
    snowStorm.snowColor = "#0a0a75";

   }
   else{
    window.alert("Please!!! fill this form to know your period date..");
    document.getElementById("day_left").style.border = '';
   }
   };

   snowStorm.snowColor = '#ec4949';   // blue-ish snow!?

   function clean(){
    document.getElementById("day_left").style.border = '';
    document.getElementById('last_period_date').value = '';
    document.getElementById('period_cycle').value = '';
    document.getElementById('day_left').innerHTML = '';

   }





