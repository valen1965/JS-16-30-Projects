
const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const pageTitle = document.querySelector('.title, h2');
document.title = pageTitle.textContent.toUpperCase();

const fetchProducts = async () => {
    productsDOM.innerHTML = `
    <div class="loading"></div>
`;
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        productsDOM.innerHTML =
            '<p class="error">there was an error</p>'
            ;
    }
};

const displayProducts = (list) => {
    const productList = list
        .map((product) => {
            const { id } = product;
            const { name: title, price } = product.fields;
            const { url: img } = product.fields.image[0];
            const formPrice = price / 100;

            // id, name, price, img
            return `
            <a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}">
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formPrice}</span>
            </footer>
          </a>`;
        }).join('');

    productsDOM.innerHTML = `
    <div class="products-container">
        ${productList}
    </div>`

};

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
};

start();
