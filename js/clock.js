import elements from "./selector.js";

let intervalID;

function updateClock() {
   const now = new Date();
   const hours = now.getHours() % 12 || 12;
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');
   const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
   const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
   elements.get('clock').textContent = timeString;
}

const observer = new MutationObserver((mutationsList) => {
   for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
         elements.get('loader').style.display = 'none';
         observer.disconnect();
      }
   }
});

const config = {
   childList: true
};
observer.observe(elements.get('clock'), config);

function startClock() {
   intervalID = setInterval(updateClock, 1000);
}

function stopClock() {
   clearInterval(intervalID);
}

export {
   startClock,
   stopClock
};

