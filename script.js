let subbimt = document.querySelector('.arrow a');

subbimt.addEventListener('click', () => {
  let hasError = false;

  let day = document.querySelector('#day');
  let month = document.querySelector('#month');
  let year = document.querySelector('#year');
  
  let dayVal = Number(day.value.trim());
  let monthVal = Number(month.value.trim());
  let yearVal = Number(year.value.trim());

  if (
    !day.value.trim() ||
    !Number.isInteger(dayVal) ||
    dayVal < 1 ||
    dayVal > 31
  ) {
    hasError = true;
    day.closest('.input-box').classList.add('error');
  }else{
    day.closest('.input-box').classList.remove('error');
  }

  if (
    !month.value.trim() ||
    !Number.isInteger(monthVal) ||
    monthVal < 1 ||
    monthVal > 12
  ) {
    hasError = true;
    month.closest('.input-box').classList.add('error');
  }else{
    month.closest('.input-box').classList.remove('error');
  }

  if (
    !year.value.trim() ||
    !Number.isInteger(yearVal) ||
    yearVal < 1900 ||
    yearVal > new Date().getFullYear()
  ) {
    hasError = true;
    year.closest('.input-box').classList.add('error');
  }else{
    year.closest('.input-box').classList.remove('error');
  }

  if (hasError) return;

  let birthDate = new Date(yearVal, monthVal - 1, dayVal);
  let today = new Date();

  let diffYears = today.getFullYear() - birthDate.getFullYear();
  let diffMonths = today.getMonth() - birthDate.getMonth();
  let diffDays = today.getDate() - birthDate.getDate();

  if (diffDays < 0) {
    diffMonths--;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    diffDays += prevMonth.getDate();
  }

  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  if (!hasError) {
    document.querySelector('.year span').innerHTML = diffYears;
    document.querySelector('.month span').innerHTML = diffMonths;
    document.querySelector('.day span').innerHTML = diffDays;
  }
});
