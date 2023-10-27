function init() {
    var btn = document.getElementById("btn");
    btn.onclick = convert_button_click;
}

function convert_button_click() {
    var USD = prompt("Nhap USD: ");
    console.log(USD);
}

window.onload = init;