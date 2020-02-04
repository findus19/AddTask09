const week = ["Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
const arrayMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let time = new Date(),
d = time.getDay() - 1,
weekday = week[d],
day = time.getDate(),
monthTime = time.getMonth(),
month = arrayMonth[monthTime],
year = time.getFullYear(),
hours = time.getHours(),
minutes = time.getMinutes(),
seconds = time.getSeconds();

const hour = function(n){
  console.log(n % 100);
  if(n === 1 || (n > 19 && n % 10 === 1)){
    return "час"
  } else if (((n > 1 && n < 5) || (n > 19 && n % 10 > 1 && n % 10 < 5))){
    return "часа"
  } else{
    return "часов"
  }
};

const minuteAndSecond = function(n){
  console.log(n % 100);
  if(n === 1 || (n > 19 && n % 10 === 1)){
    return "а"
  } else if (((n > 1 && n < 5) || (n > 19 && n % 10 > 1 && n % 10 < 5))){
    return "ы"
  } else{
    return ""
  }
};

document.getElementById('timeA').innerHTML = 'Сегодня ' + weekday + ', ' + day + ' ' + month + ' ' + year 
  + ' года, '+ hours + ' ' + hour(hours) + ' ' + minutes + ' минут' + minuteAndSecond(minutes) + ' ' + seconds + ' секунд' +minuteAndSecond(seconds);

function zero(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
};

function dateTime()
{
  let currentDatetime = new Date();
  day = zero(currentDatetime.getDate()),
  month = zero(currentDatetime.getMonth()+1),
  year = currentDatetime.getFullYear(),
  hours = zero(currentDatetime.getHours()),
  minutes = zero(currentDatetime.getMinutes()),
  seconds = zero(currentDatetime.getSeconds());

  return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

document.getElementById('timeB').innerHTML = dateTime();

setInterval(function () {
  document.getElementById('timeC').innerHTML = dateTime();
}, 1000);