
const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';


const fetchProduct = async () => {

    // preloader - spinner
    // productDOM.innerHTML = `
    //     <div class="loading"></div>`;

    try {
        productDOM.innerHTML = `
        <h4 class="product-loading">loading...</h4>`

        // console.log(window.location.search);
        // gets parameters from window search bar
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        // console.log(id);

        const resp = await fetch(`${url}?id=${id}`);
        const data = await resp.json();
        return data;

    } catch (error) {
        productDOM.innerHTML =
            '<p class="error">there was a problem loading the product. Please try again later</p>'
            ;
    }
};

const displayProduct = (product) => {

    // company, colors, description, name:title, price, image(url:img)
    const {
        company,
        description,
        colors,
        name: title,
        price,
        image,
    } = product.fields;

    const { url: img } = image[0];
    document.title = title.toUpperCase();
    const formPrice = price / 100;

    // colors
    const colorsList = colors.map((color) => {
        return `<span class="product-color" style="background:${color}"></span>`
    }).join('');

    productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}"/>
        <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>$${formPrice}</span>
        <div class="colors">
            ${colorsList}
        </div>
        <p>${description}</p>
        <button class="btn">add to cart</button>
    </div>
    `;
}

const start = async () => {
    const data = await fetchProduct();
    displayProduct(data);
}

start();