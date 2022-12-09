let filteredProducts = [...products];


const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
    // if statement
    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h5>Sorry, <strong>no products</strong> matched your search</h5>`;
        return;
    }

    productsContainer.innerHTML = filteredProducts
        .map(({ id, title, image, price }) => {
            return ` <article class="product" data-id="${id}">
            <img 
              src="${image}" class="product-img img" 
            />
            <footer>
              <h5 class="prodcut-name">${title}</h5>
              <span class="product-price">${price}</span>
            </footer>
          </article>`
        })
        .join('');
};

displayProducts();


// text filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
// keyup - fired when key released

form.addEventListener('keyup', () => {
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(inputValue);
    });
    displayProducts();
});

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(products.map((product) => product.company))
    ];
    companiesDOM.innerHTML = buttons
        .map((company) => {
            return `<button class="company-btn" data-id="${company}">${company}</button>`
        })
        .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('company-btn')) {
        if (el.dataset.id === 'all') {
            filteredProducts = [...products];
        }
        else {
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            });
        }
        searchInput.value = '';
        displayProducts();
    }
});