let randomPass = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-';
let out1 = document.getElementById("out-1");

function passValue(value) {
   return Math.floor(Math.random() * value);
}

function pasGenerator() {
   let lengthPass = document.getElementById('length-pass').value;
   document.getElementById("length-val-pass").textContent = lengthPass;
   let elem = '';

   for (let i = 0; i < lengthPass; i++) {
      let randomEl = passValue(randomPass.length);
      elem += randomPass.charAt(randomEl);
   }
   out1.value = elem;

}

function copyPassword() {
   out1.select();
   document.execCommand('copy');
   alert("Random password copied!");
}
pasGenerator();