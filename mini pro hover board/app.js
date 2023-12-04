let container = document.querySelector(".container");
let SQURE = 500;
let color = ['#e74c3c','#8e44ad','#349db','#e67e22','#2ecc71'];

for(let i = 0; i<SQURE;i++) {
    let squre = document.createElement("div");
    squre.classList.add("squre");
    squre.addEventListener("mouseover",()=> addcolor(squre));
    squre.addEventListener("mouseout",()=> removecolor(squre));

    container.appendChild(squre);
}

function addcolor(e) {
let pickColor = colorpicker();
e.style.backgroundColor = pickColor;
e.style.boxShadow = `0 0 10px ${pickColor} `;

}
function colorpicker() {
    return color[Math.floor(Math.random() * color.length )];
}
function removecolor(e){
    e.style.backgroundColor = '#1d1d1d';
    e.style.boxShadow = `0 0 2px #000`;
}
