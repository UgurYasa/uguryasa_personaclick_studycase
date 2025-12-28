// Top Bar

const topMessages = [
  { id: 1, text: "Yılbaşına özel %60 %50 %40 İndirim 🎉" },
  { id: 2, text: "🎅🏻 ☃️ 🎄" },
  { id: 3, text: "1500 TL Ve Üzeri Ücretsiz Kargo 🚚" },
];
// DOM variable
const textEl = document.getElementById("topBarText");

// 20 non-breaking spaces
const gap = "\u00A0".repeat(20);

// Text join with gaps
let messageLine = topMessages.map((m) => m.text).join(gap);
messageLine += gap; // Add space at the end
textEl.textContent = messageLine.repeat(100);

// Navbar Sidebar
const sidebar = [
  { id: 1, text: "Sütyen" },
  { id: 2, text: "İç Giyim" },
  { id: 3, text: "Ev Giyim" },
  { id: 4, text: "Hamile / Lohusa" },
  { id: 5, text: "Plaj" },
  { id: 6, text: "Çorap" },
  { id: 7, text: "Erkek" },
  { id: 8, text: "Büyük Beden" },
  { id: 9, text: "Outlet" },
];
const sidebarEl = document.querySelector(".sidebar");
sidebar.forEach((item) => {
  const div = document.createElement("div");
  div.className = "sidebar-item";
  div.textContent = item.text;
  sidebarEl.appendChild(div);
});

// Header Icons
const headerIcons = [
  {
    id: 1,
    class: "fa-solid fa-magnifying-glass header-icon",
    onClick: () => alert("Search clicked"),
  },
  {
    id: 2,
    class: "fa-solid fa-heart",
    onClick: () => alert("Favorites clicked header-icon"),
  },
  { id: 3, class: "fa-regular fa-user header-icon", onClick: () => alert("User clicked") },
  {
    id: 4,
    class: "fa-solid fa-bag-shopping header-icon",
    onClick: () => alert("Shopping Bag clicked"),
  },
];
const headerIconsEl = document.querySelector(".header-icons");
headerIcons.forEach((icon) => {
  const i = document.createElement("i");
  i.className = icon.class;
  i.addEventListener("click", () => {
    icon.onClick();
  });
  headerIconsEl.appendChild(i);
});

// Popular Products Section
const popularProducts = [
  {
    id: 1,
    name: "Siyah Desenli Candy Gömlek Yaka Pijama Takımı",
    image:
      "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SH262356601352_01.jpg",
    price: "749,99 TL",
    discountPrice: "2.499,99 TL",
    percentDiscount: "%70",
  },
  {
    id: 2,
    name: "Siyah Desenli Lulusu Gömlek Yaka Pijama Takımı",
    image:
      "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SH26259660B911_01.jpg",
    price: "2.499,99 TL",
    discountPrice: "999,99  TL",
    percentDiscount: "%60",
  },
  {
    id: 3,
    name: "Kırmızı Koalina Gömlek Yaka Pijama Takımı",
    image:
      "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SH26258660B1114_01.jpg",
    price: "1.249,99 TL",
    discountPrice: "2.499,99 TL",
    percentDiscount: "%50",
  },
  {
    id: 4,
    name: "Mavili Julia Gömlek Yaka Pijama Takımı",
    image:
      "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SH26219660B348_01.jpg",
    price: "2.499,99 TL",
    discountPrice: "999,99 TL",
    percentDiscount: "%60",
  },
];

const popularProductsEl = document.getElementById("popularProducts");
popularProducts.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product-card";
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}"  />
    <p>${product.name}</p>
    <div class="price-section">
    <div class ="percent-discount">${product.percentDiscount}</div>
    <div class="price-info">
    <span class="discount-price">${product.discountPrice}</span>
      <span class="original-price">${product.price}</span>
    </div>
    </div>
  `;
  popularProductsEl.appendChild(productDiv);
});
// Advantages Section

const advantages = [
  {
    id: 1,
    name: "Ev Giyimde Net %60 %50 %40 İndirim",
    image: "../public/pictures/Advantages1.png",
  },
  {
    id: 2,
    name: "Sütyenlerde 3 Al 2 Öde",
    image: "../public/pictures/Advantages2.png",
  },
    {
    id: 3,
    name: "Külotlarda Tüm İndirimlere Ek Net %20 İndirim",
    image: "../public/pictures/Advantages4.png",
  },
  {
    id: 4,
    name: "Koleksiyonlarda Net %70 İndirim",
    image: "../public/pictures/Advantages3.png",
  },
   {
    id: 5,
    name: "",
    image: "../public/pictures/Advantages5.png",
  },
  {
    id: 6,
    name: "Erkek Ev Giyimde Net %60 %50 %40 İndirim",
    image: "../public/pictures/Advantages6.png",
  },
    {
    id: 7,
    name: "Çoraplarda 3 Al 2 Öde",
    image: "../public/pictures/Advantages7.png",
  },
   {
    id: 8,
    name: "Hamile ve Lohusa Ürünlerinde Net %60 %50 %40 İndirim",
    image: "../public/pictures/Advantages8.png",
  },

];
const advantagesEl = document.getElementById("advantages");
advantages.forEach((advantage) => {
  const advantageDiv = document.createElement("div");
  advantageDiv.className = "advantage-card";
  advantageDiv.innerHTML = `
    <img src="${advantage.image}" alt="${advantage.name}"  />
  ${advantage.name.length > 0 ? `<p>${advantage.name}</p>` : ``}
    </div>
  `;
  advantagesEl.appendChild(advantageDiv);
});

// Footer Year Update
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Footer Menu
const footerMenu = [
  {
    id: 1,
    title: "Yardım",
    includes: [
      "Sipariş Takibi",
      "İade, Değişim ve İptal İşlemleri",
      "Sıkça Sorulan Sorular",
      "Teslimat Koşulları ve Kargo İşlemleri",
      "Ödeme Yöntemleri",
      "Sütyen Bedeninizi Öğrenin",
      "Mağazalarımız",
      "Bize Ulaşın"
    ]
  },
  {
    id: 2,
    title: "Popüler Kategoriler",
    includes: [
      "Sütyen",
      "Külot",
      "Pijama",
      "Gecelik",
      "Sabahlık",
      "Şort Pijama Takımı",
      "Jartiyer",
      "Büyük Beden",
      "Bodysuit",
      "Plaj",
      "Hamile / Lohusa",
      "Çorap",
      "Outlet"
    ]
  },
  {
    id: 3,
    title: "Özel Sayfalar",
    includes: [
      "Yılbaşı Hediye Fırsatları",
      "Black Friday İndirimleri",
      "Sevgililer Günü Hediyeleri",
      "11 Kasım İndirimleri",
      "Anneler Günü Hediyeleri",
      "Babalar Günü Hediyeleri",
      "Outlet İndirimleri"
    ]
  },
  {
    id: 4,
    title: "Kurumsal",
    includes: [
      "Hakkımızda",
      "Ödüllerimiz",
      "Yatırımcı İlişkileri",
      "IK Politikamız",
      "Kalite Politikamız",
      "Mesafeli Satış Sözleşmesi",
      "Suwen Çerez Politikası",
      "Kullanım Koşulları",
      "Kişisel Verilerin Korunması",
      "Sürdürebilirlik Yolculuğumuz"
    ]
  },
  {
    id: 5,
    title: "Bize Ulaşın",
    includes: [
      "İletişim Formu",
      "Mağazalarımız",
      "Franchising Başvuru Formu"
    ]
  }
];

const footerMenuEl = document.getElementById("footerMenu");
footerMenu.forEach((menu) => {
  const menuDiv = document.createElement("div");
  menuDiv.className = "footer-menu-section";
  let includesHTML = "";
  menu.includes.forEach((item) => {
    includesHTML += `<p>${item}</p>`;
  });
  menuDiv.innerHTML = `
    <h3>${menu.title}</h3>
    <p>
      ${includesHTML}
    </p>
  `;
  footerMenuEl.appendChild(menuDiv);
});