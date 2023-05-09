const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

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

function searchFruit(inputVal) {
  return allFruits.reduce((resultsArray, nextFruit) => {
    if (nextFruit.toLowerCase().includes(inputVal)) {
      resultsArray.push(nextFruit);
    }
    return resultsArray;
  }, []);
}

function searchHandler(e) {
  const inputVal = input.value.toLowerCase();
  let resultsArray = searchFruit(inputVal);
  showSuggestions(resultsArray, inputVal);
}

function showSuggestions(resultsArray, inputVal) {
  suggestions.innerHTML = "";

  resultsArray.forEach((fruit) => {
    const newSuggest = document.createElement("li");
    newSuggest.textContent = fruit;
    newSuggest.classList.add("newSuggest");
    newSuggest.setAttribute("id", fruit);
    suggestions.appendChild(newSuggest);
  });
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.innerText;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
// suggestions.addEventListener("mouseover", useSuggestion);
