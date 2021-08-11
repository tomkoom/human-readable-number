module.exports = function toReadable(number) {
    readable = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    res = '';
    numberArr = number.toString().split('');

    if (number < 20) {
        res = readable[number];

    } else if (number < 100) {
        // number ends with zero
        if (+numberArr[numberArr.length - 1] === 0) {
            res = readable[18 + (+numberArr[0])];

            // number does not end with zero
        } else {
            res = readable[18 + (+numberArr[0])] + ' ' + readable[+numberArr[1]];
        }

        // 3-digit number
    } else {
        // 3-digit number ends with two zeros
        if (numberArr[1] + numberArr[2] === '00') {
            res = readable[+numberArr[0]] + ' ' +
                readable[readable.length - 1];

            // n01-n09
        } else if (+numberArr[1] === 0) {
            res = readable[+numberArr[0]] + ' ' +
                readable[readable.length - 1] + ' ' +
                readable[+numberArr[2]];

            // n10-n19
        } else if (+numberArr[1] === 1) {
            res = readable[+numberArr[0]] + ' ' +
                readable[readable.length - 1] + ' ' +
                readable[+(numberArr[1] + numberArr[2])];

            // 3-digit number ends with one zero
        } else if (+numberArr[numberArr.length - 1] === 0) {
            res = readable[+numberArr[0]] + ' ' +
                readable[readable.length - 1] + ' ' +
                readable[18 + (+numberArr[1])];

            // 3-digit number does not end with zero
        } else {
            res = readable[+numberArr[0]] + ' ' +
                readable[readable.length - 1] + ' ' +
                readable[18 + (+numberArr[1])] + ' ' +
                readable[+numberArr[2]];
        }
    }

    return res;
}
