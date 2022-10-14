let keyAll = document.querySelectorAll('.key-all');

document.querySelector('.i-11').onkeydown = function () {
    activeKeyFunk();
    capsLockFunk()
};

document.querySelector('.i-11').onkeyup = activeKeyFunk;

function activeKeyFunk () {
    for (i = 0; i < keyAll.length; i++) {
        let topKeyAttribute = keyAll[i].getAttribute('data-key');
        if (event.code === topKeyAttribute) {          
            keyAll[i].classList.toggle('my-active');
        };

    }
}

let capsLockCount = 0;
function capsLockFunk () {
    if (event.code === 'CapsLock') {
        capsLockCount++;
        if (capsLockCount % 2 === 1) {
            document.querySelector('.caps-lock').classList.add('caps-lock-active');
        } else {
            document.querySelector('.caps-lock').classList.remove('caps-lock-active');
        };
    };
};
//-----------------------------------------------------------------------------
document.onkeypress = function(event){
   console.log(event);
}
