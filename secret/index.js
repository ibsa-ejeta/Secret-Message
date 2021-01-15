// const input = document.querySelector("first");
// console.log(input)
const text = document.querySelector(".first");
const btn = document.querySelector("button");
const form = document.querySelector(".form");
const secUrl = document.querySelector(".secretUrl");

function encrypt(message = '', key = ''){
    let message1 = CryptoJS.AES.encrypt(message, key);
    return message1.toString();
}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let name = text.name;
    let value = text.value;
    value = encodeURIComponent(value);
    let lastValue = `${name}=${value}`
    let send = encrypt(lastValue);
    // console.log(send);
    // console.log(inside);
    form.style.display = "none";
    secUrl.innerHTML = `<h1>Share this link with a friend</h1>
                        
                        <p>http://127.0.0.1:5500/secret.html?${send}</p>`;
})

