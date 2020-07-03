var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;

}
slider.addEventListener("mousemove", function(){
   var x = slider.value;
   var color = 'linear-gradient(90deg, rgb(29,185,84)' + x + '%, rgb(214,214,214)' + x + '%)';
   slider.style.background = color; 

});




var sliders = document.getElementById("myRanges");
var outputs = document.getElementById("values");

output.innerHTML = sliders.value;

sliders.oninput = function(){
    output.innerHTML = this.values;

}
sliders.addEventListener("mousemove", function(){
   var y = sliders.value;
   var color = 'linear-gradient(90deg, rgb(29,185,84)' + y + '%, rgb(214,214,214)' + y + '%)';
   sliders.style.background = color; 

});
