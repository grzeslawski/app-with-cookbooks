const datalist = document.getElementById("products-list");

const productsList = ["avocado", "banan", "cebula", "pomidor", "ziemniak"];
const productsOwned = [];

const buttonAdd = document.querySelector(".search__button-add");

productsList.forEach((item, index) => {
  const option = document.createElement("option");
  const txt = productsList[index];

  option.value = txt;
  datalist.appendChild(option);
});

function addProduct() {
  const input = document.querySelector(".search__input");

  createProductsList();
  input.value = "";
}

function createProductsList() {
  const search = document.querySelector(".search");

  if (!search.querySelector("h2") && input.value) {
    const list = document.createElement("h2");
    const itemsList = document.createElement("ul");
    const searchButton = document.createElement("button");
    searchButton.classList.add("search__button-search");

    list.classList.add("search__title");
    list.innerHTML = "Lista produktów:";
    searchButton.innerHTML = "Znajdź przepis";
    search.appendChild(list);
    search.appendChild(itemsList);
    search.appendChild(searchButton);
  }

  if (input.value) {
    const productsList = document.querySelector(".search__title");
    const itemsList = document.querySelector("ul");
    const item = document.createElement("li");
    productsOwned.push(input.value);

    itemsList.appendChild(item);
    productsList.appendChild(itemsList);
    for (let i = 0; i < productsOwned.length; i++) {
      item.innerHTML = productsOwned[i];
    }
    console.log(productsOwned);
  }
}

buttonAdd.addEventListener("click", addProduct);
