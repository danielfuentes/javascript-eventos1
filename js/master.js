window.onload = function(){
    let velocidad = 20;
    let margenIzquierdo = 0;
    let body = document.querySelector('body');
    let hombreCaminando = document.querySelector('.hombreCaminando');
    let dia = document.getElementById('dia');
    let tarde = document.getElementById('tarde');
    let noche = document.getElementById('noche');

    dia.onclick = function(){
        body.classList.remove('tarde')
        body.classList.remove('noche')
        body.classList.add('dia')
    };
    tarde.onclick = function(){
        body.classList.remove('dia')
        body.classList.remove('noche')

        body.classList.add('tarde')
    };
    noche.onclick = function(){
        body.classList.remove('dia')
        body.classList.remove('tarde')
        body.classList.add('noche')
    }

    console.log(hombreCaminando);
    body.onkeydown = function(e){
        console.log(e);
        if (e.keyCode !=39 && e.keyCode!=37){
            Swal.fire(
                'Uffffffff',
                'Debes usar las teclas de dirección (Izquierda ó Derecha)!',
                'error'
              )
        }
        if (e.keyCode==39 ){
            console.log('Entro tecla derecha');
            moverDerecha();
        }
        if(e.keyCode == 37 && margenIzquierdo !=0){
            console.log('Entro tecla Izquierda');
            moverIzquierda();
        }
    }

    //funciones
    function moverDerecha(){
        hombreCaminando.classList.remove('hombreCaminandoIzquierda');
        margenIzquierdo = margenIzquierdo + velocidad;
        hombreCaminando.style.marginLeft = margenIzquierdo+"px";
    }

    function moverIzquierda(){
        hombreCaminando.classList.add('hombreCaminandoIzquierda');
        margenIzquierdo = margenIzquierdo - velocidad;
        hombreCaminando.style.marginLeft = margenIzquierdo+"px";
    }
    

}