let cart = localStorage.getItem("cart") || 0;

function updateCart() {
    let cartBox = document.getElementById("cart");
    if(cartBox){
        cartBox.innerText = "Cart: " + cart;
    }
}

function buy() {
    cart++;
    localStorage.setItem("cart", cart);
    alert("Added to cart!");
    updateCart();
}

updateCart();

function register(e){
    e.preventDefault();

    let name = document.getElementById("reg_name").value;
    let pass = document.getElementById("reg_pass").value;

    localStorage.setItem("user", name);
    localStorage.setItem("pass", pass);

    alert("Register success ðŸ’•");
    window.location.href = "login.html";
}


function login(e){
    e.preventDefault();

    let name = document.getElementById("log_name").value;
    let pass = document.getElementById("log_pass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(name === savedUser && pass === savedPass){
        alert("Login success ðŸ’–");
        window.location.href = "diffclass.html";
    } else {
        alert("Wrong username or password â Œ");
    }
}



function showUser(){
    let user = localStorage.getItem("user");
    let box = document.getElementById("user");

    if(box){
        box.innerText = "Hello, " + user + " ðŸ °";
    }
}