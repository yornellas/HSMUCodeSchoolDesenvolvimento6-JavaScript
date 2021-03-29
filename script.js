let min = prompt("Digite um número qualquer")
let max = prompt("Digite um número maior do que o número anterior")

function verify(min, max){
    if(max < min){
        return alert("O número que você digitou deve ser maior do que o anterior")
    } else {
        alert("Pense em um número entre " +min +" e " +max)

        do {
            var guess = confirm("O número que você pensou é o " + exibir(min, max) +"?")
        } while (guess == false)
    }
}

function exibir(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    let random = Math.round(Math.random() * (max - min + 1) + min)
    return random
} 

verify(min, max)


