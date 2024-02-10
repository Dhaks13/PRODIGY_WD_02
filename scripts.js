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
    document.getElementById("resets").disabled = true;
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
    document.getElementById('h10').innerHTML = '0';
    document.getElementById('h1').innerHTML = '0';
    document.getElementById('m10').innerHTML = '0';
    document.getElementById('m1').innerHTML = '0';
    document.getElementById('s10').innerHTML = '0';
    document.getElementById('s1').innerHTML = '0';
    document.getElementById('ms100').innerHTML = '0';
    document.getElementById('ms10').innerHTML = '0';
    document.removeChild()
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
/*
function laps(){
    cur_time = hour + ":" + min + ":" + second +  ":" + count;
    lap_time = (hour-lap_hr) + ":" + (min-lap_min) + ":" + (second-lap_sec) + ":" + (second-lap_sec);
    lap_hr = hour;
    lap_min = min;
    lap_sec = second;
    lap_ms = count;
    lap++;
    const table_row = document.createElement('tr');
    const table_elemet1 = document.createElement('td'); 
    const table_elemet2 = document.createElement('td');
    const table_elemet3 = document.createElement('td');
    table_elemet1.innerHTML = `${lap}`;
    table_elemet2.innerHTML = `${lap_time}`;
    table_elemet3.innerHTML = `${cur_time}`;

}
*/
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
