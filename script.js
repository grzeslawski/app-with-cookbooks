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
  productsOwned.push(input.value);
  createProductsList();
  input.value = "";
  return productsOwned;
}

function createProductsList() {
  const search = document.querySelector(".search");

  if (!search.querySelector("h2")) {
    const list = document.createElement("h2");
    const itemsList = document.createElement("ul");
    list.classList.add("products-list");
    list.innerHTML = "Lista produktów:";
    list.appendChild(itemsList);
    search.appendChild(list);
  }

  if (input.value) {
    const productsList = document.querySelector(".products-list");
    const itemsList = document.querySelector("ul");
    const item = document.createElement("li");
    itemsList.appendChild(item);
    productsList.appendChild(itemsList);
    for (let i = 0; i < productsOwned.length; i++) {
      item.innerHTML = productsOwned[i];
    }
  }
}

buttonAdd.addEventListener("click", addProduct);
