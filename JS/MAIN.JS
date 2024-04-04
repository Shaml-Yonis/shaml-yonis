let x = 0
document.getElementById("menu").onclick = ()=>{
    if (x==0) {
        document.getElementById("bar-links").style.display = "flex"
        x=1
    }
    else{
        document.getElementById("bar-links").style.display = "none"
        x=0
    }
}