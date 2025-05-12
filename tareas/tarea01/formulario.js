const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;
    alert("Usuario: " + usuario + "\nContraseña: " + contrasena);
});