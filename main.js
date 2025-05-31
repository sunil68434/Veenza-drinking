
let total = 0;
function addToCart(btn) {
    const price = parseInt(btn.parentElement.getAttribute('data-price'));
    total += price;
    document.getElementById("total").textContent = total;
}
function submitOrder() {
    alert("Order Successfully Submitted!");
}
