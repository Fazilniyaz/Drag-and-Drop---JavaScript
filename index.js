var lists = document.getElementsByClassName("lists")
var left = document.getElementById("left")
var right = document.getElementById("right")

for(list of lists){
    list.addEventListener("dragstart",function(e){

        var selected = e.target;

        right.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        right.addEventListener("drop",function(e){
            right.appendChild(selected)
            selected = null;
        });
        left.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        left.addEventListener("drop",function(e){
            left.appendChild(selected)
            selected = null;
        })
    })
}