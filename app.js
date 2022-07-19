window.addEventListener("load", () =>{
    let bts = document.getElementsByClassName("bt")
    let display = document.getElementById("display")

    Array.from(bts).forEach((el) =>{
        el.addEventListener('click', () =>{
            if(el.value != '=' && el.value != 'C'){
                display.value += el.value
            }else if(el.value == '=' && display.value == ''){
                alert("Digite algum número!")
            }else if(el.value == 'C'){
                display.value = ''
            }else{
                display.value = eval(display.value)
            }
        })
    })
})