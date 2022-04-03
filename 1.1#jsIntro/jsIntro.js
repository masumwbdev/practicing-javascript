function handleButton() {
    document.getElementById('demo').innerHTML = new Date();
}

function secondBtn(){
    document.getElementById('second-demo').innerHTML = "Hi This is changed, check it."
}

function imgOne(){
    document.getElementById('img-demo').src="./img/first.png"
}

function imgTwo(){
    document.getElementById('img-demo').src="./img/second.png"
}

function fontChange(){
    document.getElementById('font-demo').style.fontSize="28px"
}

function hideElem(){
    document.getElementById('demo-hide').style.display="none"
}

function showFunc(){
    document.getElementById('show-demo').style.display="block"
}