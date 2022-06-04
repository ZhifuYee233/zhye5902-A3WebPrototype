//Pomotimer
let timerInterval;//Periodic function called regularly
let relaxInterval;//Break Timer Call Periodic Function
let timerRunTime=0;//Seconds in total
let timerRunMinute;//min
let timerRunSecond;//sec
let timerCurrentTime=-1;//current time
let relaxCurrentTime=-1;//break time
function run(currentTime,seconds,dom) {

    let countdown = document.getElementById(dom);

    if (currentTime==-1){
        timerRunTime = seconds;//25分钟换算成1800秒
        timerInterval = setInterval(function () {
            timerRunTime = timerRunTime - 1;
            countdown.innerHTML = 'Times Up';
            if (timerRunTime <= 0){
                document.getElementById(dom).innerHTML = 'Times Up';
                clearInterval(timerInterval);
                return false;
            }
            timerRunMinute = parseInt(timerRunTime / 60);
            timerRunSecond = parseInt(timerRunTime % 60);
            countdown.innerHTML = timerRunMinute + ':' + timerRunSecond;
            timerCurrentTime=timerRunTime;
        }, 1000);
    }else {
        timerInterval = setInterval(function () {
            currentTime = currentTime - 1;
            countdown.innerHTML = 'Times Up';

            if (currentTime <= 0){
                document.getElementById(dom).innerHTML = 'Times Up';
                clearInterval(timerInterval);
                return false;
            }
            timerRunMinute = parseInt(currentTime / 60);
            timerRunSecond = parseInt(currentTime % 60);
            countdown.innerHTML = timerRunMinute + ':' + timerRunSecond;
            timerCurrentTime=currentTime;
        }, 1000);
    }
}

let timerRunDisplay=false;//开始计时暂停计时
function timerRun() {
    if (!timerRunDisplay){
        $("#timerPlay").html("<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>")
        run(timerCurrentTime,1500,'timer');
        console.log(timerCurrentTime)
        timerRunDisplay=true;
    }else {
        $("#timerPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
         clearInterval(timerInterval);
        console.log(timerCurrentTime)
        timerRunDisplay=false;
    }
}

function timerReload(){
    clearInterval(timerInterval);
    $("#timerPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
    timerCurrentTime=-1;
    timerRunDisplay=false;
    $("#timer").html("25:00");
}

function toRelax() {
    if (confirm("relax 5 minutes?")){
        timerCurrentTime=-1;
        $("#timer").html("25:00");
        clearInterval(timerInterval);
        timerRunDisplay=false;
        $("#timerPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
        $(".timer-block").css("visibility","hidden");
        $(".timer-block").css("z-index",-1);
        $(".timer-block-relax").css("z-index",2);
    }

}

function toTaskTime() {
    if (confirm("Back to timer?")){
        $(".timer-block").css("z-index",10);
        $(".timer-block").css("visibility","visible");
        $(".timer-block-relax").css("z-index",-1);
        relaxRunDisplay=false;
        clearInterval(relaxInterval);
        relaxCurrentTime=-1;
        $("#relax").html("5:00");
        $("#relaxPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
    }

}


function runRelax(currentTime,seconds,dom) {

    let down = document.getElementById(dom);

    if (currentTime==-1){
        timerRunTime = seconds;//25分钟换算成1800秒
        relaxInterval = setInterval(function () {
            timerRunTime = timerRunTime - 1;
            down.innerHTML = 'Times Up';
            if (timerRunTime <= 0){
                document.getElementById(dom).innerHTML = 'Times Up';
                clearInterval(relaxInterval);
                return false;
            }
            timerRunMinute = parseInt(timerRunTime / 60);
            timerRunSecond = parseInt(timerRunTime % 60);
            down.innerHTML = timerRunMinute + ':' + timerRunSecond;
            relaxCurrentTime=timerRunTime;
        }, 1000);
    }else {
        relaxInterval = setInterval(function () {
            currentTime = currentTime - 1;
            down.innerHTML = 'Times Up';

            if (currentTime <= 0){
                document.getElementById(dom).innerHTML = 'Times Up';
                clearInterval(relaxInterval);
                return false;
            }
            timerRunMinute = parseInt(currentTime / 60);
            timerRunSecond = parseInt(currentTime % 60);
            down.innerHTML = timerRunMinute + ':' + timerRunSecond;
            relaxCurrentTime=currentTime;
        }, 1000);
    }
}


let relaxRunDisplay=false;//开始计时暂停计时
function relaxRun() {
    if (!relaxRunDisplay){
        $("#relaxPlay").html("<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>")
        runRelax(relaxCurrentTime,300,'relax');
        relaxRunDisplay=true;
    }else {
        $("#relaxPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
        clearInterval(relaxInterval);
        relaxRunDisplay=false;
    }
}

function relaxReload(){
    clearInterval(relaxInterval);
    $("#relaxPlay").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>")
    relaxCurrentTime=-1;
    relaxRunDisplay=false;
    $("#relax").html("5:00");
}
