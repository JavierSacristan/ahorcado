window.onload = function () {
    var palabra = document.getElementById("palabra");
    var aciertos = document.getElementById("aciertos");
    var letra = document.getElementById("letra");
    var fallos = document.getElementById("fallos");
    var adivinar;
    var palabraA;
    

    palabra.addEventListener("keyup", function (e) {
        if (e.keyCode == 13) {  //si se pulsa enter se ejecuta la funcion que recoge la palabra a adivinar
            guiones();
        }
    });

    letra.addEventListener("keyup", sustituirLetras, false); //cuando se pulsa una tecla se ejecuta el evento que ejecuta la funcion sustituirLetras

    function guiones() {
        palabraA = palabra.value.toUpperCase();
        adivinar = palabraA;
        adivinar = adivinar.replace(/[a-z]/gi, "-");
        aciertos.value = adivinar;
        letra.focus();

    }

    function sustituirLetras() {
        var caracterBuscar = (letra.value).toUpperCase();
        letra.value = '';
        letra.focus();
        for (i = 0; i < palabraA.length; i++) {
            if (caracterBuscar == palabraA[i]) {
                adivinar = adivinar.substring(0, i) +
                    caracterBuscar + adivinar.substr(i + 1, adivinar.length);

                aciertos.value = adivinar;

            }

        }

        if (palabraA.indexOf(caracterBuscar) == -1) {
            p1 = document.createElement("p");
            var texto1 = document.createTextNode(caracterBuscar);
            p1.appendChild(texto1);
            fallos.appendChild(p1);

        }

        
        if ((aciertos.value).indexOf("-") == -1) {
            alert("HAS ACERTADO LA PALABRA");
        }

    }

}
