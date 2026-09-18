function showCarDetails() {
    var cnn = cars.options[cars.selectedIndex].text
    //alert(cars.selectedIndex)
    carname.innerHTML = cnn
    carimage.width = 300
    carimage.src = `${cnn}.png`
    carprice.innerHTML = "₹"+cars.options[cars.selectedIndex].value+"/-"

    var cn = cars.options[cars.selectedIndex].value

    var rr = cn * 28 / 100
    rto.innerHTML = "₹"+rr+"/-"

    var nn = cn * 8 / 100
    inr.innerHTML = "₹"+nn+"/-"

    var t = parseInt(cn) + parseInt(rr) + parseInt(nn)
    np.innerHTML = "₹"+t+"/-"

}