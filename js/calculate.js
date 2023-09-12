import {
   ageChart
} from "./chartinitilization.js";
import { startClock } from "./clock.js";
import closePopup from './closepopup.js';
import {
   daysOfWeek,
   monthNames
} from "./day_month_names.js";
import elements from "./selector.js";
   elements.get('date').addEventListener("keydown", function (event) {
   if (event.keyCode === 13) {
   event.preventDefault();
   elements.get('month').focus();
   }
   });
   elements.get('month').addEventListener("keydown", function (event) {
   if (event.keyCode === 13) {
   event.preventDefault();
   elements.get('year').focus();
   }
   });
   const calculateAge = document.getElementById("form");
   const submit__ = document.querySelector("#submit___");
   calculateAge.addEventListener("submit", function (event) {
   event.preventDefault();
   let year,
   month,
   day = null;
   const currentDate = new Date();
   const dateOfBirth = new Date(
   `${elements.get('month').value.toString()}-${elements.get('date').value.toString()}-${elements.get('year').value.toString()}`
   );
   if(elements.get('year').value > currentDate.getFullYear()){
   alert('Date of birth needs to be earlier than the age at date.')
   }else{
   if (
   elements.get('year').value > 999 &&
   elements.get('month').value < 13 &&
   elements.get('date').value < 32 &&
   elements.get('year').value != null &&
   elements.get('month').value != null &&
   elements.get('date').value != null
   ) {
   if (!isNaN(dateOfBirth.getTime())) {
   // subtracting the current year from the birth year
   year = currentDate.getFullYear() - dateOfBirth.getFullYear();
   // subtracting the current month from the birth month
   month = currentDate.getMonth() - dateOfBirth.getMonth();
   // subtracting the current day from the birth day
   day = currentDate.getDate() - dateOfBirth.getDate();
   // checking if the current day is less than the birth day
   if (day < 0) {
   // if the current day is less than the birth day we should decrese the month for because current birth day is not the same as the current day
   month--;
   // get the prev month last days and subtract the current day from it.
   day += new Date(
   currentDate.getFullYear(),
   currentDate.getMonth(),
   0
   ).getDate();
   }
   if (month < 0) {
   // if the current month is less than the birth month we should decrement the year for because brith month has not come.
   year--;
   month += 12;
   }
   startClock();
   printResultToDom(year, month, day, dateOfBirth, currentDate);
   elements.get('date').value = "";
   elements.get('month').value = "";
   elements.get('year').value = "";
   closePopup(elements.get("result_container__"),elements.get('result_box'), elements.get('close__popup'), elements.get('submit___'));
   elements.get('submit___').disabled = true;
   elements.get('result_container__').classList.add('showToggle');
   if (elements.get('result_box').classList.contains('animate__bounceOutLeft')) {
   elements.get('result_box').classList.remove("animate__bounceOutLeft");
   }
   elements.get('result_box').classList.add("animate__bounceInLeft");
   } else {
   alert("Invalid input. Please enter a valid birth date.");
   }
   } else {
   alert("please enter a value");
   }
   }
   });
   //print results
   function printResultToDom(y, m, d, birthDate, currentDate) {
   bornOn(birthDate, y, m, d);
   ageOn(currentDate);
   ageInDiffferentUnits(y, m, d);
   }
   // born on age
   function bornOn(b, y, m, d) {
   elements.get("age____").textContent = y;
   elements.get('months___').textContent = m;
   elements.get('days____').textContent = d;
   elements.get("birth__day__").textContent = daysOfWeek[b.getDay()];
   elements.get("birth_month___").textContent = monthNames[b.getMonth()];
   elements.get("birth_date_in_number").textContent = b.getMonth() + 1;
   elements.get("birth_year_in_number").textContent = b.getFullYear();
   }
   // age on now
   function ageOn(c) {
   elements.get("age_day__").textContent = daysOfWeek[c.getDay()];
   elements.get("age_month___").textContent = monthNames[c.getMonth()];
   elements.get("age_date_in_number").textContent = c.getMonth() + 1;
   elements.get("age_year_in_number").textContent = c.getFullYear();
   }
   // age in different units
   function ageInDiffferentUnits(y, m, d) {
   elements.get("years_value").textContent = y;
   elements.get("months_value_1").textContent = m;
   elements.get("day_value_1").textContent = d;
   elements.get("months_value_2").textContent = y * 12 + m;
   elements.get("day_value_2").textContent = d;
   const {
   weeks,
   days,
   hours,
   mintues,
   seconds
   } = calculateWeeksFromAge(
   y,
   m,
   d
   );
   elements.get("weeks_value").textContent = weeks;
   elements.get("day_value_5").textContent = days.toLocaleString();
   elements.get("hours_value").textContent = hours.toLocaleString();
   elements.get("minutes__value").textContent = mintues.toLocaleString();
   elements.get("seconds_value").textContent = seconds.toLocaleString();
   ageChart(y, (y * 12 + m), weeks, days, hours);
   }
   // calculate weeks from age day
   function calculateWeeksFromAge(ageYear, ageMonths, ageDays) {
   const daysInAWeek = 7;
   const mintuesPerHour = 60;
   const secondsPerMinute = 60;
   const days = ageYear * 365 + ageMonths * 30 + ageDays;
   // h.textContent = ageYears * 24;
   const weeks = Math.floor(days / daysInAWeek);
   const hours = days * 24;
   const mintues = hours * mintuesPerHour;
   const seconds = mintues * secondsPerMinute;
   return {
   weeks,
   days,
   hours,
   mintues,
   seconds
   };
   }