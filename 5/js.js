let block = document.querySelector('.block');
let topBlock = 0;

block.addEventListener('click', addBlock);

function addBlock() {
    topBlock = topBlock + 100;
    block.style.top = topBlock +'px';
    console.log(topBlock);
    
}