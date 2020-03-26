const productsList = ["avocado", "banan", "cebula", "pomidor", "ziemniak"];
const productsOwned = [];

const buttonAdd = document.querySelector(".search__button-add");

productsList.forEach((item, index) => {
  const datalist = document.getElementById("products-list");
  const option = document.createElement("option");
  const txt = productsList[index];

  option.value = txt;
  datalist.appendChild(option);
});

function addProduct() {
  const input = document.querySelector(".search__input");

  if (!document.querySelector(".products")) {
    createSectionProducts();
  }
  createProductsList();

  input.value = "";
}

function createSectionProducts() {
  const container = document.querySelector(".container");
  const products = document.createElement("section");
  products.classList.add("products");
  container.appendChild(products);
}

function createProductsList() {
  const products = document.querySelector(".products");

  if (!products.querySelector("h2") && input.value) {
    const title = document.createElement("h2");
    const itemsList = document.createElement("ul");
    const searchButton = document.createElement("button");

    title.classList.add("products__title");
    title.innerHTML = "Lista produktów:";

    searchButton.classList.add("button", "products__button-search");
    searchButton.innerHTML = "Znajdź przepis";

    products.appendChild(title);
    products.appendChild(itemsList);
    products.appendChild(searchButton);
  }

  if (input.value) {
    const itemsList = document.querySelector("ul");
    const item = document.createElement("li");

    if (productsOwned.indexOf(input.value) === -1) {
      productsOwned.push(input.value);
      itemsList.appendChild(item);

      for (let i = 0; i < productsOwned.length; i++) {
        item.innerHTML = productsOwned[i];
      }
    }
  }
}

buttonAdd.addEventListener("click", addProduct);
