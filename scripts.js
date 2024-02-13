let hour = 0;
let min = 0;
let second = 0;
let count = 0;
let lap=0;
let lap_hr = 0;
let lap_min = 0;
let lap_sec = 0;
let lap_ms = 0;
let timer;

function starts(){
    timer = true;
    document.getElementById("laps-data").style.visibility = "visible";  document.getElementById("resets").disabled = true;
    document.getElementById("laps").disabled = false;
    stopWatch();
}

function stops() {
    timer = false;
    document.getElementById("resets").disabled = false;
    document.getElementById("laps").disabled = true;
}

 function resets(){
    timer = false;
    hour = 0;
    min = 0;
    second = 0;
    count = 0;
    lap = 0;
    document.getElementById("laps-data").style.visibility = "hidden";
    document.getElementById('lap-list').innerHTML = '';
    document.getElementById('h10').innerHTML = '0';
    document.getElementById('h1').innerHTML = '0';
    document.getElementById('m10').innerHTML = '0';
    document.getElementById('m1').innerHTML = '0';
    document.getElementById('s10').innerHTML = '0';
    document.getElementById('s1').innerHTML = '0';
    document.getElementById('ms100').innerHTML = '0';
    document.getElementById('ms10').innerHTML = '0';
 }

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            min++;
            second = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
            second = 0;
        }
        let h10 = Math.floor(hour/10);
        let h1 = hour%10;
        let m10 = Math.floor(min/10);
        let m1 = min%10;
        let s10 = Math.floor(second/10);
        let s1 = second%10;
        let ms100 =  Math.floor(count/10);
        let ms10 = count%10;
        document.getElementById('h10').innerHTML = h10;
        document.getElementById('h1').innerHTML = h1;
        document.getElementById('m10').innerHTML = m10;
        document.getElementById('m1').innerHTML = m1;
        document.getElementById('s10').innerHTML = s10;
        document.getElementById('s1').innerHTML = s1;
        document.getElementById('ms100').innerHTML = ms100;
        document.getElementById('ms10').innerHTML = ms10;
        setTimeout(stopWatch, 9.25);
    }
}

function laps(){
let cur_count = count;
let cur_second = second;
let cur_min = min;
let cur_hour = hour;
let cur_time=cur_hour + ":" + cur_min + ":" + cur_second + ":" + cur_count;
let lap_hr_diff = cur_hour - lap_hr;
let lap_min_diff = cur_min - lap_min;
let lap_sec_diff = cur_second - lap_sec;
let lap_ms_diff = cur_count - lap_ms;

if (lap_ms_diff < 0) {
    lap_ms_diff += 100;
    lap_sec_diff--; 
}
if (lap_sec_diff < 0) {
    lap_sec_diff += 60;
    lap_min_diff--; 
}
if (lap_min_diff < 0) {
    lap_min_diff += 60;
    lap_hr_diff--; 
}
let lap_time = lap_hr_diff + ":" + lap_min_diff + ":" + lap_sec_diff + ":" + lap_ms_diff;
lap_hr = cur_hour;
lap_min = cur_min;
lap_sec = cur_second;
lap_ms = cur_count;
if(lap==0){
    lap_time=cur_time;
}
lap++;  
document.getElementById('lap-list').innerHTML = lap + '       ' + lap_time + '        ' + cur_time + '\n' +document.getElementById('lap-list').innerHTML;
}

function ToggleTheme() {
    var body = document.querySelector('body');
    var theme = document.getElementById("theme");
    var logo = document.getElementById("logo");
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        theme.classList.remove('fa-sun');
        theme.classList.add('fa-moon');
        logo.src = 'img/logo-light.png';
    } else {
        body.classList.add('night');
        theme.classList.remove('fa-moon');
        theme.classList.add('fa-sun');
        logo.src = 'img/logo-night.png';
        }
}
