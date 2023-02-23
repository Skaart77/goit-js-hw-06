const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = rangeInput.value + 'px';

const textResize = () => {
  onText.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener('input', textResize);