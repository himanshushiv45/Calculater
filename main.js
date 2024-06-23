const display = document.getElementById("display");


let readValue = (input) => {
    // console.log(input)
    // console.log(display.value + input )
    display.value = display.value + input

}


function clearAll() {
    display.value = "";
}


function calculate() {
    try {
        // display.value = eval(4+5+8)
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"

    }

}


