function fillcar()
{
    var i=category.selectedIndex
    switch(i)
    {
        case 1:
            var wr=[['Wagon-R VXI At 25.19 KMPL',649000],['Wagon-R ZXI At 24.43 KMPL',678000],['Wagon-R ZXI Plus At 24.43 KMPL',725000]]
            fillDD(wr)
            break

        case 2:
            var sd=[['Swift Dzire VXI AGS',778000],['Swift Dzire ZXI AGS',846000],['Swift Dzire ZXI Plus AGS',917500]]
            fillDD(sd)
            break
        
    }
}

function fillDD(carList)
{
    removeAll()
    for(i=0;i<carList.length;i++)
        {
            var opt=document.createElement('option')
            opt.text=carList[i][0]
            opt.value=carList[i][1]
            car.add(opt)
        }
}

function removeAll()
{
    for(j=car.options.length-1;j>=1;j--)
        {
            car.remove(j)
        }
}

function showDetails()
{
    var carname=car.options[car.selectedIndex].text
    var carprice=car.options[car.selectedIndex].value
    var carpicture=`${carname}.png`
    var r=carprice*28/100
    var i=carprice*8/100
    var o=parseInt(carprice)+parseInt(r)+parseInt(i)
    var htm=`<table cellspacing='0' border='1' width='20%' cellpadding='5'>`
    htm+=`<tr><th><font color='Blue' size='4'>Maruti Sizuki</font></th></tr>`
    htm+=`<tr><th><font color='Red' size='4'>${category.value}</font></th></tr>`
    htm+=`<tr><th><img src='${carpicture}' width='200'</th></tr>`
    htm+=`<tr><th><font color='black' size='3'>${carname}</font></th></tr>`
    htm+=`<tr><th><font color='black' size='3'>&#8377; ${carprice}/- Only</font></th></tr>`

    htm+=`<table cellspacing='0' border='1' width='20%' cellpadding='5'>`
    htm+=`<tr><th><font color='red' size='4'>Description:</font></th><th><font color='red' size='4'>Price:</font></th><tr>`
    htm+=`<tr><th>Ex Shoroom Price:</th><th>&#8377; ${carprice}/-</th><tr>`
    htm+=`<tr><th>RTO (28%):</th><th>&#8377; ${r}/-</th><tr>`
    htm+=`<tr><th>Insurance (8%):</th><th>&#8377; ${i}/-</th><tr>`
    htm+=`<tr><th><font color='red' size='4'>On Road Price:</font></th><th><font color='red' size='4'>&#8377; ${o}/-</font></th><tr>`
    htm+=`</table>`
    result.innerHTML=htm
}