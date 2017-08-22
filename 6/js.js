let obj = {
    triger : document.querySelector('.triger'),
    count: 0
}

obj.triger.addEventListener('click', addTriger);

function addTriger() {
    obj.count = obj.count + 50;
    obj.triger.style.left = obj.count + 'px';
    if(obj.count == 50){
        console.log('1');
    }else if(obj.count == 100){
        console.log('2');
    } else if (obj.count == 150) {
        obj.triger.style.left = 0 + 'px';
        obj.count = 0;
        console.log ('0');
    } 
    
    
     
}