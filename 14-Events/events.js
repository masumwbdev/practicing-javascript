function clickBtn(){
    console.log(new Date().toDateString());
};

const thisBtn = () => {
    document.getElementById('thisEvent').innerText = new Date();
}

const mouseMove = () => {
    document.getElementById('mouse-move').innerText = "mouse is moving";
}
const dblClick = () => {
    document.getElementById('dbl-click').innerText = "double clicked";
}
const mouseLeave = () => {
    document.getElementById('mouse-leave').innerText = "Mouse leave";
}
const hitLoad = () => {
    document.getElementById('hit-load').innerText = "Load";
}