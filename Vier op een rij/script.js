//CURRENTLY - THIS ALLOWS ME TO 'ACTIVATE' CELLS, BUT THEY DON'T 'DROP' TO THE BOTTOM.



var col1 = document.getElementById("tr1");
var col2 = document.getElementById("tr1");

var cells1 = col1.getElementsByClassName("cell");


for (var i = 0; i < cells1.length; i++) {
    cells1[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        /*if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }*/

        this.className += " active";
    });
};