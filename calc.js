const displaying=document.getElementById("displaying");
function clear_display(){
displaying.value="";
}
function display(input){
 displaying.value+=input;
 displaying.scrollLeft=displaying.scrollWidth;
}
function calculate(){
try {
 let result=eval(displaying.value);
 displaying.value=result;
 displaying.style.textAlign="center";
} catch (error) {
    displaying.value="ERROR!";
}
}
function backspace(){
  displaying.value=displaying.value.slice(0, -1);
}