const numbers = [
    '+7 920 419 40 81',
    '8-920-419-40-82',
    '+79204194083',
    '89204194084',
    '8(920)4194085',
    '+7(920)4194086',
    '+7 (920) 4194087',
];

// https://regex101.com
const validRussianMoblileNumberFormat = /^\+?\d{0,1}[\s]?[- (]?\d{0,3}[- )]?[\s]?\d{0,3}[- ]?\d{0,2}[- ]?\d{0,2}/g;
const validWorldWideEmailFormat = /^\w+[-\.]?\w+@[a-z0-9-]+\.[a-z]{2,}/gmu;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const match = number.match(validRussianMoblileNumberFormat);
    console.log(' match: ', match, i);
}
