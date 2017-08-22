window.onload = function() {
  
    for (var i = 0; i < 400; i++) {
       let div = document.createElement('div');
       let body = document.body;
        div.className = 'block';
        
        body.appendChild(div);
    }
    let block = document.querySelectorAll('.block');

    for (var i = 0; i < block.length; i++) {

        block[i].onmouseenter = function(){
        this.style.borderRadius = '30px';
        }
    }
   
}

