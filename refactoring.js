
function showDayAndTime() {


    var div = getDiv('dayAndTime');
    var div2 = getDiv('dayType');
    var dayNo = getIntValue('day');
    var hour = getIntValue('hour');
    var minute = getIntValue('minute');
    var dayName = getDayName(dayNo);
    var dayCategory = getDayCategory(dayNo);

    if (dayNo < 5) div2.innerHTML = checkHour(hour, 10, 17);
    if (dayNo == 5) div2.innerHTML = checkHour(hour, 10, 18);
    if (dayNo == 6) div2.innerHTML = checkHour(hour, 10, 14);
    if (dayNo == 7) div2.innerHTML = 'Stengt';

    div.innerHTML = 
    '<li>Dag: ' + day + '</li>' 
    + '<li>Time: ' + hour + '</li>' 
    + '<li>Minutter: ' + minute + '</li>'
    + '<li>Du har valgt: ' + dayCategory + '</li>';
}

function checkHour(hour, minHour, maxHour) {
    return hour > minHour && hour < maxHour ?  'Åpent' : 'Stengt'; 
}

function getDayCategory(dayNo) {
    if (dayNo < 5) return 'Mandag - Torsdag';
    if (dayNo == 5) return 'Fredag'; 
    if (dayNo == 6) return 'Lørdag';
    if (dayNo == 7) return 'Søndag';
    return '<Ukjent dagkategori>';
}

function getDayName(dayNo) {
    if (dayNo == 1) return 'Mandag';
    if (dayNo == 2) return 'Tirsdag';
    if (dayNo == 3) return 'Onsdag';
    if (dayNo == 4) return 'Torsdag';
    if (dayNo == 5) return 'Fredag';
    if (dayNo == 6) return 'Lørdag';
    if (dayNo == 7) return 'Søndag';
    return '<ukjent dag>';
}

function getIntValue(id) {
    return parseInt(getDiv(id).value);
}

function getDiv(id) {
    return document.getElementById(id);
}
