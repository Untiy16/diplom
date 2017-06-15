$(document).ready(function() {
    var contentHeight = $("html").height() -  $("#mainmenu").height();
    console.log("stage1");
    $(".testt").css({
        height: contentHeight + 'px'
    });
    console.log("stage2");
$('#alarmdivbody').empty()
    alarmlist = JSON.parse(localStorage.getItem("alarmliststored"));
     $('#alarmdivbody').html(alarmlist);
     alarmtimeparse();
     console.log("stage5");


});
    var sheldule = [];
     sheldule[0]={
        "day":"Понеділок",
        "lesson1": "Економетрія",
        "lesson2": "Теорія копіляції",
        "lesson3": "Корпоративні системи",
        "lesson4": "Програмування",
        "lesson5": "—"
    };

     sheldule[1]={
        "day":"Вівторок",
        "lesson1": "Інт. аналіз даних",
        "lesson2": "ППП в економіці",
        "lesson3": "—",
        "lesson4": "—",
        "lesson5": "—"
    };

     sheldule[2]={
        "day":"Середа",
        "lesson1": "—",
        "lesson2": "Економетрія",
        "lesson3": "Корпоративні системи",
        "lesson4": "Охорона праці",
        "lesson5": "—"
    };

     sheldule[3]={
        "day":"Четвер",
        "lesson1": "—",
        "lesson2": "Бази даних",
        "lesson3": "Теорія копіляції",
        "lesson4": "Теорія програмування",
        "lesson5": "—"
    };

     sheldule[4]={
        "day":"П'ятниця",
        "lesson1": "—",
        "lesson2": "Бази даних",
        "lesson3": "Нечітке моделювання",
        "lesson4": "Охорона праці",
        "lesson5": "—"
    };

    var shelduletime = [];
    shelduletime[0]={
            "start": "8:00",
            "finish": "9:20"
        } 
        shelduletime[1]={
            "start": "9:40",
            "finish": "11:00"
        } 
        shelduletime[2]={
            "start": "11:10",
            "finish": "12:30"
        } 
        shelduletime[3]={
            "start": "12:40",
            "finish": "14:00"
        } 
        shelduletime[4]={
            "start": "14:20",
            "finish": "15:40"
        }

//localStorage.setItem("sheldulestored", JSON.stringify(sheldule));
//localStorage.setItem("shelduletimestored", JSON.stringify(shelduletime));
     //console.log()
    console.log("stage3");

    if(JSON.parse(localStorage.getItem("shelduletimestored"))==null){
        
        shelduletime[0]={
            "start": "",
            "finish": ""
        } 
        shelduletime[1]={
            "start": "",
            "finish": ""
        } 
        shelduletime[2]={
            "start": "",
            "finish": ""
        } 
        shelduletime[3]={
            "start": "",
            "finish": ""
        } 
        shelduletime[4]={
            "start": "",
            "finish": ""
        }
        console.log("stage4.1");
    }
    else{
        shelduletime = JSON.parse(localStorage.getItem("shelduletimestored"));
            $('#startless1').text(shelduletime[0].start);
            $('#finless1').text(shelduletime[0].finish);

            $('#startless2').text( shelduletime[1].start);
            $('#finless2').text(shelduletime[1].finish);

            $('#startless3').text(shelduletime[2].start);
            $('#finless3').text(shelduletime[2].finish);

            $('#startless4').text(shelduletime[3].start);
            $('#finless4').text(shelduletime[3].finish);

            $('#startless5').text(shelduletime[4].start);
            $('#finless5').text(shelduletime[4].finish);
            console.log("stage4.2");
    }



    if(JSON.parse(localStorage.getItem("sheldulestored"))==null){
        
        sheldule[0]={
        "day":"Понеділок",
        "lesson1": "",
        "lesson2": "",
        "lesson3": "",
        "lesson4": "",
        "lesson5": ""
    };

    sheldule[1]={
        "day":"Вівторок",
        "lesson1": "",
        "lesson2": "",
        "lesson3": "—",
        "lesson4": "—",
        "lesson5": "—"
    };

     sheldule[2]={
        "day":"Середа",
        "lesson1": "—",
        "lesson2": "",
        "lesson3": "",
        "lesson4": "",
        "lesson5": ""
    };

     sheldule[3]={
        "day":"Четвер",
        "lesson1": "",
        "lesson2": "",
        "lesson3": "",
        "lesson4": "",
        "lesson5": ""
    };

     sheldule[4]={
        "day":"П'ятниця",
        "lesson1": "",
        "lesson2": "",
        "lesson3": "",
        "lesson4": "",
        "lesson5": ""
    };

    }
    else{
        sheldule = JSON.parse(localStorage.getItem("sheldulestored"));
            $('#day1less1').text(sheldule[0].lesson1);
            $('#day1less2').text(sheldule[0].lesson2);
            $('#day1less3').text(sheldule[0].lesson3);
            $('#day1less4').text(sheldule[0].lesson4);
            $('#day1less5').text(sheldule[0].lesson5);
            
            $('#day2less1').text(sheldule[1].lesson1);
            $('#day2less2').text(sheldule[1].lesson2);
            $('#day2less3').text(sheldule[1].lesson3);
            $('#day2less4').text(sheldule[1].lesson4);
            $('#day2less5').text(sheldule[1].lesson5);
            
            $('#day3less1').text(sheldule[2].lesson1);
            $('#day3less2').text(sheldule[2].lesson2);
            $('#day3less3').text(sheldule[2].lesson3);
            $('#day3less4').text(sheldule[2].lesson4);
            $('#day3less5').text(sheldule[2].lesson5);
            
            $('#day4less1').text(sheldule[3].lesson1);
            $('#day4less2').text(sheldule[3].lesson2);
            $('#day4less3').text(sheldule[3].lesson3);
            $('#day4less4').text(sheldule[3].lesson4);
            $('#day4less5').text(sheldule[3].lesson5);
            
            $('#day5less1').text(sheldule[4].lesson1);
            $('#day5less2').text(sheldule[4].lesson2);
            $('#day5less3').text(sheldule[4].lesson3);
            $('#day5less4').text(sheldule[4].lesson4);
            $('#day5less5').text(sheldule[4].lesson5);

            
            console.log("stage4.2");


    }


