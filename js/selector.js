// Function to select elements by their IDs and store them in a Map
function selectElementsByIds(ids) {
    const elements = new Map();
    ids.forEach(id => {
       elements.set(id, document.querySelector(`#${id}`));
    });
    return elements;
 }
 
 // Define the IDs you want to select
 const elementIds = [
   "result_box",
   "date",
   "month",
   "year",
    "age____",
    "months___",
    "days____",
    "birth__day__",
    "birth_month___",
    "birth_date_in_number",
    "birth_year_in_number",
    "age_day__",
    "age_month___",
    "age_date_in_number",
    "age_year_in_number",
    "years_value",
    "months_value_1",
    "day_value_1",
    "months_value_2",
    "day_value_2",
    "weeks_value",
    "day_value_5",
    "hours_value",
    "minutes__value",
    "seconds_value",
    "close__popup",
    "result_container__",
    "submit___",
    "clock",
    "loader"
   
 
 ];


 // Use the function to select the elements
 const elements = selectElementsByIds(elementIds);

 export default elements;
