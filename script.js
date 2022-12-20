document.getElementById("buttonEW").addEventListener("click", getHolidayEW);
document.getElementById("buttonS").addEventListener("click", getHolidayS);
document.getElementById("buttonNI").addEventListener("click", getHolidayNI);
const url = "https://www.gov.uk/bank-holidays.json";

function refresh() {
  document.getElementById("inputEW").value = "";
  document.getElementById("inputS").value = "";
  document.getElementById("inputNI").value = "";
}

document.querySelector("button").addEventListener("click", newClick);

let elementClicked = false;

function newClick() {
  console.log("element clicked");
  let para = document.createElement("p");
  let div = document.querySelector(".text-output");
  if (elementClicked) {
    console.log("button has already been clicked before");
    console.log(div);
    while (div.hasChildNodes()) {
      div.removeChild(div.firstChild);
    }
    // div.removeChild(para);
    console.log(div);
  }

  elementClicked = true;
}

function getHolidayEW() {
  let inputEW = document.getElementById("inputEW").value.toLowerCase();

  fetch(url)
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
        const para = document.createElement("p");
        para.textContent = `${holiday}: ${date}`;
        const div = document.querySelector(".text-output");
        if (inputS !== "" && holiday.toLowerCase().includes(inputEW)) {
          holidayArr.push(holiday, date);
          div.appendChild(para);
        }
        refresh();
      });
      newClick();
    })
    .catch((err) => console.log(`error${err}`));
}
function getHolidayS() {
  let inputS = document.getElementById("inputS").value.toLowerCase();

  fetch(url)
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
        const para = document.createElement("p");
        para.textContent = `${holiday}: ${date}`;
        const div = document.querySelector(".text-output");

        if (inputS !== "" && holiday.toLowerCase().includes(inputS)) {
          holidayArr.push(holiday, date);
          div.appendChild(para);
        }
      });
    })
    .catch((err) => console.log(`error${err}`));
  refresh();
  newClick();
}
function getHolidayNI() {
  let inputNI = document.getElementById("inputNI").value.toLowerCase();
  fetch(url)
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
        const para = document.createElement("p");
        para.textContent = `${holiday}: ${date}`;
        const div = document.querySelector(".text-output");
        if (inputS !== "" && holiday.toLowerCase().includes(inputNI)) {
          holidayArr.push(holiday, date);
          div.appendChild(para);
        }
      });
      // newClick();
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
