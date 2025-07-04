let phn = document.getElementById('phn');
let link2 = document.getElementById('link2');

phn.addEventListener('touchend', function () {
    link2.style.display = "flex";
});
window.addEventListener('scroll', function () {
    link2.style.display = "none";
});