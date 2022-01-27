const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ': ' ',
};


const StringSimbol = {
    '10': '.',
    '11': '-',
    '**': ' ',
    '00': '',
}


function decode(expr) {

    let arr = []

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }

    arr = arr
        .map(el => {

            let arr2 = []

            for (let i = 0; i < el.length; i += 2) {
                arr2.push(el.slice(i, i + 2))
            }
            return arr2
        })
        .map(elem => elem.map(item => StringSimbol[item]))
        .map(item => item.join(""))
        .map(item => MORSE_TABLE[item]).join("")

        return arr

}

module.exports = {
    decode
}