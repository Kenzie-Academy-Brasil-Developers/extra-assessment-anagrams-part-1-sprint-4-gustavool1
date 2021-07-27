function getAnagramsOf(str){
    let palavrasCertas = []
    let strOrdenada =str.toLowerCase().split("").sort().join("").trim();
    for(let i=0; i<palavras.length; i++){
        let palavraOrdenada = palavras[i].split("").sort().join("").trim()
        if(palavraOrdenada === strOrdenada){
            palavrasCertas.push(palavras[i])
        }
        
    }
   return palavrasCertas
}
let p = document.createElement("p")
let btn = document.getElementById("findButton")
btn.addEventListener("click", function(){
    let resContent = document.getElementById("resContent")
    let txt = document.getElementById("input").value
    let res = getAnagramsOf(txt).join(", ")
    
    p.innerHTML = res
    resContent.appendChild(p)
})



