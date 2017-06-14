let blockId = "welcomediv";


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
    $('#' + blockId).fadeOut('fast');
    $('#tododiv').fadeIn('fast');
    blockId = $('#tododiv').attr('id');
});

$('#alarm').click(function(){
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

$('#day1').html( tableGenerator(sheldule[0]) );
$('#day2').html( tableGenerator(sheldule[1]) );
$('#day3').html( tableGenerator(sheldule[2]) );
$('#day4').html( tableGenerator(sheldule[3]) );
$('#day5').html( tableGenerator(sheldule[4]) );

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


//$('#tododiv').html($('#tododiv').html()+ );

 //$('#tododiv').html( $('#tododiv').html()+"<div class='todotask'><strong>Завдання5</strong><br>Lorem ipsum dolor sit amet.</div>");

 var zavd=0;
$('#todoaddtaskdiv').click(function(){
    console.log("hjj")
    zavd++;
    $('#tododivbody').html( $('#tododivbody').html()+"<div class='todotask'><strong>Завдання"+zavd+"</strong><br>Lorem ipsum dolor sit amet.</div>");
});

/*document.onmousewheel = function (e) {
  e.preventDefault();
}*/


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