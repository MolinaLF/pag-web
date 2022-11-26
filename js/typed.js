
var n = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;


function pasteles1() {
  var imagen = document.getElementById("img-pasteles1");
  imagen.src = "../imagenes/pasteles/pastel" + n + ".jpg";
  n++;
  if (n > 5) n = 1;
  window.setTimeout("pasteles1()", 2000);
}

function pasteles2() {
  var imagen = document.getElementById("img-pasteles2");
  imagen.src = "../imagenes/pasteles/pastel" + b + ".jpg";
  b++;
  if (b > 5) b = 1;
  window.setTimeout("pasteles2()", 2000);
}

function pasteles3() {
  var imagen = document.getElementById("img-pasteles3");
  imagen.src = "../imagenes/pasteles/pastel" + c + ".jpg";
  c++;
  if (c > 5) c = 1;
  window.setTimeout("pasteles3()", 2000);
}



function pasteles4() {
  var imagen = document.getElementById("img-pasteles4");
  imagen.src = "../imagenes/pasteles/pastel" + d + ".jpg";
  d++;
  if (d > 5) d = 1;
  window.setTimeout("pasteles4()", 2000);
}


function pasteles5() {
  var imagen = document.getElementById("img-pasteles5");
  imagen.src = "../imagenes/pasteles/pastel" + e + ".jpg";
  e++;
  if (e > 5) e = 1;
  window.setTimeout("pasteles5()", 2000);
}




//definir un metodo anonimo cuando carga 1s pagina web
//Eliminar cada metodo creado

window.onload = function () {



  pasteles1();
  pasteles2();
  pasteles3();
  pasteles4();
  pasteles5();

}