const showCartIdBtn = document.querySelector(".btn_menu");
const cartModal = document.getElementById("cartModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cartIdDisplay = document.getElementById("cartIdDisplay");
const cont = document.querySelector('.container')
const five = document.querySelector('.btn_one')
const all = document.querySelector('.btn_vse')

reload(arr, cont, Product)

five.onclick = () => {
    reload(arr.slice(0,5), cont, Product)
}
all.onclick = () => {
    reload(arr, cont, Product)
}





    function createCart(productImageSrc, productNameText, productPriceText) {
        const cart = document.createElement("div");
        cart.className = "cart";

        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productImage = document.createElement("img");
        productImage.src = productImageSrc;
        productImage.alt = productNameText;

        productDiv.append(productImage);

        
        const productName = document.createElement("p");
        productName.className = "product-name";
        productName.textContent = productNameText;
        
        productDiv.append(productName);

        const quantityDiv = document.createElement("div");
        quantityDiv.className = "quantity";

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";

        const quantitySpan = document.createElement("span");
        quantitySpan.textContent = "1";

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";

        quantityDiv.append(minusButton, quantitySpan, plusButton);

        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";

        const productPrice = document.createElement("div");
        productPrice.className = "price";
        productPrice.textContent = productPriceText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        detailsDiv.append(productPrice, removeButton);

        productDiv.append(quantityDiv, detailsDiv);

        cart.append(productDiv);

        return cart;
    }

    showCartIdBtn.addEventListener("click", function() {
        cartIdDisplay.innerHTML = '';

        const cart1 = createCart("./public/img/box.png", "Cozy Blanket", "$29.99");
        const cart2 = createCart("./public/img/box.png", "Cozy Blanket", "$29.99");

        cartIdDisplay.append(cart1, cart2);

        cartModal.classList.add("open");
        cartModal.style.display = 'block';
    });

    closeModalBtn.addEventListener("click", function() {
        cartModal.classList.remove("open");
        setTimeout(() => {
            cartModal.style.display = 'none';
        }, 300);
    });

