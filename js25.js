function getResult()
{
    var tm=parseInt(pm.value)+parseInt(cm.value)+parseInt(mm.value)+parseInt(hm.value)+parseInt(em.value)
    var p=tm/5
    var pre=''
    var fpre=''
    if(gender.value=='Male')
        {
            pre='Mr.'
            fpre='S/O'
        }
        else
        {
            pre='Miss'
            fpre='D/O'
        }
    var msg=`${pre} ${fn.value} ${ln.value} ${fpre} ${fan.value} ${lan.value}`
    var count=0
    var supp=''
    var prem=''
    if(pm.value>=75 && pm.value<=100)
        {
            prem='D'
        }
        else if(pm.value>=0 && pm.value<=35)
            {
                prem='*'
                count++
                supp=supp+'Physics '
            }

    var crem=''
    if(cm.value>=75 && cm.value<=100)
        {
            crem='D'
        }
        else if(cm.value>=0 && cm.value<=35)
            {
                crem='*'
                count++
                supp=supp+'Chemistry '
            }

    var mrem=''
        if(mm.value>=75 && mm.value<=100)
            {
                mrem='D'
            }
            else if(mm.value>=0 && mm.value<=35)
                {
                    mrem='*'
                    count++
                    supp=supp+'Math '
                }

    var hrem=''
        if(hm.value>=75 && hm.value<=100)
            {
                hrem='D'
                }
                else if(hm.value>=0 && hm.value<=35)
                    {
                        hrem='*'
                        count++
                        supp=supp+'Hindi '
                    }

    var erem=''
        if(em.value>=75 && em.value<=100)
            {
                erem='D'
            }
            else if(em.value>=0 && em.value<=35)
                {
                    erem='*'
                    count++
                    supp=supp+'English '
                }
    var f=''
        if(count>=1&&count<=2)
            {
                f='Supply'
            }
            else if(count>2)
                {
                    f='Fail'
                }
            else
                {
                    f='Pass'
                }

    var htm=`<table cellspacing='0' border='1' width='50%' cellpadding='5'>`
    htm+=`<tr><th><img src='CBSE logo.png' width='100' hight='100'></th><th><font color='Blue' size='5'>Central Board Of Secondary Education New Delhi</font></th></tr>`
    
    htm+=`<table cellspacing='0' border='1' width='50%' cellpadding='5'>`
    htm+=`<tr><th>School Name:</th><th>${sn.value}</th></tr>`
    htm+=`<tr><th>Roll Number:</th><th>${rn.value}</th></tr>`
    htm+=`<tr><th>Student Name:</th><th>${msg}</th></tr>`
    htm+=`<tr><th>Gender:</th><th>${gender.value}</th></tr>`
    htm+=`<tr><th>Date Of Birth:</th><th>${dob.value}</th></tr>`

    htm+=`<table cellspacing='0' border='1' width='50%' cellpadding='5'>`
    htm+=`<tr><th>Subject Code</th><th>Subject Name</th><th>Minimum Marks</th><th>Max Marks</th><th>Marks Obdained</th><th>Remark</th></tr>`
    htm+=`<tr><th>101</th><th>Physics Marks</th><th>33</th><th>100</th><th>${pm.value}</th><th>${prem}</th></tr>`
    htm+=`<tr><th>102</th><th>Chemistry Marks</th><th>33</th><th>100</th><th>${cm.value}</th><th>${crem}</th></tr>`
    htm+=`<tr><th>103</th><th>Math Marks</th><th>33</th><th>100</th><th>${mm.value}</th><th>${mrem}</th></tr>`
    htm+=`<tr><th>104</th><th>Hindi Marks</th><th>33</th><th>100</th><th>${hm.value}</th><th>${hrem}</th></tr>`
    htm+=`<tr><th>105</th><th>English Marks</th><th>33</th><th>100</th><th>${em.value}</th><th>${erem}</th></tr>`
    
    htm+=`<table cellspacing='0' border='1' width='50%' cellpadding='5'>`
    htm+=`<tr><th>Total Marks</th><th>${tm}</th></tr>`
    htm+=`<tr><th>Percentage</th><th>${p}%</th></tr>`
    htm+=`<tr><th>Pass / Fail</th><th>${f}</th></tr>`
    htm+=`</table>`
    if (count>=1 && count<=2)
        {
            htm+=`<table><tr><h2>Supplyment In ${supp}</h2></tr>
            </table>`
        }
    gr.innerHTML=htm
}