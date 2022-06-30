const p = document.getElementById('p');



const quote = ["Bob The Builder", "Sasho", "aleksandar"]

let index = 0;
function generateQuote (){
    
    const quotes = quote[index];

    if(typeof quotes !== 'undefined'){
    for(let i = 0; i < quotes.length; i++){
        const parsedQuote = quotes[i];
        console.log(parsedQuote);
        p.innerHTML = quotes
    }
}else{
    getNewQuote()
}
}
function newQuote (){
    const btn = document.getElementById('up');
        btn.addEventListener('click', () =>{
            generateQuote()
            index++

        })
}
newQuote()


function getNewQuote(){
    index = 0;
    const quotes = quote[index];

    if(typeof quotes !== 'undefined'){
    for(let i = 0; i < quotes.length; i++){
        const parsedQuote = quotes[i];
        console.log(parsedQuote);
        p.innerHTML = quotes
    }
}
}
