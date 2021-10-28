function validar() {
  let nombreApellido, email, tel, tel2;
  nombreApellido = document.getElementById("nombreApellido").value;
  email = document.getElementById("email").value;
  cArea= document.getElementById("cArea").value;
  tel2 = document.getElementById("tel2").value;

  expresion = /\w+@\w+\.+[a-z]/;
  expresion1= /^[A-Z ]+$/i;

  if (nombreApellido ==="" || cArea ==="" || tel2 ==="" || email ==="") {
    alert("Debe completar todos los campos obligatorios");
    return false;
  }
  else if (! expresion1.test(nombreApellido)) {
    alert("El campo nombre y apellido no es válido"); 
    return false;
  }
  else if (cArea.length > 5) {
  alert("El código de área es demasiado largo"); 
  return false;
  }
  else if (isNaN(cArea)){
  alert("El código de área no es un número");
  return false;
  }
  else if (tel2.length > 9) {
  alert("El teléfono ingresado es demasiado largo"); 
  return false;
  }
  else if (isNaN(tel2)){
  alert("El teléfono ingresado no es un número");
  return false;
  }
  else if (! expresion.test(email)) {
  alert("El correo no es válido");
  return false;
  }
  else {
  alert("El formulario fue enviado con éxito")
  }
}
