document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombreApellido = document.getElementById('nombreApellido').value;
    if(nombreApellido.length == 0) {
      alert('Por favor, escriba su nombre y apellido');
      return;
    }

    var tel = document.getElementById('tel').value;
    if (tel.length == 0) {
      alert('Por favor, escriba el código de área');
      return;
    }

    var tel2 = document.getElementById('tel2').value;
    if (tel2.length == 0) {
      alert('Por favor, escriba su número de teléfono');
      return;
    }

    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.getElementById('email').value;
    if (email.length == 0 || !expresion.test(email)) {
      alert('Por favor, revise el campo email');
      return;
    }
   
    this.submit();
    alert("El formuario ha ido enviado con éxito");
}


