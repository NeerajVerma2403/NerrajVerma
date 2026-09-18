function call()
{
    var b1=birthtype1.value
    var b2=birthtype2.value
    var b3=birthtype3.value

    var q1=age1.value
    var q2=age2.value
    var q3=age3.value

    var s1=gender1.value
    var s2=gender2.value
    var s3=gender3.value

    var n1=name1.value
    var n2=name2.value
    var n3=name3.value

    var rn=tn.value
    var cc=sp.value
    var ss=ep.value
    var ds=0
    var price=0

    var w=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    var cd= new Date(date.value) 
    var gd=`${w[cd.getDay()]}`
    var pd=date.value

    if(cc=='Gwalior' && ss=='Agra')
        {
            var ds=50
            var price=100
        }
    else if (cc=='Gwalior' && ss=='Mathura')
        {
            var ds=100
            var price=200
        }
    else if (cc=='Gwalior' && ss=='Delhi')
        {
            var ds=150
            var price=300
        }
    else if (cc=='Agra' && ss=='Mathura')
        {
            var ds=50
            var price=100
        }
    else if (cc=='Agra' && ss=='Delhi')
        {
            var ds=100
            var price=200
        }
    else if (cc=='Agra' && ss=='Delhi')
        {
            var ds=150
            var price=300
        }
    else if (cc=='Mathura' && ss=='Gwalior')
        {
            var ds=50
            var price=100
        }
    else if (cc=='Mathura' && ss=='Agra')
        {
            var ds=100
            var price=200
        }
    else if (cc=='Mathura' && ss=='Delhi')
        {
            var ds=150
            var price=300
        }
    else if (cc=='Delhi' && ss=='Gwalior')
        {
            var ds=50
            var price=100
        }
    else if (cc=='Delhi' && ss=='Agra')
        {
            var ds=100
            var price=200
        }
    else if (cc=='Delhi' && ss=='Mathura')
        {
            var ds=150
            var price=300
        }           
    var ta=price*3
          
    var z=`<table  bgcolor="#e55039" cellspacing="0"bordercolor="#b71540" border="1" width="55%" cellpadding="1">`
    z+=`<tr>
        <th>
            <font color='#ffffff'size='6'>Happy journey:</font>
            <img src="David Putra.png width=100 hight=100">
            <font color='#ffffff' size='7'> UCC748924:</font>
        </th>
        </tr>`
                    
    z+=`<table cellspacing='0' border='1' bordercolor='#b71540' width='55%' cellpadding='1'>`
    z+=`<tr>
            <td><b>${cc} to ${ss}</b></td><td> &nbsp &nbsp<b>Train ${rn}</b></td><td>&nbsp<b>${gd}</b></td>
            <td>&nbsp<b>${pd}</b></td>
        </tr>`
   
    z+=`<table cellspacing='0' border='1' bordercolor='#b71540' width='55%' cellpadding='1'>`
    z+=`<td><b><center>Passenger delaits</center></b></td>`

    z+=`<table cellspacing='0' border='1' bordercolor='#b71540' width='55%' cellpadding='1'>`
    z+=`<tr><th><b>S No</b></th><th><b>Name</b></th><th><b>age</b></th><th><b>gender</b></th><th><b>birth</b></th></tr>`
    z+=`<tr><td><b>1</b></td><td><b>${n1}</b></td> <td><b>${q1}</b></td><td><b>${s1}</b></td><td><b>${b1}</b></td></tr>`
    z+=`<tr><td><b>2</b><t/td><td><b>${n2}</b></td><td><b>${q2}</b></td><td><b>${s2}</b></td><td><b>${b2}</b></td></tr>`
    z+=`<tr><td><b>3</b></td><td><b>${n3}</b></td><td><b>${q3}</b></td><td><b>${s3}</b></td><td><b>${b3}</b></td></tr>`
    z+=`<tr><td> <b>distance:</b> ${ds} km </td><th><b> ticket price &#8377;${price}</b></th></td>
        <th><b> total &#8377;${ta}&nbsp</b></th></td></table>`

                    
    result.innerHTML=z
}