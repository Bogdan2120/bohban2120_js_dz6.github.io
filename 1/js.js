document.querySelector('.mane').addEventListener('mousemove', function(e){
    e = e || window.event;
    
    let res = document.querySelector('.res');
    res.innerHTML = e.clientX + ' : ' + e.clientY;
})