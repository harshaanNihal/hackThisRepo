const quotes = [
    {
        "quoteText": "The dream is already ended and we're already awake in the golden eternity.",
        "quoteAuthor": "Jack Kerouac"
    },
    {
        "quoteText": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "quoteAuthor": "Nelson Mandela"
    },
    {
        "quoteText": "The only thing that can save the world is the reclaiming of the awareness of the world. That's what poetry does.",
        "quoteAuthor": "Allen Ginsberg"
    },
    {
        "quoteText": "Everyone has a creative impulse, and has the right to create, and should.",
        "quoteAuthor": "Patti Smith"
    },
    {
        "quoteText": "For me, the lame part of the Sixties was the political part, the social part. The real part was the spiritual part.",
        "quoteAuthor": "Jerry Garcia"
    },
    {
        "quoteText": "It all depends on how we look at things, and not how they are in themselves.",
        "quoteAuthor": "Carl Jung"
    },
    {
        "quoteText": "The only way to support a revolution is to make your own.",
        "quoteAuthor": "Abbie Hoffman"
    },
    {
        "quoteText": "Ask not what your country can do for you- ask what you can do for your country.",
        "quoteAuthor": "JFK"
    },
    {
        "quoteText": "In spite of everything, I still believe that people are really good at heart.",
        "quoteAuthor": "Anne Frank"
    },
    {
        "quoteText": "Hate is baggage. Life's too short to be pissed off all the time. It's just not worth it.",
        "quoteAuthor": "American History X"
    },
    {
        "quoteText": "Wandering around our America has changed me more than I thought. I'm not me anymore. At least, I'm not the same me I was.",
        "quoteAuthor": "Che Guevara"
    },
    {
        "quoteText": "Whenever you find yourself on the side of the majority, it’s time to pause and reflect.",
        "quoteAuthor": "Mark Twain"
    }, 
    { 
        "quoteText": "Masses are always breeding grounds of psychic epidemics.",
        "quoteAuthor": "Carl Jung"
    },
    {    
        "quoteText": "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        "quoteAuthor": "Alan Watts"
    }
];

// Main Function
function quoteGenerator() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quote_section").innerHTML = quotes[randomNumber].quoteText;
    document.querySelector(".author_section").innerHTML = quotes[randomNumber].quoteAuthor;
}

// Selecting button tag
var button = document.querySelector(".btn");

// Event on button
button.addEventListener("click", quoteGenerator);




