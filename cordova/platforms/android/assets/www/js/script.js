let blockId = "welcomediv";
 var zavd=0;
var tasklist;

var alarmlist;
var alarmcount=0;
var timearray=[];


$('#rozklad').click(function(){
    $('#' + blockId).fadeOut('fast');
    $('#rozkladdiv').fadeIn('fast');
    blockId = $('#rozkladdiv').attr('id');
    
});

$('#chas').click(function(){
    $('#' + blockId).fadeOut('fast');
    $('#chasdiv').fadeIn('fast');
    blockId = $('#chasdiv').attr('id');
    
});

$('#todo').click(function(){
    $('#tododivbody').empty()
    tasklist = JSON.parse(localStorage.getItem("taskliststored"));
     $('#tododivbody').html(tasklist)
    $('#' + blockId).fadeOut('fast');
    $('#tododiv').fadeIn('fast');
    blockId = $('#tododiv').attr('id');
    
});

$('#alarm').click(function(){
    $('#alarmdivbody').empty()
    alarmlist = JSON.parse(localStorage.getItem("alarmliststored"));
     $('#alarmdivbody').html(alarmlist);
    $('#' + blockId).fadeOut('fast');
    $('#alarmdiv').fadeIn('fast');
    blockId = $('#alarmdiv').attr('id');
    
});

function tableGenerator(x) {
   return "<table id='sheltable'>"+
    "<tr>"+
    "<td class=\"day\" colspan=\"2\">"+x.day+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Пара 1:</td>"+
    "<td width=\"180px\">"+x.lesson1+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Пара 2:</td>"+
    "<td width=\"180px\">"+x.lesson2+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Пара 3:</td>"+
    "<td width=\"180px\">"+x.lesson3+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Пара 4:</td>"+
    "<td width=\"180px\">"+x.lesson4+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Пара 5:</td>"+
    "<td width=\"180px\">"+x.lesson5+"</td>"+
    "</tr>"+
    "</table>"
}

//$('#day1').html( tableGenerator(sheldule[0]) );
//$('#day2').html( tableGenerator(sheldule[1]) );
//$('#day3').html( tableGenerator(sheldule[2]) );
//$('#day4').html( tableGenerator(sheldule[3]) );
//$('#day5').html( tableGenerator(sheldule[4]) );

let rozkId = 1;

$('#rozkleft').click(function(){
    $('#day' + rozkId).fadeOut('fast');
    rozkId++;
    if(rozkId==6) {rozkId=1;}
    $('#day' + rozkId).fadeIn('fast');
});

$('#rozkright').click(function(){
    $('#day' + rozkId).fadeOut('fast');
    rozkId--;
    if(rozkId==0) {rozkId=5;}
    $('#day' + rozkId).fadeIn('fast');
});



var todotaskarr=[];
var tasklist;
 var zavd=0;
/*$('#todoaddtaskdiv').click(function(){
    console.log("hjj")
    zavd++;
    $('#tododivbody').html( $('#tododivbody').html()+"<div ondblclick=\"rmdiv(id)\" contenteditable=\"true\" class='todotaskcl' id=\"todotask"+zavd+"\""+" ><strong>Завдання"+zavd+"</strong><br>Lorem ipsum dolor sit amet.</div>");
});*/

$('#todoaddtaskdiv').click(function(){
    console.log("hjj")
    zavd++;
    $('#tododivbody').html( $('#tododivbody').html()+"<div ondblclick=\"rmdiv(id)\" contenteditable=\"true\" class='todotaskcl' id=\"todotask"+zavd+"\""+" ><strong>Нове завдання"+"</strong><br>Опис</div>");
    
});

$('#todosavetaskdiv').click(function(){
    
    tasklist=$('#tododivbody').html();
    localStorage.setItem("taskliststored", JSON.stringify(tasklist));
    console.log("saved")    
    

});

function timeq(){
    var d = new Date();
    d.setMinutes(d.getMinutes() - 1);
    var k=d.toString();
    k=k.substr(16,5);
    return k;
}

function rmdiv(id){
    console.log(id);   
    $('#'+id).remove();
}




var storedNames = JSON.parse(localStorage.getItem("names"));

$('#sheltimesave').click(function(){
    console.log("saving shelduletime");
    shelduletime[0].start=$('#startless1').text();
    shelduletime[0].finish=$('#finless1').text();

    shelduletime[1].start=$('#startless2').text();
    shelduletime[1].finish=$('#finless2').text();

    shelduletime[2].start=$('#startless3').text();
    shelduletime[2].finish=$('#finless3').text();

    shelduletime[3].start=$('#startless4').text();
    shelduletime[3].finish=$('#finless4').text();

    shelduletime[4].start=$('#startless5').text();
    shelduletime[4].finish=$('#finless5').text();

    console.log("shelduletime saved");
    console.log("first  lesson time start");
    console.log(shelduletime[0].start);
    localStorage.setItem("shelduletimestored", JSON.stringify(shelduletime));

});

$('#shelsave').click(function(){
    console.log("saving sheldule");
    sheldule[0].lesson1=$('#day1less1').text();
    sheldule[0].lesson2=$('#day1less2').text();
    sheldule[0].lesson3=$('#day1less3').text();
    sheldule[0].lesson4=$('#day1less4').text();
    sheldule[0].lesson5=$('#day1less5').text();
    
    sheldule[1].lesson1=$('#day2less1').text();
    sheldule[1].lesson2=$('#day2less2').text();
    sheldule[1].lesson3=$('#day2less3').text();
    sheldule[1].lesson4=$('#day2less4').text();
    sheldule[1].lesson5=$('#day2less5').text();
    
    sheldule[2].lesson1=$('#day3less1').text();
    sheldule[2].lesson2=$('#day3less2').text();
    sheldule[2].lesson3=$('#day3less3').text();
    sheldule[2].lesson4=$('#day3less4').text();
    sheldule[2].lesson5=$('#day3less5').text();
    
    sheldule[3].lesson1=$('#day4less1').text();
    sheldule[3].lesson2=$('#day4less2').text();
    sheldule[3].lesson3=$('#day4less3').text();
    sheldule[3].lesson4=$('#day4less4').text();
    sheldule[3].lesson5=$('#day4less5').text();
    
    sheldule[4].lesson1=$('#day5less1').text();
    sheldule[4].lesson2=$('#day5less2').text();
    sheldule[4].lesson3=$('#day5less3').text();
    sheldule[4].lesson4=$('#day5less4').text();
    sheldule[4].lesson5=$('#day5less5').text();
    
    localStorage.setItem("sheldulestored", JSON.stringify(sheldule));
    /*console.log("shelduletime saved");
    console.log("first  lesson time start");
    console.log(shelduletime[0].start);
    l*/

});
$('#alarmadddiv').click(function(){
    console.log("hjj")
    alarmcount++;
    $('#alarmdivbody').html( $('#alarmdivbody').html()+"<div ondblclick=\"rmdiv(id)\" contenteditable=\"true\" class='todotaskcl' id=\"todotask"+alarmcount+"\""+" ><strong>Будильник"+"</strong><br><p class=\"timetext\">"+timeq()+"</p></div>");
    
});

$('#alarmsavediv').click(function(){
    
    alarmlist=$('#alarmdivbody').html();
    localStorage.setItem("alarmliststored", JSON.stringify(alarmlist));
    console.log("saved")
    alarmtimeparse();    
    

});


function rmdiv(id){
    console.log(id);   
    $('#'+id).remove();
}


function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

//beep();




function alarmtimeparse() {
   
   timearray=alarmlist.split("</p>");
   for (var i = 0; i < timearray.length -1; i++) {
       console.log(timearray[i])
   }
   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
   for (var i = 0; i < timearray.length -1; i++) {
           timearray[i]= timearray[i].substr(timearray[i].length-5, 5)  ;
       console.log(timearray[i])
   }
}

//alarmtimeparse();
function alarmcheck() {
    
    for (var i = 0; i < timearray.length -1; i++) {
        console.log(timearray[i])
        console.log(Date().substr(16,5));
        if (Date().substr(16,5)==timearray[i]) {
            beep();
            $('#' + blockId).fadeOut('fast');
            $('#alarmoffdiv').fadeIn('fast');           

        }
        else{
            $('#alarmoffdiv').fadeOut('fast');
            $('#' + blockId).fadeIn('fast');            
        }
   }
}

setInterval("alarmcheck()", 1000);

function alarmoff() {
   
     timearray.length=0;timearray.length=0;timearray.length=0;timearray.length=0;timearray.length=0;
     setTimeout('$(\'#alarmsavediv\').click()', 60000);
}



$('#alarmoffdivbut').click(function(){

$('#alarmoffdiv').fadeOut('fast');
$('#' + blockId).fadeIn('fast');
alarmoff();

});

