function test1_1()
{
    var v=document.getElementById("a1_1").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test1_2()
{
    var v=document.getElementById("a1_2").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test2_1()
{
    var v=document.getElementById("a2_1").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test2_2()
{
    var v=document.getElementById("a2_2").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test3_1()
{
    var v=document.getElementById("a3_1").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test3_2()
{
    var v=document.getElementById("a3_2").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test4_1()
{
    var v=document.getElementById("a4_1").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v<0 || v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    return true;
}
function test4_2()
{
    var v=document.getElementById("a4_2").value;
    if (isNaN(v))
    {
        alert('Not a number');
        return false;
    }
    var i=parseInt(v);
    if(v>1000)
    {
        alert('How long does it take to finish an exam worth 1000 points? A year, I may guess.');
        return false;
    }
    if(v=0)
    {
    	alert('Negative grade?! Dont worry. Everything will be alright.');
    }
    return true;
}
function cal_per_a1()
{
	var x=Number(document.getElementById("a1_1").value);
	var y=Number(document.getElementById("a1_2").value);
	var z=x/y*100;
	z=Math.round(z*10)/10;
	var demoP=document.getElementById("pa1")
	demoP.innerHTML=z + "%";
}
function cal_per_a2()
{
	var x=Number(document.getElementById("a2_1").value);
	var y=Number(document.getElementById("a2_2").value);
	var z=x/y*100;
	z=Math.round(z*10)/10;
	var demoP=document.getElementById("pa2")
	demoP.innerHTML=z + "%";
}
function cal_per_a3()
{
	var x=Number(document.getElementById("a3_1").value);
	var y=Number(document.getElementById("a3_2").value);
	var z=x/y*100;
	z=Math.round(z*10)/10;
	var demoP=document.getElementById("pa3")
	demoP.innerHTML=z + "%";
}
function cal_per_a4()
{
	var x=Number(document.getElementById("a4_1").value);
	var y=Number(document.getElementById("a4_2").value);
	var z=x/y*100;
	z=Math.round(z*10)/10;
	var demoP=document.getElementById("pa4")
	demoP.innerHTML=z + "%";
}
function getAverage()
{
	var a=0;
	var b=0;
	if (test1_1()==true && test1_2()==true)
	{
		a=a+Number(document.getElementById("a1_1").value);
		b=b+Number(document.getElementById("a1_2").value);
	}
	if (test2_1()==true && test2_2()==true)
	{
		a=a+Number(document.getElementById("a2_1").value);
		b=b+Number(document.getElementById("a2_2").value);
	}
	if (test3_1()==true && test3_2()==true)
	{
		a=a+Number(document.getElementById("a3_1").value);
		b=b+Number(document.getElementById("a3_2").value);
	}
	if (test4_1()==true && test4_2()==true)
	{
		a=a+Number(document.getElementById("a4_1").value);
		b=b+Number(document.getElementById("a4_2").value);
	}
	var c=a/b*100;
	c=Math.round(c*10)/10;
	var demoP=document.getElementById("special")
	demoP.innerHTML=c + "/100";
}
function getMean()
{
	var a=0;
	var b=0;
	if (test1_1()==true && test1_2()==true && Number(document.getElementById("a1_2").value)!=0)
	{
		a=a+(Number(document.getElementById("a1_1").value)/Number(document.getElementById("a1_2").value));
		b=b+1;
	}
	if (test2_1()==true && test2_2()==true && Number(document.getElementById("a2_2").value)!=0)
	{
		a=a+(Number(document.getElementById("a2_1").value)/Number(document.getElementById("a2_2").value));
		b=b+1;
	}
	if (test3_1()==true && test3_2()==true && Number(document.getElementById("a3_2").value)!=0)
	{
		a=a+(Number(document.getElementById("a3_1").value)/Number(document.getElementById("a3_2").value));
		b=b+1;
	}
	if (test4_1()==true && test4_2()==true && Number(document.getElementById("a4_2").value)!=0)
	{
		a=a+(Number(document.getElementById("a4_1").value)/Number(document.getElementById("a4_2").value));
		b=b+1;
	}
	var c=a/b*100;
	c=Math.round(c*10)/10;
	var demoP=document.getElementById("special")
	demoP.innerHTML=c + "/100";
}