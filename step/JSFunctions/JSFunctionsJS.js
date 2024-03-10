// Функція 1
function stringStatistics(input) {
    let letters = 0;
    let digits = 0;
    let others = 0;

    for (let char of input) {
        if (/[a-zA-Z]/.test(char)) {
            letters++;
        } else if (/\d/.test(char)) {
            digits++;
        } else {
            others++;
        }
    }

    return { letters, digits, others };
}

// Функція 2
function twoDigitNumberToText(num) {
    const numbersToWords = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
        5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
        14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty',
        40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
        80: 'eighty', 90: 'ninety'
    };

    if (num <= 20) {
        return numbersToWords[num];
    } else {
        const tens = Math.floor(num / 10) * 10;
        const units = num % 10;
        return numbersToWords[tens] + '-' + numbersToWords[units];
    }
}

// Функція 3
function reverseCaseAndUnderscore(input) {
    let result = '';
    for (let char of input) {
        if (/[a-z]/.test(char)) {
            result += char.toUpperCase();
        } else if (/[A-Z]/.test(char)) {
            result += char.toLowerCase();
        } else if (/\d/.test(char)) {
            result += '_';
        } else {
            result += char;
        }
    }
    return result;
}

// Функція 4
function cssToCamelCase(styleName) {
    return styleName.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

// Функція 5
function phraseToAbbreviation(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}

// Функція 6
function concatenateLines(...lines) {
    return lines.join('');
}

// Функція 7
function calculator(expression) {
    return eval(expression);
}

// Функція 8
function parseUrl(url) {
    const urlObj = new URL(url);
    return {
        protocol: urlObj.protocol.replace(':', ''),
        domain: urlObj.hostname,
        path: urlObj.pathname
    };
}

// Функція 9
function customSplit(input, separator) {
    const result = [];
    let startIndex = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === separator) {
            result.push(input.substring(startIndex, i));
            startIndex = i + 1;
        }
    }
    result.push(input.substring(startIndex));
    return result;
}

// Функція 10
function print(template, ...values) {
    return template.replace(/%(\d+)/g, function (match, index) {
        return values[index - 1];
    });
}
