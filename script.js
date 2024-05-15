const datePickerInput = document.getElementById('datepickerInput');
const calendar = document.getElementById('calendar');
const monthSelector = document.getElementById('monthSelector');
const yearSelector = document.getElementById('yearSelector');
let selectedDate;

function createCalendar(elem, year, month) {

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr><tr>';

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td onclick="selectDate(' + d.getDate() + ', ' + (mon + 1) + ', ' + year + ')">' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

// Створення календаря за вибраним місяцем та роком
function changeCalendar() {
  const month = parseInt(monthSelector.value);
  const year = parseInt(yearSelector.value);
  createCalendar(calendar, year, month);
}

// Вибір дати
function selectDate(day, month, year) {
  selectedDate = {
    day,
    month,
    year
  };
  datePickerInput.value = `${day}-${month}-${year}`;
}

// Скасування вибору дати
function cancelDateSelection() {
  selectedDate = null;
  datePickerInput.value = '';
}

createCalendar(calendar, 2024, 5); // Початковий календар для поточного місяця та року

