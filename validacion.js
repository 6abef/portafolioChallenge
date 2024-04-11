// window.addEventListener("load", function () {
//     console.log("DOM cargado");
//     var form = this.document.getElementById("contacto")
//     form.addEventListener("submit", () => {
//         event.preventDefault();        
//         var nombre = this.document.querySelector("nombre").value;
//         var email = this.document.querySelector("email").value;
//         var asunto = this.document.querySelector("asunto").value;
//         var mensaje = this.document.querySelector("mensaje").value;
        
//         alert(`Se enviará un mensaje de ${nombre} (${email}): Asunto(${asunto}) | Mensaje: ${mensaje}`);        
//     })
// });

function capturar() {
    alert("Se presionó botón")
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    alert(`Se enviará un mensaje de ${nombre} (${email}): Asunto(${asunto}) | Mensaje: ${mensaje}`);
    document.getElementById("section").innerHTML = console.log(email, pass);
}