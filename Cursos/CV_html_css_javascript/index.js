// const boton = document.getElementsByClassName('btn');

// function descripcion(i){

//     if(boton[i].innerText == "Mostrar"){
//         document.getElementsByClassName('descripcion')[i].style.display='block';
//         boton[i].innerHTML="Ocultar";
//     }
//     else{                
//         document.getElementsByClassName('descripcion')[i].style.display="none";
//         boton[i].innerHTML="Mostrar";
//     }
// }

// let boolean= false;
// const menu = document.getElementById("menu").addEventListener("click", function(){
//     if(boolean == false){
//         for(i=0; i<6; i++){            
//             document.querySelectorAll("nav .item")[i].style.display="block";
//         }
        
//         boolean = true;
//     }else{
//         for(i=0; i<6; i++){            
//             document.querySelectorAll("nav .item")[i].style.display="none";
//         }
        
//         boolean = false;
//     }
// });
        
const boton = document.getElementsByClassName('btn');

function descripcion(i){
    if(boton[i].innerText == "Mostrar"){
        document.getElementsByClassName('descripcion')[i].classList.remove("display_none");
        boton[i].innerHTML="Ocultar";
    }
    else{                
        document.getElementsByClassName('descripcion')[i].classList.add("display_none");
        boton[i].innerHTML="Mostrar";
    }
}

let boolean= false;
const menu = document.getElementById("menu");
const items=document.getElementsByClassName("item");

menu.addEventListener("click", function(){
    if(boolean == false){
        for(i=0; i<7; i++){            
            items[i].classList.remove("display_none");
        }
     
        boolean = true;
    }else{
        for(i=0; i<7; i++){            
            items[i].classList.add("display_none");
        }
     
        boolean = false;
    }
});

function ocultar(){
    for(i=0; i<7; i++){            
        items[i].classList.add("display_none");
    }
    menu.click();
};
