
let totalCartItems = 0;
let cartItems = document.querySelector('.cart__items');
let modalCartItems = document.querySelector('.modal-cart-items');
let cartItemsArray = [];
let cartItemsArray2 = [];
let count = 0;
let itemImage;
let itemName;
let itemPrice;
let total;

if (totalCartItems === 0) {
    modalCartItems.innerHTML = `<p>No items in your cart</p>
                                            <p>Your favorite items are just a click way</p>`;
}

[...document.querySelectorAll('.BuyBtn')].forEach((item) => {
    item.addEventListener('click', (e) => {

        if (totalCartItems == 0) {
            modalCartItems.innerHTML = '';
        }

        totalCartItems++;

        total = 1;

        cartItemsArray.forEach(e => {
            total = total + e.count
        })

        if (totalCartItems != 0) {
            cartItems.textContent = `${totalCartItems} Items`;
        }

        itemName = e.target.parentNode.parentNode.firstElementChild.textContent.trim();
        itemImage = e.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.src;
        itemPrice = e.target.parentNode.firstElementChild.textContent.trim();


        function counter(arr, name) {
            const { length } = arr;
            const found = arr.some(el => el.productName === name);
            if (!found) {
                count = 1;
                arr.push({
                    count,
                    productName: name,
                    productImage: itemImage,
                    productPrice: itemPrice.replace(/[^0-9]/g, ''),
                    get productCost() {
                        return Number(this.count) * Number(this.productPrice);
                    }
                });
            } else {
                arr.forEach(el => {
                    if (el.productName == name) {
                        el.count = el.count + 1
                    }
                })
            }
            return arr;
        }

        counter(cartItemsArray, itemName)

    });
});



function sub(e) {
    e.preventDefault();
    let productName = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.textContent.trim();
    cartItemsArray.forEach(el => {
        if (el.productName == productName) {
            el.count = el.count - 1
        }
        if (el.count === 0) {
            console.log(e.target)
            e.target.disabled = true;
        }
    })

    modalCartItems.innerHTML = '';


    cartItemsArray.forEach(each => ui(each))
}

function add(e) {
    e.preventDefault();
    let productName = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.textContent.trim();
    cartItemsArray.forEach(el => {
        if (el.productName == productName) {
            el.count = el.count + 1
        }
    })

    total = 0;

    cartItemsArray.forEach(e => {
        total = total + e.count
    })

    modalCartItems.innerHTML = '';

    cartItemsArray.forEach(each => ui(each))
}

function closeModalBox() {
    document.querySelector('.section-modal-box').style.display = 'none';
}

function showModalBox() {
    document.querySelector('.section-modal-box').style.display = 'block';

    console.log(cartItemsArray)

    modalCartItems.innerHTML = '';

    cartItemsArray.forEach(each => ui(each))
}

let ui = (each) => {
    modalCartItems.innerHTML += `
                <div class="modal-cart-not-empty">
                <figure>
                    <img src="${each.productImage}" alt="Capsicum">
                </figure>
                <div class="modal-cart-items-details">
                    <div class="modal-cart-item-name">
                        <p>${each.productName}</p>
                    </div>
                    <div class="modal-cart-item-quantity">
                        <form action="">
                            <button class="sub" onclick = "sub(event)">-</button>
                            <label for=""> ${each.count} </label>
                            <button class="add" onclick = "add(event)">+</button>
                            <label for=""> X ${each.productPrice}</label>
                        
                        </form>
                    </div>
                </div>
                <div class="modal-cart-item-price">
                    MRP Rs. ${each.productCost}
                </div>
            </div>
             `
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
