let obj = {
    block : document.querySelector('.block'),
    img : document.querySelectorAll('.images'),
    main : document.querySelector('.main')
}

obj.main.addEventListener('click', addImage)

function addImage (event) {
    event = event || window.event;
    console.log( 'я кликнул по элементу ', event.target);
    obj.block.style.backgroundImage = 'url('+ event.target.src +')';
    
}