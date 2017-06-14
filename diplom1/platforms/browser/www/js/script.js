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


$('#tododiv').html($('#tododiv').html()+ "<div class='todotask'><strong>Дописати диплом</strong><br>Lorem ipsum dolor sit amet.</div>"+
    "<div class='todotask'><strong>Лаб. роб. №4</strong><br>Lorem ipsum dolor sit amet.</div>"+
    "<div class='todotask'><strong>Погодувати кота</strong><br>Lorem ipsum dolor sit amet.</div>"+
    "<div class='todotask'><strong>Закінчити статтю</strong><br>Lorem ipsum dolor sit amet.</div>");

 $('#tododiv').html( $('#tododiv').html()+"<div class='todotask'><strong>Завдання5</strong><br>Lorem ipsum dolor sit amet.</div>");

 let zavd=5;
$('#knopka01add').click(function(){
    console.log("hjj")
    zavd++;
    $('#tododiv').html( $('#tododiv').html()+"<div class='todotask'><strong>Завдання"+zavd+"</strong><br>Lorem ipsum dolor sit amet.</div>");
});

