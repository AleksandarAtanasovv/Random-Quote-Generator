const p = document.getElementById('p');



const quote = ["Bob The Builder", "Sasho"]

let index = 0;
function generateQuote (){
    
    const quotes = quote[index];

    if(typeof quotes !== 'undefined'){
    for(let i = 0; i < quotes.length; i++){
        const parsedQuote = quotes[i];
        console.log(parsedQuote);
        if(quotes.length <= 0){
            index = 0;
        }
    }
}else{
    
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
