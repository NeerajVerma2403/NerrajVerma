function fillFood()
{
    var i=category.selectedIndex
    switch(i)
    {
        case 1:
            var ni=[['Chhola Bhatura',160],['Samosa',20],['Kadai Paneer',300]]
            fillDD(ni)
            break

        case 2:
            var si=[['Masala Dosa',120],['Idli',20],['Uttapam',40]]
            fillDD(si)
            break
        
    }
}

function fillDD(foodList)
{
    removeAll()
    for(i=0;i<foodList.length;i++)
        {
            var opt=document.createElement('option')
            opt.text=foodList[i][0]
            opt.value=foodList[i][1]
            food.add(opt)
        }
}

function removeAll()
{
    for(j=food.options.length-1;j>=1;j--)
        {
            food.remove(j)
        }
}

function showDetails()
{
    var foodname=food.options[food.selectedIndex].text
    var foodprice=food.options[food.selectedIndex].value
    var foodpicture=`${foodname}.png`
    var htm=`<table cellspacing='0' border='1' width='20%' cellpadding='5'>`
    htm+=`<tr><th><font color='Red' size='6'>${category.value}</font></th></tr>`
    htm+=`<tr><th><img src='${foodpicture}' width='200'</th></tr>`
    htm+=`<tr><th><font color='black' size='5'>${foodname}</font></th></tr>`
    htm+=`<tr><th><font color='black' size='5'>&#8377; ${foodprice}/- Only</font></th></tr>`

    htm+=`</table>`
    result.innerHTML=htm
}