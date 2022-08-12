const calculateAge = () => {
  let d1 = document.getElementById("date").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;
  
  let date = new Date();
  let d2 = date.getDate();
  console.log('i am d2 ' + d2);
  let m2 = 1 + date.getMonth();
  console.log('i am m2 ' + m2)
  let y2 = date.getFullYear();
  console.log('i am y2 ' + y2);
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  console.log('i am y2 ' + month)
  
  if (d1 > d2) {
    alert('you are in box')
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
      console.log('I am m2 condition one ' + m2)
  }
  
  if (m1 > m2) {
    alert('you are in box');
      m2 = m2 + 12;
      console.log('I am m2 in condition one ' + m2)
      y2 = y2 - 1;
      console.log('I am year in condition two ' +y2)
  }
  
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  document.getElementById("displayAge").innerText = `Your Age is ${y} Years, ${m} Months and ${d} Days`;
  }

