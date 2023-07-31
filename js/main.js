const txtResultado = document.getElementById("txtResultado"); //me permitte seleccionar un elemento de mi doc por id
const buttons = document.querySelectorAll("button"); //me regresa elemento de mi doc por buttons
buttons.forEach(button => { // me permite dejar hacer varias acciones 
  button.addEventListener("click", function() { //indica al navegador estar atento cuanto interantue usuario
    const buttonValue = this.textContent; //se agrega texto de elemento
    if (buttonValue == "C") { // me permite la tecla borrar numero
      txtResultado.value = ""; // por medio de mi id txt de mi doc index
    }
    else if (buttonValue == "=") { // me permite reallizar el igual de operacion
      try {
        txtResultado.value = eval(txtResultado.value); // me permite verificar los que tengo por id
      } catch (error) {
        txtResultado.value = "Error"; 
      }
    }
    else {
      txtResultado.value += buttonValue; // me permite sumar la variable de mi text con la del button
    }
  });
});