let qouteBtn = document.querySelector(".cta-btn")
let qouteText = document.querySelector(".quote-text")
let getQuote = ()=>{
    let url  = "https://api.quotable.io/quotes/random";
    let ajax = new  XMLHttpRequest();
    ajax.open("GET",url)
    ajax.onload = ()=>{
        let parsedData = JSON.parse(ajax.responseText);
        let quote = parsedData[0].content;
        console.log(quote)
        qouteText.innerHTML = quote;
    }
    ajax.send()
}
qouteBtn.addEventListener("click", getQuote);

