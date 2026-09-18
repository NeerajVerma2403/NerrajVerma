function fillCity()
{
    var i=states.selectedIndex
    switch(i)
    {
        case 1:
            var mpcity=['Gwalior','Bhopal','indore','Jabalpur']
            fillDD(mpcity)
            break

        case 2:
            var upcity=['Jhanshi','Agra','Lucknow','Kanpur']
            fillDD(upcity)
            break
        
        case 3:
        var hpcity=['Kullu','Manali','Bilaspur','Solang']
            fillDD(hpcity)
            break
    }
}

function fillDD(cityList)
{
    removeAll()
    for(i=0;i<cityList.length;i++)
        {
            var opt=document.createElement('option')
            opt.text=cityList[i]
            city.add(opt)
        }
}

function removeAll()
{
    for(j=city.options.length-1;j>=1;j--)
        {
            city.remove(j)

        }
}
function showImage()
{
    citypic.src=`${city.value}.png`
}