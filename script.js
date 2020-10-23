 // A function to Generate Random Number.
const randomNumberGenerator = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
};
// Wisdoms variable
const astrologyInformations = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Capricorn', 'Aquarius', 'Pisces'],
    fortune: ['Good Luck!', 'Mystories... Luck..', 'Very Good Luck!', 'Bad Luck!', 'Very Bad Luck!'],
    adivice: ['Take time to know yourself', 'Be patient and persistent', 'In order to get, you have to give', 'Be your best at all times.',
              'Don\'t be afraid of being afraid','Don\'t make decisions when you are angry or ecstatic', 'Don\'t worry what other people think',
               'Do what is right, not what is easy', ' Believe in yourself']
};
const timesOfBorn = {
    Aries: 'March 21 – April 20',
    Taurus: 'April 21 – May 20',
    Gemini: 'May 21 – June 21',
    Cancer: 'June 22 – July 22',
    Leo: 'July 23 – August 22',
    Virgo: 'August 23 – September 21',
    Libra: 'September 22 – October 22',
    Scorpio: 'November 23 – December 21',
    Capricorn: 'December 22 – January 20',
    Aquarius: 'January 21 – February 19',
    Pisces: 'February 20 – March 20',
 };
 // To store message data parts
let messageData = [];
for (let prop in astrologyInformations) {
    let keyValue = astrologyInformations[prop];
    let randomIndex = randomNumberGenerator(keyValue.length);
    messageData.push(keyValue[randomIndex]);
};
// Main Function. this will log the Message into the screen 
const astrologyMessage = (Array) => {
    let messageToShow = [];
    let birthOfdate = Array[0];
    messageToShow.push(`\u{1F468}\u{200D}\u{1F52C} As prediction Your Sign is "${Array[0]}" \u{1F607}\nSo,\u{1F476}You were born between ${timesOfBorn[birthOfdate]}`);
    messageToShow.push(`You are having a \u{1F449} ${Array[1]}`);
    messageToShow.push(`As Advice \u{1F483} "${Array[2]}"`);
    const theMessageString = messageToShow.join('\n');
    console.log(theMessageString);
};

astrologyMessage(messageData);

