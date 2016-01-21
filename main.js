var deck = [];
var hand = [];
var ranks = {
    1  : 'A',
    2  : '2',
    3  : '3',
    4  : '4',
    5  : '5',
    6  : '6',
    7  : '7',
    8  : '8',
    9  : '9',
    10 : '10',
    11 : 'J',
    12 : 'Q',
    13 : 'K'
};
var suits = {
    1: 'Hearts',
    2: 'Clubs',
    3: 'Spades',
    4: 'Diamonds'
};
var validations = {
    NOTHING : "You don't have anything bruh.",
    PAIR : "You have a pair.",
    TWO_PAIR : "You have two pair.",
    THREE_OF_A_KIND : "You have a three of a kind.",
    STRAIGHT : "You have a straight.",
    FLUSH : "You have a flush!",
    FULL_HOUSE : "You have a full house!",
    FOUR_OF_A_KIND : "You have a four of a kind!",
    STRAIGHT_FLUSH : "You have a straight flush! Go to Vegas!"
}

var card1 = document.getElementById('js-card1');
var card2 = document.getElementById('js-card2');
var card3 = document.getElementById('js-card3');
var card4 = document.getElementById('js-card4');
var card5 = document.getElementById('js-card5');

//This bad boy makes the deck in order ace-king by suit.
function makeDeck(){
    for (i = 1; i <= 13; i++) {
        // placeholder for the current rank in the loop
        var rank = ranks[i];

        for (j = 1; j <= 4; j++){
            // placeholder for the current suit in the second loop
            var suit = suits[j];

            // This creates the card that we will add to the deck. 
            // It takes the rank variable and adds it as a key value
            // pair and does the same with the suit variable. 
            var insertCard = { RANK : rank, SUIT : suit };

            // Pushes the card generated above in to the deck array
            // making a complete deck in order.
            deck.push(insertCard);
        }
    }
}

// This is the Fisher-Yates (aka Knuth) Shuffle. Find more about 
// it here : https://github.com/coolaj86/knuth-shuffle
function shuffleDeck(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// This function replaces the inner HTML to show a random card.
// The random card is placed into an HTML string that will spit
// out in the the DOM. The reason for this is to have access
// to the styles on their classes.
function dealCard(){
    if (card1.innerHTML === " ") {
        card1.innerHTML = "<h1 class=\"js-CardRank\">" + deck[0].RANK + "</h1><h2 class=\"js-cardSuit\">" + deck[0].SUIT + "</h2>";
        hand[0] = deck[0]
    } else if (card2.innerHTML === " ") {
        card2.innerHTML = "<h1 class=\"js-CardRank\">" + deck[1].RANK + "</h1><h2 class=\"js-cardSuit\">" + deck[1].SUIT + "</h2>";
        hand[1] = deck[1]
    } else if (card3.innerHTML === " ") {
        card3.innerHTML = "<h1 class=\"js-CardRank\">" + deck[2].RANK + "</h1><h2 class=\"js-cardSuit\">" + deck[2].SUIT + "</h2>";
        hand[2] = deck[2]
    } else if (card4.innerHTML === " ") {
        card4.innerHTML = "<h1 class=\"js-CardRank\">" + deck[3].RANK + "</h1><h2 class=\"js-cardSuit\">" + deck[3].SUIT + "</h2>";
        hand[3] = deck[3]
    } else if (card5.innerHTML === " "){
        card5.innerHTML = "<h1 class=\"js-CardRank\">" + deck[4].RANK + "</h1><h2 class=\"js-cardSuit\">" + deck[4].SUIT + "</h2>";
        hand[4] = deck[4]
    }
}

// This function clears all the inner html to redeal a hand.
function clearHand(){
    card1.innerHTML = " ";
    card2.innerHTML = " ";
    card3.innerHTML = " ";
    card4.innerHTML = " ";
    card5.innerHTML = " ";
    hand = []; // makes sure the next hand isn't evaluated with same cards
    shuffleDeck(deck); // shuffles so they do not get the same hand.
}

// This function notifies the user what hand they have
function checkHand() {
    var c1r = hand[0].RANK; // card one rank
    var c1s = hand[0].SUIT; // card one suit
    var c2r = hand[1].RANK; //  ''   ''   ''
    var c2s = hand[1].SUIT;
    var c3r = hand[2].RANK;
    var c3s = hand[2].SUIT;
    var c4r = hand[3].RANK;
    var c4s = hand[3].SUIT;
    var c5r = hand[4].RANK;
    var c5s = hand[4].SUIT;

    // STRAIGHT FLUSH POSSIBILITIES
    // MAYBE SOME TIME SOON

    // FOUR OF A KIND POSSIBILITIES
    if ((c1r === c2r && c1r === c3r && c1r === c4r) || (c1r === c2r && c1r === c3r && c1r === c5r) || (c2r === c3r && c2r === c4r && c2r === c5r)) {
        var response = validations.FOUR_OF_A_KIND;
        alert(response);
    }
    // FULL HOUSE POSSIBILITIES
    if (((c1r === c2r && c1r === c3r) || (c1r === c2r && c1r === c4r) || (c1r === c2r && c1r === c5r) || (c1r === c3r && c1r === c4r) || (c1r === c3r && c1r === c5r) || (c1r === c4r && c1r === c5r) || (c2r === c3r && c2r === c4r) || (c2r === c3r && c2r === c5r) || (c2r === c4r && c2r === c5r) || (c3r === c4r && c3r === c5r)) && (c1r === c2r || c1r === c3r || c1r === c4r || c1r === c5r || c2r === c3r || c2r === c4r || c2r === c5r || c3r === c4r ||  c3r === c5r || c4r === c5r)) {
        var response = validations.THREE_OF_A_KIND;
        alert(response);
    }
    // FLUSH POSSIBILITIES
    else if (c1s === c2s && c1s === c3s && c1s === c4s && c1s === c5s) {
        var response = validations.FLUSH;
        alert(response);
    }

    // STRAIGHT POSSIBILITIES


    // THREE OF A KIND POSSIBILITIES
    else if ((c1r === c2r && c1r === c3r) || (c1r === c2r && c1r === c4r) || (c1r === c2r && c1r === c5r) || (c1r === c3r && c1r === c4r) || (c1r === c3r && c1r === c5r) || (c1r === c4r && c1r === c5r) || (c2r === c3r && c2r === c4r) || (c2r === c3r && c2r === c5r) || (c2r === c4r && c2r === c5r) || (c3r === c4r && c3r === c5r)) {
        var response = validations.THREE_OF_A_KIND;
        alert(response);
    }
    // TWO PAIR POSSIBILITIES
    else if ((c1r === c2r || c1r === c3r || c1r === c4r || c1r === c5r || c2r === c3r || c2r === c4r || c2r === c5r) && (c3r === c4r ||  c3r === c5r || c4r === c5r)) {
        var response = validations.TWO_PAIR;
        alert(response);
    }
    // PAIR POSSIBILITIES
    else if (c1r === c2r || c1r === c3r || c1r === c4r || c1r === c5r || c2r === c3r || c2r === c4r || c2r === c5r || c3r === c4r ||  c3r === c5r || c4r === c5r) {
        var response = validations.PAIR;
        alert(response);
    }
    else {
        var response = validations.NOTHING;
        alert(response);
    }
}

makeDeck(); // makes the deck.
shuffleDeck(deck); // shuffles it once to avoid cheaters...
document.getElementById('js-shuffleBtn').onclick = shuffleDeck(deck);
document.getElementById('js-dealBtn').onclick = dealCard;
document.getElementById('js-clearHand').onclick = clearHand;
document.getElementById('js-checkHand').onclick = checkHand;

