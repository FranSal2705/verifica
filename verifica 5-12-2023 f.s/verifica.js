window.addEventListener("DOMContentLoaded", e => {
    let cleanDisplay = false;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
            let display = document.querySelector(`#display`);
            if(cleanDisplay == false) {
                cleanDisplay = true;
                display.innerText = "";
            }
            let target = e.target;
            console.log(`hai cliccato su: ${target.id}`);
            if(target.id == -1){
                const op = display.innerText;
                const result = eval(op);
                display.innerText += "="
                display.innerText += result;
                cleanDisplay = false;
            } else {
                display.innerText += target.id
            }
            
        });
    });
});