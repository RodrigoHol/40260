titulo = document.getElementById('titulo');

flag =  0;


function holamundo(){
    if(flag == 0){
        titulo.innerHTML = 'Hola Mundo';
        flag = 1;
    }
    else{
        titulo.innerHTML = 'Adios Mundo';
        flag = 0;
    }
}