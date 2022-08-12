const birth_date = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

// focus input and change bg
birth_date.addEventListener('focus', function(event){
  addClass(birth_date,event);
});
month.addEventListener('focus', function(event){
  addClass(month,event)
});
year.addEventListener('focus', function(event){
  addClass(year,event)
});
const addClass = (input,event) => {
  if(event.path[0].id == 'date'){
    event.path[0].classList.add('addFocused');
    month.classList.remove('addFocused');
    year.classList.remove('addFocused');
  }else if(event.path[0].id == 'month'){
    event.path[0].classList.add('addFocused');
    birth_date.classList.remove('addFocused');
    year.classList.remove('addFocused');
  }else if(event.path[0].id == 'year'){
    event.path[0].classList.add('addFocused');
    month.classList.remove('addFocused');
    birth_date.classList.remove('addFocused');
  }
}

const calculateAge = document.querySelector('#form');
calculateAge.addEventListener('submit', function(event) {
  event.preventDefault();
  let userDateOfBirth = document.querySelector('#date').value;  // 20
  let userBirthMonth = document.querySelector('#month').value;  // 12
  let userBirthYears = document.querySelector('#year').value;   // 1990

  // today date 
  let date = new Date();   // new date
  let todayDate = date.getDate();  // current date
  let currentMonth = 1 + date.getMonth() // current month;
  let currentYear = date.getFullYear() // current year;
  let months_ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // random array for 31 28 30 calculated;

 if(userDateOfBirth && userBirthMonth && userBirthYears > ){
  if(userDateOfBirth > todayDate){  // checking if userdate > today date
    todayDate = todayDate + months_[currentMonth - 1]; // 44
    currentMonth = currentMonth - 1; //7
  }
if(userBirthMonth > currentMonth){
  console.log(currentMonth);
  currentMonth = currentMonth + 12; // 19
  console.log(currentMonth);
  currentYear = currentYear - 1; // 2021
}

  let d = todayDate - userDateOfBirth; // 13 - 20 = -7
  console.log(currentMonth);
  console.log(userBirthMonth);
  let m = currentMonth - userBirthMonth // 8 - 12 == -4;
  let y = currentYear - userBirthYears // 2022 - 1990 32;

  const box = document.querySelector('.box');

  box.innerHTML += `
  <div class="result_box">
  <span class="material-symbols-outlined" id="close-item">
close
</span>

  <div class="result_content">
   <div>
     <span>Your Age</span><span>${y} Years</span>
   </div>
   <div><span>Your Month</span><span>${m} Month</span></div>
   <div>
     <span>Your Days</span><span>${d} Days</span>
   </div>
  </div>
</div>
  `
  const item = document.querySelector('.result_box');
  const closeItem = document.querySelector('#close-item');
  closeItem.addEventListener('click', function(event){
    item.remove();
    location.reload();
  })
 }
  
});

