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
    if (sortSelection == 0) {
    await sleep((-22)*(myCollection.length) + 1120);
    } else if (sortSelection == 1) {
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

async function merge(l, m, r) { 
        await sleep(200);
        // Find sizes of two subarrays to be merged 
        var n1 = m - l + 1; 
        var n2 = r - m;        
        
        

        /* Create temp arrays */
        let leftArray = new Array(n1);
        let rightArray = new Array(n2); 
  
        /*Copy data to temp arrays*/
        for (i = 0; i < n1; ++i) {                     
            leftArray[i] = removePx(myCollection[l + i].style.height);                        
        }
        
        for (j = 0; j < n2; ++j) {            
            rightArray[j] = removePx(myCollection[m + 1 + j].style.height);
             
        }
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays 
        var i = 0
        var j = 0; 
  
        // Initial index of merged subarry array 
        var k = l; 

        while ((i < n1) && (j < n2)) {             
            if (leftArray[i] >= rightArray[j]) {                                              
                myCollection[k].style.height = addPx(leftArray[i]);                              
                i++; 
                
            } else {
                
                myCollection[k].style.height = addPx(rightArray[j]); 
                
                j++; 
            }
            
            k++; 
        } 
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) {                  
            myCollection[k].style.height = addPx(leftArray[i]);            
            i++; 
            k++;                   
        } 
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) {                      
            myCollection[k].style.height = addPx(rightArray[j]); 
            j++; 
            k++;
                       
        }   
        
        
}

async function MergeSort(l, r) {
    await sleep(50);
    if (l < r) {
        myCollection[l].style.background = "red";                 
        var m = Math.floor((l + r) / 2);          
        await MergeSort(l, m);        
        await MergeSort(m + 1, r);
        myCollection[r].style.background = "green";
        await merge(l, m, r);
        myCollection[l].style.background = "cyan";
        myCollection[r].style.background = "cyan";         
    }
}

function doMergeSort() {
    sortSelection = 1;
    MergeSort(0, myCollection.length - 1);
}











    