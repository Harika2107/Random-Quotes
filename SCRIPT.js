//data
const Quotes=[
    {
        quote:`life is what happens when you're busy making other plans`,
        author:'John Lennon'
    },
    {
        quote:`Get busy living or get busy dying.`,
        author:'Stephen King'
    },
    {
        quote:`You only live once, but if you do it right, once is enough.`,
        author:'Mae West'
    },
    {
        quote:`Many of life’s failures are people who did not realize how close they were to success when they gave up.`,
        author:'Thomas A. Edison'
    },
    {
        quote:`If you want to live a happy life, tie it to a goal, not to people or things`,
        author:'Albert Einstein'
    },
    {
        quote:`Never let the fear of striking out keep you from playing the game.`,
        author:'Babe Ruth'
    },
    {
        quote:`Money and success don’t change people; they merely amplify what is already there.`,
        author:'Will Smith'
    },
    {
        quote:`“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.`,
        author:'Henry Ford'
    },
    {
        quote:`If life were predictable it would cease to be life, and be without flavor`,
        author:'Eleanor Roosevelt'
    },
    {
        quote:`Not how long, but how well you have lived is the main thing`,
        author:'Seneca'
    },
    {
        quote:`Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking`,
        author:'Steve Jobs'
    },




]



//accessing the elements
const DisplayElem=document.getElementById('display');
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('Generate');

//function to generate different quotes
//normal function
const RandomQuote=()=>{
    //logic to generate random quote
    let index=Math.floor(Math.random()*(Quotes.length))
    //to display the output of the quote
    DisplayElem.innerHTML=Quotes[index].quote
    //to display the output of the author
    AuthorElem.innerHTML='~'+Quotes[index].author

}
//button functionality
Btn.addEventListener('click',RandomQuote)