var slider = document.getElementById("myRange");
var slidevalue = document.getElementById("value");
slidevalue.innerHTML = slider.value;
var sortSelection;


for (i = 0; i < 5; i++) {
    var w = 200/5;
    var num2 = addPx(w);
    var n = Math.floor(Math.random() * 625) + 50;
    var num = addPx(n);
    var box = document.createElement("div");            
    box.className = "box";
    box.style.height = num;
    box.style.width = num2;
    var text = document.createTextNode(".");
    text.className = "label";    
    box.appendChild(text);      
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
            var w = 200/numBoxes;
            var num2 = addPx(w);
            var n = Math.floor(Math.random() * 600) + 30;
            var num = addPx(n);
            var box = document.createElement("div");            
            box.className = "box";
            box.style.height = num;
            box.style.width = num2;
            var text = document.createTextNode(".");
            text.className = "label";    
            box.appendChild(text);      
            var arraybox = document.getElementById("arraybox");            

            if ((i % 2) == 0) {
                arraybox.appendChild(box);
            } else if ((i % 2) == 1) {
                arraybox.prepend(box);
        }           
    }
}

myCollection = document.getElementsByClassName("box");


// Sorting Algorithm Prep Functions

function addPx (value) {
    var result = value.toString() + "px";
    return result;
}

function removePx (str) {
    var num = str.replace(/[^0-9]/g, ''); 
    return parseInt(num,10);  
}



async function Swap(x, y) {
    if (sortSelection = 0) {
    await sleep((-22)*(myCollection.length) + 1120);
    } else if (sortSelection = 1) {
        await sleep(25);
    }
    var temp = myCollection[x].style.height;
    myCollection[x].style.height = myCollection[y].style.height;
    myCollection[y].style.height = temp;
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// BubbleSort

async function BubbleSort() {
    var isSorted = 0;
    var lastUnsorted = myCollection.length - 1;
    sortSelection = 0;

        while (isSorted == 0) {
            isSorted = 1;
            for (i = 0; i < lastUnsorted; i++) {                
                a = removePx(myCollection[i].style.height);
                b = removePx(myCollection[i+1].style.height);
                             
                if (b > a) {   
                    myCollection[i].style.background = "green";
                    myCollection[i].style.color = "green";
                    myCollection[i+1].style.background = "red";
                    myCollection[i+1].style.color = "red";                                 
                    await Swap(i, i + 1);                                                  
                    isSorted = 0;
                    myCollection[i].style.background = "bisque";
                    myCollection[i].style.color = "bisque";
                    myCollection[i+1].style.background = "bisque";  
                    myCollection[i+1].style.color = "bisque";                                       
                }
                
            }
            myCollection[i].style.background = "cyan";
            myCollection[i].style.color = "cyan";
            lastUnsorted--;
        }
    for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.background = "cyan";
    myCollection[i].style.color = "cyan";
    }
}

// QuickSort

async function Partition(start,end) {
    var pivot = removePx(myCollection[end].style.height);
    var partitionIndex = start;

    for (i = start; i < end; i++) {
        if (removePx(myCollection[i].style.height) >= pivot) {
            myCollection[i].style.background = "red";
            myCollection[i].style.color = "red";
            myCollection[partitionIndex].style.background = "red";
            myCollection[partitionIndex].style.color = "red";
            await Swap(i, partitionIndex);
            myCollection[i].style.background = "bisque";
            myCollection[i].style.color = "bisque";
            myCollection[partitionIndex].style.background = "bisque"; 
            myCollection[partitionIndex].style.color = "bisque";            
            partitionIndex++;                
        }  
    }
    await Swap(partitionIndex, end);    
    return partitionIndex;
}

async function QuickSort(start,end) {
    if (start < end) {
        var partitionIndex = await Partition(start, end);
        await QuickSort(start, partitionIndex - 1);
        await QuickSort(partitionIndex + 1, end);        
    }    
}

function doQuickSort() {
    sortSelection = 1;
    QuickSort(0, myCollection.length - 1);    
}

// MergeSort 











    