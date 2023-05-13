const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const fruitForm = document.querySelector("#fruitForm");

const allFruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function searchFruit(inputVal) {
  let foundFruits = allFruits.reduce((foundFruits, nextFruit) => {
    if (nextFruit.toLowerCase().includes(inputVal)) {
      foundFruits.push(nextFruit);
    }
    return foundFruits;
  }, []);

  console.log({ foundFruits });
  showSuggestions(foundFruits);
}

function searchHandler(e) {
  let inputVal = input.value.toLowerCase();

  if (inputVal !== " " && inputVal.length !== 0) {
    searchFruit(inputVal);
  }
}

function showSuggestions(foundFruits) {
  suggestions.innerHTML = "";

  foundFruits.forEach((fruit) => {
    const newSuggest = document.createElement("li");
    newSuggest.textContent = fruit;
    newSuggest.classList.add("newSuggest");
    suggestions.appendChild(newSuggest);
  });
}

function useSuggestion(e) {
  if (e.target.className === "newSuggest") {
    input.value = e.target.innerText;
  }
  setTimeout(submitFunction, 100);
}

function submitFunction(e) {
  const result = allFruits.findIndex(
    (item) => input.value.toUpperCase() === item.toUpperCase()
  );

  if (result !== -1) {
    alert(`You found ${input.value} in Fruit World!`);
    fruitForm.submit();
  } else {
    alert(`Sorry, but I couldn't find "${input.value}" in Fruit World!`);
  }
}

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const letters = document.querySelectorAll(".letter");

const randomColorLetters = () => {
  setInterval(function () {
    for (let letter of letters) {
      letter.style.color = randomColor();
    }
  }, 1000);
};
randomColorLetters();

fruitForm.addEventListener("submit", submitFunction);
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
