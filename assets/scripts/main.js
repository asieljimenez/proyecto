document.addEventListener("DOMContentLoaded", () =>{

    fetch("https://digitalapiqa.fuller.com.mx/api/Auth/CheckUser")

    .then(objeto, objeto.json())
    .then(datos => {
        const contenedor = document.getElementById("id-datos");

        datos..forEach(funcionFlecha =>{
            const tarjeta = document.createElement('div');
            tarjeta.classList.add("tarjeta");

            const username = document.createElement('p');
            username.textContent = funcionFlecha.userName;
            username.classList.add("texto-tarjeta");

            tarjeta.appendChild(username);
            c
        });
    });
});