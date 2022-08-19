let addProduct = document.querySelector(".plus");
let reduceProduct = document.querySelector(".minus");
let addToCart = document.querySelector(".add-to-cart");

addProduct.addEventListener("click", function () {
  let productQuantity = document.querySelector("#quantity");
  productQuantity.innerHTML = Number(productQuantity.innerHTML) + 1;
});
reduceProduct.addEventListener("click", function () {
  let productQuantity = document.querySelector("#quantity");
  if (productQuantity.innerHTML > 0) {
    productQuantity.innerHTML = Number(productQuantity.innerHTML) - 1;
  }
});
let cartQuantity = document.querySelector(".cart-quantity");

// When add to cart is clicked

addToCart.addEventListener("click", function (e) {
  let productQuantity = document.querySelector("#quantity");
  if (productQuantity.innerHTML > 0) {
    cartQuantity.innerHTML = productQuantity.innerHTML;
    cartQuantity.style.display = "block";
  }
});

// The Cart logo clicked

let cart = document.querySelector(".cartLogo");
let emptyCartDisplay = document.querySelector(".empty-cart");
let filledCartDisplay = document.querySelector(".filled-cart");
let spanQuantity = document.querySelector("#cart-quantity");
let totalAmount = document.querySelector("#cart-sum");

cart.addEventListener("click", () => {
  if (cartQuantity.innerHTML == 0) {
    emptyCartDisplay.removeAttribute("hidden");
  } else {
    spanQuantity.innerHTML = cartQuantity.innerHTML;
    totalAmount.innerHTML = "$" + Number(spanQuantity.innerHTML) * 125 + ".00";
    filledCartDisplay.removeAttribute("hidden");
  }
});

// When the cart card is displayed

function close() {
  this.setAttribute("hidden", "true");
}
emptyCartDisplay.addEventListener("click", close);
filledCartDisplay.addEventListener("click", close);

if (innerWidth >= 800) {
  let imageDisplay = document.querySelector(".display-image");
  let modalDisplay = document.querySelector(".overlay");
  imageDisplay.addEventListener("click", function () {
    modalDisplay.style.display = "block";
  });
}

// closing the overlay modal
let closeModal = (father) => {
  father.style.display = "none";
};

// The next and previous buttons on the image
let overlayImageDisplay = document.querySelector(".overlay-active-image");
let modalThumbnails = document.querySelector(".modal-thumbnails").children;
let previews = document.querySelector(".previews").children;

let activeImage = 0;
let images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let next = (sibling) => {
  if (activeImage < images.length - 1) {
    activeImage++;
    sibling.setAttribute("src", images[activeImage]);
  }
};
let previous = (sibling) => {
  if (activeImage > 0) {
    activeImage--;
    sibling.setAttribute("src", images[activeImage]);
  }
};

let activeArray = [0];
for (let x = 0; x < modalThumbnails.length; x++) {
  modalThumbnails[x].addEventListener("click", function (e) {
    activeArray.push(x);
    // i have to come back to this after i'm done!
    modalThumbnails[activeArray.at(-2)].style.border = "none";
    overlayImageDisplay.setAttribute("src", images[x]);
    let partName = modalThumbnails[x].getAttribute("src").split("/");
    partName = partName[2].split("-");
    partName = partName[2];
    if (overlayImageDisplay.getAttribute("src").includes(partName)) {
      modalThumbnails[x].style.border = "2px solid orange";
    }
  });

  // for the thumbnails on the default page
  previews[x].addEventListener("click", function (e) {
    activeArray.push(x);
    // i have to come back to this after i'm done!
    previews[activeArray.at(-2)].style.border = "none";
    imageDisplay.setAttribute("src", images[x]);
    let partName = previews[x].getAttribute("src").split("/");
    partName = partName[2].split("-");
    partName = partName[2];
    if (imageDisplay.getAttribute("src").includes(partName)) {
      previews[x].style.border = "2px solid orange";
    }
  });
}

// The Hamburger Menu
let menu = document.querySelector(".hamburger-menu");
menu.addEventListener("click", function () {
  let display = document.querySelector(".nav");
  display.style.display = "block";
});
