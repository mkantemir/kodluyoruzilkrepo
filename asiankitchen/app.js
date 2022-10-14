const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const buttonContainerDOM = document.querySelector(".btn-container");

const allButton = document.createElement("button");
const koreaButton = document.createElement("button");
const japanButton = document.createElement("button");
const chinaButton = document.createElement("button");

allButton.innerText = "All";
koreaButton.innerText = "Korea";
japanButton.innerText = "Japan";
chinaButton.innerText = "China";

buttonContainerDOM.append(allButton);
buttonContainerDOM.append(koreaButton);
buttonContainerDOM.append(japanButton);
buttonContainerDOM.append(chinaButton);

allButton.className = "btn btn-outline-dark btn-item";
koreaButton.className = "btn btn-outline-dark btn-item";
japanButton.className = "btn btn-outline-dark btn-item";
chinaButton.className = "btn btn-outline-dark btn-item";

const menuItemDOM = document.querySelector(".row");

// menu.map(
//   (item => {

// //bir menü elemanı için row oluşturup sınıfını verdik
// const itemRow = document.createElement("div");
// itemRow.className = "menu-items col-lg-6 col-sm-12";
// menuItemDOM.append(itemRow);

// //menü elemanının sol taraftaki resmi için elemnet oluşturup sınıfını verdik
// const itemImage = document.createElement("img");
// itemImage.src = item.img

// itemImage.className = "photo";
// itemRow.append(itemImage);

// //menü elemanının sağ taraftaki bilgiler için elemnet oluşturup sınıfını verdik
// const itemInfo = document.createElement("div");
// itemInfo.className = "menu-info";
// itemRow.append(itemInfo);

// const itemTitle = document.createElement("div");
// itemTitle.className = "menu-title";
// const itemName = document.createElement("h4");
// itemName.innerHTML = item.title
// itemTitle.append(itemName);
// const itemPrice = document.createElement("h4");
// itemPrice.className = "price";
// itemPrice.innerHTML = item.price
// itemTitle.append(itemPrice);
// itemInfo.append(itemTitle);

// const itemText = document.createElement("div");
// itemText.className = "menu-text";
// itemText.innerHTML = item.desc
// itemInfo.append(itemText);

//   })
// );

const selectAll = () => {
  menuItemDOM.innerHTML = "";
  menu.map((item) => {
    //bir menü elemanı için row oluşturup sınıfını verdik
    const itemRow = document.createElement("div");
    itemRow.className = "menu-items col-lg-6 col-sm-12";
    menuItemDOM.append(itemRow);

    //menü elemanının sol taraftaki resmi için elemnet oluşturup sınıfını verdik
    const itemImage = document.createElement("img");
    itemImage.src = item.img;

    itemImage.className = "photo";
    itemRow.append(itemImage);

    //menü elemanının sağ taraftaki bilgiler için elemnet oluşturup sınıfını verdik
    const itemInfo = document.createElement("div");
    itemInfo.className = "menu-info";
    itemRow.append(itemInfo);

    const itemTitle = document.createElement("div");
    itemTitle.className = "menu-title";
    const itemName = document.createElement("h4");
    itemName.innerHTML = item.title;
    itemTitle.append(itemName);
    const itemPrice = document.createElement("h4");
    itemPrice.className = "price";
    itemPrice.innerHTML = item.price;
    itemTitle.append(itemPrice);
    itemInfo.append(itemTitle);

    const itemText = document.createElement("div");
    itemText.className = "menu-text";
    itemText.innerHTML = item.desc;
    itemInfo.append(itemText);
  });
};
const filterChina = () => {
  menuItemDOM.innerHTML = "";
  menu.map((item) => {
    if (item.category === "China") {
      //bir menü elemanı için row oluşturup sınıfını verdik
      const itemRow = document.createElement("div");
      itemRow.className = "menu-items col-lg-6 col-sm-12";
      menuItemDOM.append(itemRow);

      //menü elemanının sol taraftaki resmi için elemnet oluşturup sınıfını verdik
      const itemImage = document.createElement("img");
      itemImage.src = item.img;

      itemImage.className = "photo";
      itemRow.append(itemImage);

      //menü elemanının sağ taraftaki bilgiler için elemnet oluşturup sınıfını verdik
      const itemInfo = document.createElement("div");
      itemInfo.className = "menu-info";
      itemRow.append(itemInfo);

      const itemTitle = document.createElement("div");
      itemTitle.className = "menu-title";
      const itemName = document.createElement("h4");
      itemName.innerHTML = item.title;
      itemTitle.append(itemName);
      const itemPrice = document.createElement("h4");
      itemPrice.className = "price";
      itemPrice.innerHTML = item.price;
      itemTitle.append(itemPrice);
      itemInfo.append(itemTitle);

      const itemText = document.createElement("div");
      itemText.className = "menu-text";
      itemText.innerHTML = item.desc;
      itemInfo.append(itemText);
    }
  });
};
const filterJapan = () => {
  menuItemDOM.innerHTML = "";
  menu.map((item) => {
    if (item.category === "Japan") {
      //bir menü elemanı için row oluşturup sınıfını verdik
      const itemRow = document.createElement("div");
      itemRow.className = "menu-items col-lg-6 col-sm-12";
      menuItemDOM.append(itemRow);

      //menü elemanının sol taraftaki resmi için elemnet oluşturup sınıfını verdik
      const itemImage = document.createElement("img");
      itemImage.src = item.img;

      itemImage.className = "photo";
      itemRow.append(itemImage);

      //menü elemanının sağ taraftaki bilgiler için elemnet oluşturup sınıfını verdik
      const itemInfo = document.createElement("div");
      itemInfo.className = "menu-info";
      itemRow.append(itemInfo);

      const itemTitle = document.createElement("div");
      itemTitle.className = "menu-title";
      const itemName = document.createElement("h4");
      itemName.innerHTML = item.title;
      itemTitle.append(itemName);
      const itemPrice = document.createElement("h4");
      itemPrice.className = "price";
      itemPrice.innerHTML = item.price;
      itemTitle.append(itemPrice);
      itemInfo.append(itemTitle);

      const itemText = document.createElement("div");
      itemText.className = "menu-text";
      itemText.innerHTML = item.desc;
      itemInfo.append(itemText);
    }
  });
};
const filterKorea = () => {
  menuItemDOM.innerHTML = "";
  menu.map((item) => {
    if (item.category === "Korea") {
      //bir menü elemanı için row oluşturup sınıfını verdik
      const itemRow = document.createElement("div");
      itemRow.className = "menu-items col-lg-6 col-sm-12";
      menuItemDOM.append(itemRow);

      //menü elemanının sol taraftaki resmi için elemnet oluşturup sınıfını verdik
      const itemImage = document.createElement("img");
      itemImage.src = item.img;

      itemImage.className = "photo";
      itemRow.append(itemImage);

      //menü elemanının sağ taraftaki bilgiler için elemnet oluşturup sınıfını verdik
      const itemInfo = document.createElement("div");
      itemInfo.className = "menu-info";
      itemRow.append(itemInfo);

      const itemTitle = document.createElement("div");
      itemTitle.className = "menu-title";
      const itemName = document.createElement("h4");
      itemName.innerHTML = item.title;
      itemTitle.append(itemName);
      const itemPrice = document.createElement("h4");
      itemPrice.className = "price";
      itemPrice.innerHTML = item.price;
      itemTitle.append(itemPrice);
      itemInfo.append(itemTitle);

      const itemText = document.createElement("div");
      itemText.className = "menu-text";
      itemText.innerHTML = item.desc;
      itemInfo.append(itemText);
    }
  });
};

allButton.addEventListener("click", selectAll);
koreaButton.addEventListener("click", filterKorea);
japanButton.addEventListener("click", filterJapan);
chinaButton.addEventListener("click", filterChina);

selectAll();
