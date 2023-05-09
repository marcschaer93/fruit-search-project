const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const fruitForm = document.querySelector("#fruitForm");

const allFruits = [
  "Apple 🍎 ",
  "Apricot ",
  "Avocado 🥑",
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

function searchHandler(e) {
  let inputVal = input.value.toLowerCase();
  let resultsArray = searchFruit(inputVal);
  showSuggestions(resultsArray);
}

function searchFruit(inputVal) {
  return allFruits.reduce((resultsArray, nextFruit) => {
    if (nextFruit.toLowerCase().includes(inputVal)) {
      resultsArray.push(nextFruit);
    }
    return resultsArray;
  }, []);
}

function showSuggestions(resultsArray) {
  //instead of add class "has-suggestions", this sets suggestions to null everytime
  suggestions.innerHTML = "";

  resultsArray.forEach((fruit) => {
    const newSuggest = document.createElement("li");
    newSuggest.textContent = fruit;
    newSuggest.classList.add("newSuggest");
    suggestions.appendChild(newSuggest);
  });
}

function useSuggestion(e) {
  if (e.target.className === "newSuggest") {
    input.value = e.target.innerText;
    e.target === fruitForm.submit();
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
