const p = document.getElementById("p");
const author = document.getElementById('author')
async function getQuote(){
  const data = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  const respData = await data.json();
  console.log(respData.quotes[0].text);
  
  p.textContent = respData.quotes[0].text;
  author.textContent = respData.quotes[0].author
}
function newQuote() {
  const btn = document.getElementById("up");
  btn.addEventListener("click", () => {
    getQuote();
    btn.innerText = "Next quote";
    p.classList.add("visible");
    author.classList.add("visible");
  });
}
newQuote();

