var buttons = document.querySelectorAll(".btn");
var input = document.querySelector("#input-box");

let string = "";

for (let btn of buttons) {
    btn.addEventListener("click", (event) => {
        console.log(btn);
        
        if (event.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }

        else if (event.target.innerHTML == "C") {
            string = "";
            input.value = string;
        }
        
        else {
            string = string + event.target.innerHTML;
            input.value = string;
        }

    
    })
} 
