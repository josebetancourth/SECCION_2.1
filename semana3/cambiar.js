function verborde(){
    const tabla=document.getElementsByTagName("table");
    const sep=document.getElementsByTagName("tr");
    const oct=document.getElementsByTagName("td");
    let tds;
    let nov;
    const tab=tabla.item(0);
        tab.style.border="2px solid blue";
    for(let i=0;i<sep.length;i++)
    {
      tds=sep.item(i);
      tds.style.border="2px solid blue";
    }
    for(let i=0;i<oct.length;i++)
    {
        nov=oct.item(i);
        nov.style.border="2px solid blue";
    }
    }
    function noverborde(){
        const tabla=document.getElementsByTagName("table");
        const sep=document.getElementsByTagName("tr");
        const oct=document.getElementsByTagName("td");
        let tds=null;
        let nov=null;
        const tab=tabla.item(0);
            tab.style.border="2px solid cornsilk";
        for(let i=0;i<sep.length;i++)
        {
          tds=sep.item(i);
          tds.style.border="2px solid cornsilk";
        }
        for(let i=0;i<oct.length;i++)
        {
            nov=oct.item(i);
            nov.style.border="2px solid cornsilk";
        }
        
       
        }