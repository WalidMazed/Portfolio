const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey"
    }
  ];
  
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  const updateQuote = () => {
    const quote = getRandomQuote();
    quoteElement.textContent = quote.quote;
    authorElement.textContent = quote.author;
  }
  
  newQuoteButton.addEventListener('click', updateQuote);
  
  updateQuote();
  