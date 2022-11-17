window.onresize = function() {
    if(window.screen.width < 768){
        let ulTag = document.getElementById("menu-row").style.display = "none";
    }else{
        let ulTag = document.getElementById("menu-row").style.display = "block";
    }
};

