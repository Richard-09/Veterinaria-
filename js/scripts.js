    function saludar(){
        alert("Hola mascota");
    }

    function presentarse(){
        alert("Te saluda")
    }

    const botonSaludo = document.getElementById("btnSaludar");
    botonSaludo.addEventListener("click", saludar)