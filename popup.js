const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

const register = document.getElementById("registerBtn");
const consentCheckbox = document.getElementById("consentCheckbox");
const email = document.getElementById("emailInput");

const FIRST_VISIT = "firstVisit";
const SECOND_VISIT = "secondVisit";
const TWO_HOURS = 2 * 60 * 60 * 1000;

// Fisrt visit Record
if (!localStorage.getItem(FIRST_VISIT)) {
  localStorage.setItem(FIRST_VISIT, Date.now());
  localStorage.setItem("click", 0);
}

// After 10 seconds popup
window.addEventListener("load", () => {
  if (localStorage.getItem("click") == 0) {
    setTimeout(() => {
      popup.style.display = "flex";
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
    localStorage.setItem(SECOND_VISIT, Date.now());
  } else {
    setTimeout(() => {
      popup.style.display = "flex";
      localStorage.setItem(SECOND_VISIT, Date.now());
    }, remaining);
  }
}

// 4️⃣ Run the check
secondVisitCheck();

// 5️⃣ Close Popup
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
  localStorage.setItem("click", 1);
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  localStorage.setItem("click", 1);
});

// 6️⃣ Register Email
register.addEventListener("click", () => {
  if (!consentCheckbox.checked) {
    alert("Lütfen KVKK Sözleşmesini kabul edin.");
    return;
  } else if (email.value.trim() === "") {
    alert("Lütfen geçerli bir e-posta adresi girin.");
    return;
  } else {
    alert(`Teşekkürler! ${email.value} adresi kayıt edildi.`);
    popup.style.display = "none";
    localStorage.setItem("click", 1);
  }
});
