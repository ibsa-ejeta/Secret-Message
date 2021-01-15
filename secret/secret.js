
const para = document.querySelector("p");
// console.log(window.location.href)
let lastText = (window.location.href.slice(89));
// console.log(lastText)
function decrypt(message = '', key = ''){
    let code = CryptoJS.AES.decrypt(message, key);
    let decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
let received = decrypt(lastText);
received = decodeURIComponent(received.replace(/\+/g, ' ').slice(7));
// console.log(received)
para.innerHTML = received;