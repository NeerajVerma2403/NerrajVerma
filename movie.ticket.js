function call()
{ 
    var th=threaters.value
    var da=date.value
    var ti=ticket.value
    var em=email.value
    var tim=time.value
    var t=tp.value
    var ptp=100
    
    var  mo=movie.value

    
    var w =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    var cd= new Date(date.value) 
    var gd=`${w[cd.getDay()]}`


    var ntp=ticket.value
        t=ptp*ntp
   
    if(a =='Monday' ||  a =='Tuesday' ||a =='Wednesday' ||a =='Thursday' ||a =='Friday')
      {
        var a
        var  dis= (tp*5)/100
        if(ntp>=10)
         {
           dis=(t*15)/100
           }
      }
     else if(ntp>=10)
      {
         dis=(t*10)/100
      }
    var nn = t-dis
      
    var z=`<table bordercolor="red"  cellspacing="0" border="1" width="40%" cellpadding="5">`
        z+=`<tr><th><font color='#1e272e' size='7'>Welcome </font>&nbsp; 
        <img src='David Putra.png' width='100' hight='100'>&nbsp; 
        <font color='#1e272e' size='5'> Movies ticket:</font></th></tr> `
 
       z+=`<table bordercolor="red"  cellspacing="1" border="1" width="40%" cellpadding="5">`
       z+=`<tr><td><font color='#30336b' size='5'><b> Movies &nbsp${mo}</b></td>
             <td><font color='#30336b' size='7'><b>${ti}</b></td></tr>`
       z+=`<tr><td><b>${th}</b></td><td><b> Show Time &nbsp${tim}</b></td></tr><tr><td><b>${a}</b></td>`

       
       z+=`<table bordercolor="red"  cellspacing="1" border="1" width="40%" cellpadding="5">`
       z+=`<tr><td><b> Gmail- ${em}</b></td>`

       z+=`<table bordercolor="red"  cellspacing="1" border="" width="40%" cellpadding="5">`
       z+=`<tr><td><b>Price per ticket - ₹100 </b></td>`
       z+=`<tr><td><b>No. of Seats &nbsp${ntp}</b></td>`
       z+=`<tr><td><b> Total Amount &nbsp -&nbsp₹${t}</b></td>`
       z+=`<tr><td><b>Amount to pay &nbsp -&nbsp₹${nn}</b></td></table>`
        
      result.innerHTML=z
}