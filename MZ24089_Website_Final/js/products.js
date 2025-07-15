const products = [
  { name: "Strawberry", price: 2.25, image: "../images/strawberry_img.png" },
  { name: "Apple", price: 2.20, image: "../images/apple_img.png" },
  { name: "Banana", price: 1.10, image: "../images/banana_img.png" },
  { name: "Papaya", price: 2.00, image: "../images/papaya_img.png" },
  { name: "Watermelon", price: 3.50, image: "../images/watermelon_img.png" },
  { name: "Mango", price: 1.40, image: "../images/mango_img.jpg" },
];

let filteredProducts = [...products];

// DOM elements
const productList = document.getElementById("productList");
const priceRange = document.getElementById("priceRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const applyFilter = document.getElementById("applyFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(items) {
  productList.innerHTML = items.map(product => `
    <div class="product-card">
        <div class="img-box">
            <img src="${product.image}" alt="${product.name}" />
            <span class="discount-tag">-10%</span>
            <button class="quick-add">QUICK ADD</button>
        </div>

        <p class="fruit-title">${product.name} – 100% Farm Fresh</p>
        <div class="price"><strong>£ ${product.price}</strong></div>
    </div>
  `).join("");
}


function filterProducts() {
  const min = parseInt(minPrice.value) || 0;
  const max = parseInt(maxPrice.value) || parseInt(priceRange.value);
  filteredProducts = products.filter(p => p.price >= min && p.price <= max);
  sortProducts();
}

function sortProducts() {
  const sort = sortOption.value;
  if (sort === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name-a-z") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name-z-a") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }
  renderProducts(filteredProducts);
}

priceRange.addEventListener("input", () => {
  maxPrice.value = priceRange.value;
});

applyFilter.addEventListener("click", filterProducts);
sortOption.addEventListener("change", sortProducts);

window.addEventListener("DOMContentLoaded", () => {
  priceRange.value = 5;
  maxPrice.value = 5;
  renderProducts(products);
});
