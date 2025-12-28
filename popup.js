// Connecting to HTML elements
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const register = document.getElementById("registerBtn");
const consentCheckbox = document.getElementById("consentCheckbox");
const email = document.getElementById("emailInput");
const testButton = document.getElementById("testButton");
const discountPopup = document.getElementById("discountPopup");
const normalPopup = document.getElementById("normalPopup");
const closeBtn2 = document.getElementById("closeBtn2");
const copyButton = document.getElementById("copyButton");

// Constants and Variables
const FIRST_VISIT = "firstVisit";
const SECOND_VISIT = "secondVisit";
var TWO_HOURS = Number(localStorage.getItem("tryTime")) || 2 * 60 * 60 * 1000;

// Try Button for testing
testButton.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("tryTime", 30 * 1000); // 30 seconds for testing
  window.location.reload();
});

// First visit Record
if (!localStorage.getItem(FIRST_VISIT)) {
  localStorage.setItem(FIRST_VISIT, Date.now());
  localStorage.setItem("click", 0);
}

// After 10 seconds popup
window.addEventListener("load", () => {
  if (localStorage.getItem("click") == 0) {
    setTimeout(() => {
      popup.style.display = "flex";
      normalPopup.style.display = "flex";
    }, 10000);
  }
});

// Second visit Check After 2 hours
function secondVisitCheck() {
  if (localStorage.getItem(SECOND_VISIT)) return;

  const firstVisitTime = Number(localStorage.getItem(FIRST_VISIT));
  const now = Date.now();
  const passed = now - firstVisitTime;
  const remaining = TWO_HOURS - passed;

  if (remaining <= 0) {
    popup.style.display = "flex";
    if (localStorage.getItem("email")) {
      discountPopup.style.display = "flex";
    } else {
      normalPopup.style.display = "flex";
    }

    localStorage.setItem(SECOND_VISIT, Date.now());
    localStorage.removeItem("tryTime");
  } else {
    setTimeout(() => {
      popup.style.display = "flex";
      if (localStorage.getItem("email")) {
        discountPopup.style.display = "flex";
      } else {
        normalPopup.style.display = "flex";
      }
      localStorage.setItem(SECOND_VISIT, Date.now());
      localStorage.removeItem("tryTime");
    }, remaining);
  }
}

// Run the check for second visit
secondVisitCheck();

// Close Popup
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
  localStorage.setItem("click", 1);
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  discountPopup.style.display = "none";
  localStorage.setItem("click", 1);
});

closeBtn2.addEventListener("click", () => {
  popup.style.display = "none";
  discountPopup.style.display = "none";
  localStorage.setItem("click", 1);
});

// Register Email
register.addEventListener("click", () => {
  if (!consentCheckbox.checked) {
    alert("Lütfen KVKK Sözleşmesini kabul edin.");
    return;
  } else if (email.value.trim() === "") {
    alert("Lütfen geçerli bir e-posta adresi girin.");
    return;
  } else {
    localStorage.setItem("email", email.value);
    normalPopup.style.display = "none";
    discountPopup.style.display = "flex";
  }
});

// Copy Discount Code
copyButton.addEventListener("click", () => {
  const discountCode = "3AL2ODE";
  navigator.clipboard.writeText(discountCode);
  
  copyButton.textContent = "Kopyalandı!";
  copyButton.style.backgroundColor = "#22C55E";
  setTimeout(() => {
    copyButton.textContent = "Kopyala";
    copyButton.style.backgroundColor = "#ff808b";
  }, 2000);
});
