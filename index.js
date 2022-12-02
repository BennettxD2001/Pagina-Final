const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener(('click'), () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('row-product')

//Aquí están todos los productos

const productsList = document.querySelector('container-items')

//Arreglo de pruductos agregados

let allProducts = []



productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent
 
        }
        
        allProducts = [...allProducts, infoProduct]
    }
    console.log(allProducts)
})

// mostrar HTML 

