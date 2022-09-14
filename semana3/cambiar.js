    const tabla=document.getElementsByTagName("table");
    const fila=document.getElementsByTagName("tr");
    const celda=document.getElementsByTagName("td");

function verborde(){
    tabla.item(0).style.border="2px solid blue";

    for(let i=0;i<fila.length;i++)
     fila.item(i).style.border="2px solid blue";
    
    for(let i=0;i<celda.length;i++)
     celda.item(i).style.border="2px solid blue";   
    }

function noverborde(){
     tabla.item(0).style.border="5px";
    
     for(let i=0;i<fila.length;i++)
          fila.item(i).style.border="0px";
        
    for(let i=0;i<celda.length;i++)
        celda.item(i).style.border="0px";
    }

    