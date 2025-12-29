// Получаем DOM-элементы для отображения даты
const dayOdWeekEl = document.querySelector('.date-day'); // день недели
const dateOfMonthsEl = document.querySelector('.date'); // число месяца
const monthEl = document.querySelector('.date-month'); // месяц
const yearEl = document.querySelector('.date-year'); // год
const clock = document.querySelector('.digital-clock-js'); // цифровые часы

// Массив месяцев (индексы совпадают с getMonth(): 0–11)
const monthArr = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

// Массив дней недели (getDay(): 0 — воскресенье, 6 — суббота)
const weekDaysArr = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

// Обновляем дату и время каждую секунду
setInterval(() => {
  // Создаём объект текущей даты и времени
  const currentDate = new Date();

  // Получаем день недели (число 0–6) и используем как индекс массива
  const dayOfWeek = weekDaysArr[currentDate.getDay()];

  // Получаем число месяца (1–31)
  const dateOfMonths = currentDate.getDate();

  // Получаем месяц (0–11) и используем как индекс массива
  const month = monthArr[currentDate.getMonth()];

  // Получаем год (например, 2025)
  const year = currentDate.getFullYear();

  // Получаем текущее время
  const currentHours = currentDate.getHours(); // часы (0–23)
  const currentMinutes = currentDate.getMinutes(); // минуты (0–59)
  const currentSeconds = currentDate.getSeconds(); // секунды (0–59)

  // Вставляем дату в DOM
  dayOdWeekEl.textContent = dayOfWeek;
  dateOfMonthsEl.textContent = dateOfMonths;
  monthEl.textContent = month;
  yearEl.textContent = year;

  // Формируем строку времени HH : MM : SS
  // padStart(2, '0') — добавляет ведущий ноль, если число однозначное
  const formatTime = `${currentHours
    .toString()
    .padStart(2, '0')} : ${currentMinutes
    .toString()
    .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

  // Отображаем цифровое время
  clock.textContent = `Текущее время: ${formatTime}`;

  // ===== МЕХАНИЧЕСКИЕ ЧАСЫ =====

  // 360° / 60 секунд = 6° на каждую секунду
  const changeSecond = (360 / 60) * currentSeconds;

  // 360° / 60 минут = 6° на каждую минуту
  const changeMinutes = (360 / 60) * currentMinutes;

  // 360° / 12 часов = 30° на каждый час
  // + добавляем смещение от минут, чтобы стрелка двигалась плавно
  const changeHours =
    (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

  // Получаем стрелки часов
  const arrowSeconds = document.querySelector('.clock-seconds__arrow');
  const arrowMinutes = document.querySelector('.clock-minutes__arrow');
  const arrowHours = document.querySelector('.clock-hours__arrow');

  // Поворачиваем стрелки через CSS transform
  arrowSeconds.style.transform = `rotate(${changeSecond}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);

// РЕКЛАМА

const box = document.querySelector('.js-box');
const titleTimer = document.querySelector('.js-timer');
let counter = 11;
setTimeout(() => {
  box.style.display = 'block';

  const id = setInterval(() => {
    counter -= 1;
    titleTimer.textContent = counter;

    if (counter === 0) {
      clearInterval(id);

      // !Добавляем вместо цыфр после окончания работы таймера - Х и при нажатии на него закрываем рекламу
      // titleTimer.textContent = 'X';
      // titleTimer.addEventListener('click', onClick);
      box.style.display = 'none';
    }
  }, 1000);
}, 5000);

// !Для закрытия через нажатие -Х
// function onClick() {
//   box.style.display = 'none';
// }
