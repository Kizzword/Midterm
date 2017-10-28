// VARIABLES //
var menu = document.getElementById("menu");
var controlPanel = document.getElementById("controls");
var mainBG = document.getElementById("background");
var myURL = document.getElementById("url");
var myTitle = document.getElementById("titl");
var myDesc = document.getElementById("desp");
var bigTitle = document.getElementById("title");
var bigDesc = document.getElementById("desc");
var textCol = document.getElementById("color");
var myView = document.getElementById("display");







// FUNCTIONS //

function showMenuPanel(){
    controlPanel.style.bottom = 0;
}

function changeBG(keyNum){
    if (keyNum == 13){
        mainBG.style.backgroundImage = "url(" + myURL.value + ")"
    }
}

function changetextCol(){
    bigDesc.style.color = textCol.value;
    bigTitle.style.color = textCol.value;
}

//function reSizeImg(keyNum){
//    if(keyNum == 37) {
//        mainBG.style.backgroundPositionX = mainBG.style.backgroundPositionX - 10 + "px";
//    }
//    
//    if(keyNum == 39) {
//        mainBG.style.backgroundPositionX = myView.style.backgroundPositionX + 10 + "px";
//    }
//
//    if(keyNum == 38) {
//        mainBG.style.backgroundPositionY = myView.style.backgroundPositionY - 10 + "px";
//    }
//        
//    if(keyNum == 40) {
//        mainBG.style.backgroundPositionY = myView.style.backgroundPositionY + 10 + "px";
//    }
//    
//    if(keyNum == 107) {
//        mainBG.style.width = mainBG.style.width + 10 + "px";
//        mainBG.style.height = mainBG.style.height + 10 + "px";
//    }
//    
//    if(keyNum == 109) {
//        mainBG.style.width = mainBG.style.width - 10 + "px";
//        mainBG.style.height = mainBG.style.height - 10 + "px";
//    }
//}

function keyWords(keyNum){
    if(keyNum == 13 && myURL == "horse"){
        mainBG.style.backgroundImage = "url(img/bg1.jpg)"
    }
    if(keyNum == 13 && myURL == "night"){
        mainBG.style.backgroundImage = "url(img/bg2.jpg)"
    }
    if(keyNum == 13 && myURL == "mountain"){
        mainBG.style.backgroundImage = "url(img/bg3.jgp)"
    }
}

// SCRIPT //
menu.addEventListener("click", function(){
    showMenuPanel()
});

document.body.addEventListener("keyup", function(ev){
    changeBG(ev.keyCode);
})

myTitle.addEventListener("keyup", function(ev){
    bigTitle.innerHTML = myTitle.value;
})

myDesc.addEventListener("keyup", function(ev){
    bigDesc.innerHTML = myDesc.value;
})

document.body.addEventListener("change", function(){
    changetextCol();
})

document.body.addEventListener("keydown", function(ev){
    reSizeImg(ev.keyCode);
})

document.body.addEventListener("keyup", function(ev){
    keyWords(ev.keyCode);
})