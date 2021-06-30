let hStart;
let hMedian;
let charMedian;
let writeZone;
let medianSpeedZone;
let generalSpeedZone;

function startApp() {
    writeZone = document.getElementById('writeZone');
    medianSpeedZone= document.getElementById('medianSpeed');
    generalSpeedZone= document.getElementById('generalSpeed');
    writeZone.addEventListener("focus",run);
}
function run() {
    hStart = Date.now();
    hMedian = hStart;
    charMedian = 0;
    flash(5);
}
function flash(frequency){
    setTimeout(maj, frequency*1000);
}
function maj(){
    let now = Date.now();
    let userCharIn = writeZone.value.length;
    let totalTime = now - hStart;
    let lastInput = now - hMedian;
    let lastCharIn = userCharIn - charMedian;
    let generalSpeed = parseInt(userCharIn/(totalTime/1000)*60);
    let medianSpeed = parseInt(lastCharIn/(lastInput/1000)*60);

    printSpeed(generalSpeedZone, generalSpeed);
    printSpeed(medianSpeedZone, medianSpeed);

    charMedian = userCharIn;
    hMedian = now;
    flash(5);
}
function printSpeed(zone, speed) {
    zone.innerText= speed;
    if(speed < 60){
        zone.className = "slow";
    }else if(speed < 120){
        zone.className = "medium";
    }else{
        zone.className = "fast";
    }
}
