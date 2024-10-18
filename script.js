function CalculatePrice() {
    let size = document.getElementById("size").value;
    let days = document.getElementById("numDays").value;
    let price = parseInt(size) * days;
    let tax = 0.47 * price;
    let total = price + tax;
    document.getElementById("price").textContent = `Price: $${price}`;
    document.getElementById("tax").textContent = `Tax: $${tax}`;
    document.getElementById("total").textContent = `Total: $${total}`;
}