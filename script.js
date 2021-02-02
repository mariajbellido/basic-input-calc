
// ALMACENAMOS EN UNA VARIABLE EL SPAN QUE MOSTRARÁ EL VALOR OBTENIDO DE LA OPERACIÓN. 

const equal = document.getElementById("equal_to");

// SUMA 

document.getElementById("add_button").onclick = function() {
  equal.innerText = 
  Number(document.getElementById("first_input").value) + Number(document.getElementById("second_input").value);
}


// RESTA 

document.getElementById("sub_button").onclick = function() {
  equal.innerText = 
  Number(document.getElementById("first_input").value) - Number(document.getElementById("second_input").value);
}


// MULTIPLICACIÓN 

document.getElementById("mult_button").onclick = function() {
  equal.innerText =
  Number(document.getElementById("first_input").value) * Number(document.getElementById("second_input").value);
}

// DIVISIÓN 

document.getElementById("div_button").onclick = function() {
  equal.innerText = 
  Number(document.getElementById("first_input").value) / Number(document.getElementById("second_input").value);
  
}


