var slider = document.getElementById("myRange");
var slidevalue = document.getElementById("value");

slidevalue.innerHTML = slider.value;

for (i = 0; i < 5; i++) {
    var w = 730/5;
    var num2 = w.toString() + "px";
    var n = Math.floor(Math.random() * 625);
    var num = n.toString() + "px";
    var box = document.createElement("div");            
    box.className = "box";
    box.style.height = num;
    box.style.width = num2;      
    var arraybox = document.getElementById("arraybox");
    arraybox.appendChild(box);
}

slider.oninput = function() {
    slidevalue.innerHTML = this.value;
    numBoxes = this.value;
    
    var obj = document.getElementsByClassName("box");

    while(obj[0]) {
        obj[0].parentNode.removeChild(obj[0]);
    }

    for (i = 0; i < numBoxes; i++) {
            var w = 730/numBoxes;
            var num2 = w.toString() + "px";
            var n = Math.floor(Math.random() * 625);
            var num = n.toString() + "px";
            var box = document.createElement("div");            
            box.className = "box";
            box.style.height = num;
            box.style.width = num2;      
            var arraybox = document.getElementById("arraybox");            

            if ((i % 2) == 0) {
                arraybox.appendChild(box);
            } else if ((i % 2) == 1) {
                arraybox.prepend(box);
        }           
    }
}






    