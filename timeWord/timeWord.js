function timeWord(time){
    
    const [hour, minute] = time.split(':').map(Number);

    const hourWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];

    const minuteWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", ];

    let ampm;
    let minuteWord;

    if (hour < 12){
        ampm = 'am';
    } else {
        ampm = 'pm';
    }

    if (hour === 0 && minute === 0){
        return "midnight";
    }

    if (hour === 12 && minute === 0){
        return "noon"
    }

    const hourWord = hourWords[hour %12]

    if(minute < 10){
        minuteWord = `oh ${minuteWords[minute - 1]}`
    } else {
        minuteWord = minuteWords[minute - 1]
    }

    return `${hourWord} ${minuteWord} ${ampm}`    
}

module.exports = {
    timeWord
};


