let input = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click", () => {
    input.value = GeneretPassword(8);
})

function GeneretPassword(lenth = 8){
    let chartset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    let password = '';

    for(let i = 0; i < lenth; ++i){
        let at = Math.floor(Math.random() * (chartset.length + 1));

        password += chartset.charAt(at);
    } 

    return password;

}
