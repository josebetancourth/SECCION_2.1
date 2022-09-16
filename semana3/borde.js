const tabla=document.getElementsByTagName("table");
const fila=document.getElementsByTagName("tr"); 
const celda=document.getElementsByTagName("td");
//tipo es "2px dotted blue" o "2px dotted cornsilk"
function borde(tipo){
tabla.item(0).style.border=tipo;

for(i in fila)//se debe cambiar por for of...
 {//recorre cada elemento fila y asigna propiedad
  fila.item(i).style.border=tipo;
  celda.item(i).style.border=tipo;                            
 }
}
