const addition1Input = document.getElementById('addition1-input');
const addition2Input = document.getElementById('addition2-input');
const additionButton = document.getElementById('addition-button');
const additionResult = document.getElementById('addition-result');

additionButton.addEventListener('click', () =>{
    const add1Input = Number(addition1Input.value);
    const add2Input = Number(addition2Input.value);
    const addResult = add1Input + add2Input;
    additionResult.textContent = addResult;
    console.log(addResult);
});

const subtraction1Input = document.getElementById('sub1-input');
const subtraction2Input = document.getElementById('sub2-input');
const subtractionButton = document.getElementById('sub-button');
const subtractionResult = document.getElementById('sub-result');

subtractionButton.addEventListener('click', () =>{
    const sub1Input = Number(subtraction1Input.value);
    const sub2Input = Number(subtraction2Input.value);
    const subResult = sub1Input - sub2Input;
    subtractionResult.textContent = subResult;
    console.log(subResult);
});

const multiply1Input = document.getElementById('ml1-input');
const multiply2Input = document.getElementById('ml2-input');
const multiplyButton = document.getElementById('ml-button');
const multiplyResult = document.getElementById('ml-result');

multiplyButton.addEventListener('click', () =>{
    const ml1Input = Number(multiply1Input.value);
    const ml2Input = Number(multiply2Input.value);
    const mlResult = ml1Input * ml2Input;
    multiplyResult.textContent = mlResult;
    console.log(mlResult);
});


const divide1Input = document.getElementById('div1-input');
const divide2Input = document.getElementById('div2-input');
const divideButton = document.getElementById('div-button');
const divideResult = document.getElementById('div-result');

divideButton.addEventListener('click', () =>{
    const div1Input = Number(divide1Input.value);
    const div2Input = Number(divide2Input.value);
    const divResult = div1Input / div2Input;
    divideResult.textContent = divResult;
    console.log(divResult);
});


