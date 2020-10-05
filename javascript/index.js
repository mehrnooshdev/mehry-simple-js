document.getElementById('date').innerHTML = new Date().toDateString();

window.onload = function () {
    debugger;
    alert('Hello Mehry');

    functionArraysCars();
    functionArraysFruits();
    functionArraysFruitsWithBucleFor();

};

function functionArraysCars() {
    debugger;
    /* https://www.w3schools.com/js/js_arrays.asp */
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("cars").innerHTML = cars;

    var x = cars.length;   // The length property returns the number of elements
    var y = cars.sort();   // The sort() method sorts arrays
}

function functionArraysFruits() {
    debugger;
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(fruit => {
        text += setFruit(fruit);
    });
    text += "</ul>";
    debugger;
    document.getElementById("fruits").innerHTML = text;

}

function setFruit(value) {
    debugger;
    return "<li>" + value + "</li>";
}

function functionArraysFruitsWithBucleFor() {
    var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("fruitsBucleFor").innerHTML = text;
}