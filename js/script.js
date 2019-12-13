window.onload = function(){

    var cells = document.getElementsByTagName('td');

    for(let i = 0; i < cells.length; i++){

        cells[i].addEventListener('mouseover', function(){
            this.className = 'hovered';
        });

        cells[i].addEventListener('click', function(){
            this.className = '';
        });

    }

    btnEraseAll = document.getElementById('btn-erase-all');
    btnEraseAll.addEventListener('click', function(){
        for(let i = 0; i < cells.length; i++){
            cells[i].className = '';
        }
    });

    //console.log(cells);

};