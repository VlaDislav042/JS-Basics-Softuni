function data(input) {
    let daysOff = Number(input[0]);

    let daysOffMin = daysOff * 127;
    let daysOnMin = (365 - daysOff) * 63;
    let allDaysMin = daysOffMin + daysOnMin;

    let diff = Math.abs(30000 - allDaysMin);
    let diffHours = Math.floor(diff / 60);
    let diffMins = diff % 60;

    if (allDaysMin < 30000) {
        console.log('Tom sleeps well');
        console.log(`${diffHours} hours and ${diffMins} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${diffHours} hours and ${diffMins} minutes more for play`);
    }
}
data(['113'])


