// Select color input
// Select size input

let size = document.getElementById('sizePicker')
let gridTable = document.getElementById('pixelCanvas')

function addColors(cell) {
    let color = document.getElementById('colorPicker').value;

    if (cell.style['background-color']) {
        cell.style['background-color'] = null;
    } else {
        cell.style['background-color'] = color;
    }
}

function makeGrid(h, w) {
    // This returns an HTMLCollection.  Which is not an Array
    // We need to loop over every element in the HTMLCollection
    // and call .remove() on each thing.
    //
    // We can do that using a for loop, or we can use a map.  But
    // the .map() function only works on Arrays.  And again, this is
    // an HTMLCollection.  Not an Array.
    let  gridR = document.getElementsByTagName('tr');

    // To turn this into an array, we can use the spread operator.
    // The spread operator is 3 periods: ...
    // After we've spread out the results, we can shove them back
    // into an array:
    // [...gridR]
    //
    // Now that we have an array, we can call the .map() function
    // and remove each item in the array
    // .map(element => element.remove())
    [...gridR].map(element => element.remove());

    for (let i = 0; i < h; i++) {
        let row = gridTable.insertRow(i);
        for (let n = 0; n < w; n++) {
            let cell = row.insertCell(n);
            cell.addEventListener('click', function(event) {
                addColors(cell);
            })
        }
    }
}

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (event) {
    event.preventDefault();

    let gridH = document.getElementById('inputHeight').value; 
    let gridW = document.getElementById('inputWidth').value;

    makeGrid(gridH, gridW);
})

