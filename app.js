const convertBtn = document.querySelector('.convert');

const binaryToDecimalBtn = document.querySelector('.binary-to-decimal');

const decimalToBinaryBtn = document.querySelector('.decimal-to-binary');

const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');

const input = document.querySelector('.input');
const convertedNum = document.querySelector('.converted-num');

// ///////////////////////////////////////////////////////

binaryToDecimalBtn.addEventListener('click', function () {
  let binary = 'Binary : ';
  let decimal = 'Decimal : ';
  text1.textContent = binary;
  text2.textContent = decimal;
  input.value = '';
});

decimalToBinaryBtn.addEventListener('click', function () {
  let binary = 'Binary : ';
  let decimal = 'Decimal : ';
  text1.textContent = decimal;
  text2.textContent = binary;
  input.value = '';
});

convertBtn.addEventListener('click', function () {
  //! Binary to Decimal
  if (text1.textContent === 'Binary : ') {
    const inputValue = input.value;
    if (!/^[01]+$/.test(inputValue)) {
      convertedNum.textContent = 'Invalid Binary Number';
    } else {
      convertedNum.textContent = 'Decimal : ' + parseInt(inputValue, 2);
    }
  }
});
