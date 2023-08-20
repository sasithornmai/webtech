let i = 0;
function changesrc() {
    i++
    if (i == 0) {
        document.getElementById('image1').src = "http://10.0.15.20/312lab3/images/1.png";
        document.getElementById('image2').src = "http://10.0.15.20/312lab3/images/2.png";
        document.getElementById('image3').src = "http://10.0.15.20/312lab3/images/3.png";
        document.getElementById('image4').src = "http://10.0.15.20/312lab3/images/4.png";
    }
    if (i == 1) {
        document.getElementById('image1').src = "http://10.0.15.20/312lab3/images/3.png";
        document.getElementById('image2').src = "http://10.0.15.20/312lab3/images/1.png";
        document.getElementById('image3').src = "http://10.0.15.20/312lab3/images/4.png";
        document.getElementById('image4').src = "http://10.0.15.20/312lab3/images/2.png";
    }
    if (i == 2) {
        document.getElementById('image1').src = "http://10.0.15.20/312lab3/images/4.png";
        document.getElementById('image2').src = "http://10.0.15.20/312lab3/images/3.png";
        document.getElementById('image3').src = "http://10.0.15.20/312lab3/images/2.png";
        document.getElementById('image4').src = "http://10.0.15.20/312lab3/images/1.png";
    }
    if (i == 3) {
        document.getElementById('image1').src = "http://10.0.15.20/312lab3/images/2.png";
        document.getElementById('image2').src = "http://10.0.15.20/312lab3/images/4.png";
        document.getElementById('image3').src = "http://10.0.15.20/312lab3/images/1.png";
        document.getElementById('image4').src = "http://10.0.15.20/312lab3/images/3.png";
        i = -1;
    } 
}