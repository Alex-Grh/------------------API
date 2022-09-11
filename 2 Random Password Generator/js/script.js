let randomPass = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()<=>?@~`\\.\';:+=^*_-#|{}[]';
let out1 = document.getElementById("out-1");

function passValue(value) {
   return Math.floor(Math.random() * value);
}

let alertBox = document.querySelector('.alert-box');
let copyItem = document.querySelector('.copy');
function pasGenerator() {
   let lengthPass = document.getElementById('length-pass').value;
   document.getElementById("length-val-pass").textContent = lengthPass;
   let elem = '';

   for (let i = 0; i < lengthPass; i++) {
      let randomElement = passValue(randomPass.length);
      elem += randomPass.charAt(randomElement);
   }
   out1.value = elem;

}
copyItem.addEventListener('click', copyPassword);

function copyPassword() {
   out1.select();
   out1.setSelectionRange(0, 99999);
   document.execCommand('copy');
   // alert("Random password copied!");
   alertBox.classList.add('active');
   alertBox.innerHTML = 'Password <strong>' + 
   out1.value + '</strong> has been copied!';
}
pasGenerator();
