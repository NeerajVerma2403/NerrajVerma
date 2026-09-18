function showCarDetails()
{
    var cn=cars.options[cars.selectedIndex].text
    //alert(cars.selectedIndex)
    carname.innerHTML=cn
    carimage.width=300
    carprice.innerHTML=cars.options[cars.selectedIndex].value
    carimage.src=`${cn}.png`
}