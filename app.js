var display = document.getElementById("displayinput")

function getbuttonvalue(btnvalue){
    display.value += btnvalue
}
function calculate(){
    var a = display.value
    var ans = eval(a)
    display.value = ans
}
function ClearAll(){
    display.value=""
}