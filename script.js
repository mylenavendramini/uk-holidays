document.getElementById("buttonEW").addEventListener("click", getHolidayEW);
document.getElementById("buttonS").addEventListener("click", getHolidayS);
document.getElementById("buttonNI").addEventListener("click", getHolidayNI);
function refresh() {
  document.querySelector("input").value = "";
}
document.querySelector("button").addEventListener("click", newClick);

let elementClicked = false;

function newClick() {
  console.log("element clicked");
  if (elementClicked) {
    console.log("button has already been clicked before");
  }

  elementClicked = true;
}

function getHolidayEW() {
  let inputEW = document.getElementById("inputEW").value;

  fetch("https://www.gov.uk/bank-holidays.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let holiday = "";
      let date = "";
      let holidayArr = [];
      let places = ["england-and-wales", "scotland", "northern-ireland"];
      console.log(data["england-and-wales"].events);
      // England and Wales:
      data["england-and-wales"].events.forEach((event) => {
        holiday = event.title;
        date = event.date;
        if (holiday.toLowerCase().includes(inputEW)) {
          holidayArr.push(holiday, date);
          const para = document.createElement("p");
          const node = document.createTextNode(`${holiday}: ${date}`);
          para.appendChild(node);
          document.querySelector(".england-and-wales").appendChild(para);
        }
      });
      // 1) refresh the page
      // 2) look for date
    })
    .catch((err) => console.log(`error${err}`));
  refresh();
  newClick();
}
function getHolidayS() {
  let inputS = document.getElementById("inputS").value;

  fetch("https://www.gov.uk/bank-holidays.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let holiday = "";
      let date = "";
      let holidayArr = [];
      let places = ["england-and-wales", "scotland", "northern-ireland"];
      console.log(data["england-and-wales"].events);

      // Scotland:
      data.scotland.events.forEach((event) => {
        holiday = event.title;
        date = event.date;
        if (holiday.toLowerCase().includes(inputS)) {
          holidayArr.push(holiday, date);
          const para = document.createElement("p");
          const node = document.createTextNode(`${holiday}: ${date}`);
          para.appendChild(node);
          document.querySelector(".scotland").appendChild(para);
        }
      });
    })
    .catch((err) => console.log(`error${err}`));
  refresh();
}
function getHolidayNI() {
  let inputNI = document.getElementById("inputNI").value;
  fetch("https://www.gov.uk/bank-holidays.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let holiday = "";
      let date = "";
      let holidayArr = [];
      let places = ["england-and-wales", "scotland", "northern-ireland"];
      console.log(data["england-and-wales"].events);

      // Nothern Ireland:
      data["northern-ireland"].events.forEach((event) => {
        holiday = event.title;
        date = event.date;
        if (holiday.toLowerCase().includes(inputNI)) {
          holidayArr.push(holiday, date);
          const para = document.createElement("p");
          const node = document.createTextNode(`${holiday}: ${date}`);
          para.appendChild(node);
          document.querySelector(".northern-ireland").appendChild(para);
        }
      });
      // 1) refresh the page
      // 2) look for date
    })
    .catch((err) => console.log(`error${err}`));

  refresh();
}

// const button = document.querySelector("button");
// button.addEventListener("click", getDrink);
// function getDrink() {
//   let drink = document.querySelector("input").value;

//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.drinks);
//       document.querySelector("h1").textContent = data.drinks[0].strDrink;
//       document.querySelector("p").textContent = data.drinks[0].strInstructions;
//       document.querySelector("img").src = data.drinks[0].strDrinkThumb;
//     })
//     .catch((err) => console.log(`error ${err}`));
// }
