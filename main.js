changePrice("patBra", parseFloat(3.99));
changePrice("panFre", parseFloat(3.99));
changePrice("gazpac", parseFloat(4.49));
changePrice("quesad", parseFloat(4.49));
changePrice("garBre", parseFloat(3.99));
changePrice("paeTwo", parseFloat(18.99));
changePrice("paeFou", parseFloat(29.99));
changePrice("coqAji", parseFloat(10.99));
changePrice("jamSer", parseFloat(13.99));
changePrice("salmon", parseFloat(10.99));
changePrice("papArr", parseFloat(10.99));
changePrice("cocMad", parseFloat(11.99));
changePrice("marPiz", parseFloat(5.99));
changePrice("pepPiz", parseFloat(5.99));
changePrice("chiNug", parseFloat(5.99));
changePrice("sangri", parseFloat(2.99));
changePrice("burChi", parseFloat(6.99));
changePrice("fisChi", parseFloat(6.99));
changePrice("stiWat", parseFloat(1.49));
changePrice("cocCol", parseFloat(1.99));
changePrice("dieCok", parseFloat(1.99));
changePrice("tinDeV", parseFloat(8.99));
changePrice("sprZer", parseFloat(1.99));
changePrice("fanOra", parseFloat(1.99));
changePrice("fanLem", parseFloat(1.99));
changePrice("sanPel", parseFloat(2.49));
changePrice("sanMig", parseFloat(3.49));
changePrice("madron", parseFloat(2.99));
changePrice("whiWin", parseFloat(8.99));
changePrice("estDam", parseFloat(3.49));

var totalPriceValue = document.getElementById("totalPriceValue");
var totalPrice = 0;
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

errorDisplayed = false;
function goToPaymentPage() {
  if (totalPrice > 0) {
    window.location.href = "payment-page.html";
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
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
});

function changePrice(idOfItem, itemPrice) {
  document.getElementById(idOfItem).innerText = "£" + parseFloat(itemPrice);
}
