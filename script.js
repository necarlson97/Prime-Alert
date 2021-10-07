var c;
window.onload = function() {
    c = document.getElementById("canvas");

    setInterval(checkPrime, 1);
}

function checkPrime() {
    var t = + new Date();
    if(isPrime(t)) document.body.style.backgroundColor = 'white';
    else document.body.style.backgroundColor = 'black';
}

function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++)
        if(n % i === 0) return false; 
    return n !== 1;
}
