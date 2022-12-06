let products = {
    data: [
      {
        productName: "IBIZA COUPLE 2012",
        category: "Carros",
        price: "$135,000.00",
        image: "imag/Ibiza.jpg",
      },
      {
        productName: "MAZDA HATCHBACK 2015",
        category: "Carros",
        price: "$204,000.00",
        image: "imag/Mazda3.jpg",
      },
      {
        productName: "HONDA ACCORD 2013",
        category: "Carros",
        price: "$210,000.00",
        image: "imag/Accord.jpg",
      },
      {
        productName: "MAZDA MX5 2008",
        category: "Carros",
        price: "$150,000.00",
        image: "imag/Mx5.jpg",
      },
      {
        productName: "NISSAN SENTRA 2011",
        category: "Carros",
        price: "$109,500.00",
        image: "imag/Sentra.jpg",
      },
      {
        productName: "SAAB 9-3 2005",
        category: "Carros",
        price: "$51,500.00",
        image: "imag/Saab.jpg",
      },
      {
        productName: "TOYOTA YARIS 2011",
        category: "Carros",
        price: "$108,500.00",
        image: "imag/Yaris.jpg",
      },
      {
        productName: "CHEVROLET SUBURBAN 2011",
        category: "Camionetas",
        price: "$238,500.00",
        image: "imag/Subu.jpg",
      },
      {
        productName: "VOLKSWAGEN GOL 2012",
        category: "Carros",
        price: "$98,500.00",
        image: "imag/Gol.jpg",
      },
      {
        productName: "SUZUKI SWIFT 2012",
        category: "Carros",
        price: "$128,500.00",
        image: "imag/Swift.jpg",
      },
      {
        productName: "FORD RAPTOR 2019",
        category: "Camionetas",
        price: "$1,178,500.00",
        image: "imag/raptor.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "Todos") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("Todos");
  };
