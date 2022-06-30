const p = document.getElementById("p");
const quote = [
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. – Earl Nightingale",
  "Just one small positive thought in the morning can change your whole day. – Dalai Lama",
  "Every object, every being, is a jar of delight. Be a connoisseur.- Rumi",
  "You’re braver than you believe and stronger than you seem, and smarter than you think. – A.A Mine",
  "How wonderful it is that nobody need wait a single moment before starting to improve the world. —Anne Frank",
  "Every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact. – Les Brown",
  "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction. – George Lorimer",
  "When you want something, all the universe conspires in helping you to achieve it. – Paulo Coelho",
];

let index = 0;
function generateQuote() {
  const quotes = quote[index];

  if (typeof quotes !== "undefined") {
    for (let i = 0; i < quotes.length; i++) {
      p.innerHTML = quotes;
    }
  } else {
    getNewQuote();
  }
}
function newQuote() {
  const btn = document.getElementById("up");
  btn.addEventListener("click", () => {
    generateQuote();
    index++;
    btn.innerText = "Next quote";
    p.classList.add("visible");
  });
}
function getNewQuote() {
  index = 0;
  const quotes = quote[index];

  if (typeof quotes !== "undefined") {
    for (let i = 0; i < quotes.length; i++) {
      p.innerHTML = quotes;
    }
  }
}
newQuote();
