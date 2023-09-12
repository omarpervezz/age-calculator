import {
  destroyChart
} from "./chartinitilization.js";
import { stopClock } from "./clock.js";
import resetContent from "./resetcontent.js";
  // close popup
  function closePopup(result_box_container,result_box, element, subBtn) {
  element.addEventListener("click", (event) => {
  result_box.classList.add("animate__bounceOutLeft");
  setTimeout(() => {
  result_box_container.classList.remove('showToggle');
  stopClock();
  resetContent();
  destroyChart();
  subBtn.disabled = false;
  },300)
  });
  }
  export default closePopup;