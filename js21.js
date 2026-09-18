function test() 
{
    var cn = pizza.options[pizza.selectedIndex].text
    n.innerHTML = cn
    pp.innerHTML ="₹"+pizza.options[pizza.selectedIndex].value
    pizzaimage.width = 300
    pizzaimage.src = `${cn}.png`

}

function getAmount() 
{
    var a = parseInt(pizza.options[pizza.selectedIndex].value)
    var b = parseInt(text1.value)

    var c = a * b
    ga.innerHTML ="₹"+c
    
    var d = (((a * b) / 3))/pizza.options[pizza.selectedIndex].value
    fp.innerHTML="You Have "+parseInt(d)+" Free Pizzas"

    var e =((a * b) / 3) * 2
    op.innerHTML ="₹"+parseInt(e)
}