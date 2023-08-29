function changePrice(idOfItem, itemPrice) {
  document.getElementById(idOfItem).innerHTML = "£" + itemPrice;
}

changePrice("patBra", 3.99);
changePrice("panFre", 3.99);
changePrice("gazpac", 4.49);
changePrice("quesad", 4.49);
changePrice("garBre", 3.99);
changePrice("paeTwo", 18.99);
changePrice("paeFou", 29.99);
changePrice("coqAji", 10.99);
changePrice("jamSer", 13.99);
changePrice("salmon", 10.99);
changePrice("papArr", 10.99);
changePrice("cocMad", 11.99);
changePrice("marPiz", 5.99);
changePrice("pepPiz", 5.99);
changePrice("chiNug", 5.99);
changePrice("sangri", 2.99);
changePrice("burChi", 6.99);
changePrice("fisChi", 6.99);
changePrice("stiWat", 1.49);
changePrice("cocCol", 1.99);
changePrice("dieCok", 1.99);
changePrice("tinDeV", 8.99);
changePrice("sprZer", 1.99);
changePrice("fanOra", 1.99);
changePrice("fanLem", 1.99);
changePrice("sanPel", 2.49);
changePrice("sanMig", 3.49);
changePrice("madron", 2.99);
changePrice("whiWin", 8.99);
changePrice("estDam", 3.49);

const totalPriceValue = document.getElementById("totalPriceValue");
let totalPrice = 0;
var foodNamesOnLog = [];
var foodPricesOnLog = [];

function addToLog(itemName, itemPrice) {
  let logItem1 = document.createElement("div");
  logItem1.classList.add("log-item");
  let contentOne = document.createTextNode(itemName);
  logItem1.appendChild(contentOne);
  document.getElementById("log-contents").appendChild(logItem1);
  foodNamesOnLog.push(itemName);
  sessionStorage.setItem("foodNamesOnLog", JSON.stringify(foodNamesOnLog));

  let logItem2 = document.createElement("div");
  logItem2.classList.add("log-item");
  let contentTwo = document.createTextNode("£" + itemPrice);
  logItem2.appendChild(contentTwo);
  document.getElementById("log-contents").appendChild(logItem2);
  totalPrice = totalPrice + itemPrice;
  totalPriceValue.innerText = "£" + totalPrice.toFixed(2);
  foodPricesOnLog.push(itemPrice);
  sessionStorage.setItem("foodPricesOnLog", JSON.stringify(foodPricesOnLog));
}

function resetTotalPrice() {
  totalPrice = 0;
  totalPriceValue.innerText = "£0.00";
}

function removeFromLog() {
  resetTotalPrice();
  let logContents = document.getElementById("log-contents");
  let logItems = logContents.getElementsByClassName("log-item");
  while (logItems.length > 0) {
    logContents.removeChild(logItems[0]);
  }
}

let errorDisplayed = false;
function goToPaymentPage() {
  if (totalPrice > 0) {
    window.location.href = "/payment-page.html";
  } else {
    if (!errorDisplayed) {
      errorMessage();
      errorDisplayed = true;
    }
  }
}

function errorMessage() {
  let message = document.createElement("div");
  message.classList.add("errorMessage");
  let content = document.createTextNode("Nothing to pay");
  message.appendChild(content);
  document.getElementById("bottom-buttons").appendChild(message);

  let menuItems = document.getElementsByClassName("menu-item");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      message.remove();
    });
  }
}

function openTab(evt, tabName) {
  var i, tabContent, tablinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
