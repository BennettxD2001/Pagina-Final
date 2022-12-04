const btnDeseos = document.querySelector('.container-deseos-icon');
const containerDeseosProducts = document.querySelector(
    '.container-deseos-products'
);

btnCart.addEventListener('click', () => {
    containerDeseosProducts.classList.toggle('hidden-deseos');
});

/* ========================= */
const deseosInfo = document.querySelector('.deseos-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const deseosEmpty = document.querySelector('.deseos-empty');
const deseosTotal = document.querySelector('.deseos-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-deseos')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// Funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        deseosEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        deseosTotal.classList.add('hidden');
    } 

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('deseos-product');

        containerProduct.innerHTML = `
            <div class="info-deseos-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-deseos">${product.title}</p>
                <span class="precio-producto-deseos">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};

