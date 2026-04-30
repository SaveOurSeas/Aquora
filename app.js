let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    save();
}

function removeItem(name) {
    cart = cart.filter(i => i.name !== name);
    save();
}

function changeQty(name, delta) {
    let item = cart.find(i => i.name === name);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) removeItem(name);

    save();
}

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
