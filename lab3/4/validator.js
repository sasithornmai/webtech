let i = 1
function changeGraph() {
    i *= -1;
    if (i == -1) {
        document.getElementById("one").style.width = "90px";
        document.getElementById("two").style.width = "120px";
        document.getElementById("three").style.width = "100px";
        document.getElementById("four").style.width = "150px";
        document.getElementById("five").style.width = "80px";
    }
    else {
        document.getElementById("one").style.width = "70px";
        document.getElementById("two").style.width = "70px";
        document.getElementById("three").style.width = "70px";
        document.getElementById("four").style.width = "70px";
        document.getElementById("five").style.width = "70px";
    }
}