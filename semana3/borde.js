const tabla=document.getElementsByTagName("table");
const fila=document.getElementsByTagName("tr"); //arreglo de elementos tr
const celda=document.getElementsByTagName("td");// arreglo d elemento td
//tipo es "2px dotted blue" o "2px dotted cornsilk"
function borde(tipo){
tabla.item(0).style.border=tipo;

for(let i=0;i<fila.length;i++)//recorre cada elemento fila y asigna propiedad
 fila.item(i).style.border=tipo;

for(let i=0;i<celda.length;i++)//recorre cada elemento celda y asigna propiedad
 celda.item(i).style.border=tipo;   
}
