function ComputeGrade() {
    var math = parseInt(document.getElementById("rr").value);
    var sci = parseInt(document.getElementById("tt").value);
    var eng = parseInt(document.getElementById("ff").value);
    var fil = parseInt(document.getElementById("hh").value);
    var pe = parseInt(document.getElementById("jj").value);
    var ave = (math + sci + eng + fil + pe)/5;

    //math
    if (math <= 100 && math >= 90)
    {
        document.getElementById("tmath").textContent="Excellent";
    }
    else if (math <= 89 && math >= 80)
    {
        document.getElementById("tmath").textContent="Good";
    }
    else if (math <= 79 && eng >= 70)
    {
        document.getElementById("tmath").textContent="Average";
    }
    else if (math <= 69 && math >= 60)
    {
        document.getElementById("tmath").textContent="Poor";
    }
    else
    {
        document.getElementById("tmath").textContent="Fail";
    }

 //science
 if (sci <= 100 && sci >= 90)
 {
     document.getElementById("gscience").textContent="Excellent";
 }
 else if (sci <= 89 && sci >= 80)
 {
     document.getElementById("gscience").textContent="Good";
 }
 else if (sci <= 79 && sci >= 70)
     {
     document.getElementById("gscience").textContent="Average";
    }
    else if (sci <= 69 && sci >= 60)
    {
     document.getElementById("gscience").textContent="Poor";
    }
    else
    {
     document.getElementById("gscience").textContent="Fail";
    }

 //english
 if (eng <= 100 && eng >= 90)
 {
     document.getElementById("fenglish").textContent="Excellent";
 }
 else if (eng <= 89 && eng >= 80)
 {
     document.getElementById("fenglish").textContent="Good";
 }
 else if (eng <= 79 && eng >= 70)
 {
     document.getElementById("fenglish").textContent="Average";
 }
 else if (eng <= 69 && eng >= 60)
 {
     document.getElementById("fenglish").textContent="Poor";
 }
 else
 {
     document.getElementById("fenglish").textContent="Fail";
 }

//filipino
if (fil <= 100 && fil >= 90)
{
    document.getElementById("hfilipino").textContent="Excellent";
}
else if (fil <= 89 && fil >= 80)
{
    document.getElementById("hfilipino").textContent="Good";
}
else if (fil <= 79 && fil >= 70)
{
    document.getElementById("hfilipino").textContent="Average";
}
else if (fil <= 69 && fil >= 60)
{
    document.getElementById("hfilipino").textContent="Poor";
}
else
{
    document.getElementById("hfilipino").textContent="Fail";
}

//pe
if (pe <= 100 && pe >= 90)
{
    document.getElementById("kpe").textContent="Excellent";
}
else if (pe <= 89 && pe >= 80)
{
    document.getElementById("kpe").textContent="Good";
}
else if (pe <= 79 && pe >= 70)
{
    document.getElementById("kpe").textContent="Average";
}
else if (pe <= 69 && pe >= 60)
{
    document.getElementById("kpe").textContent="Poor";
}
else
{
    document.getElementById("kpe").textContent="Fail";
}
if (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90)
{
    document.getElementById("fourth").textContent="Top Honor Student";
}
else if (sci <= 69 && sci >= 0 && pe <= 69 && pe >= 0 && fil <= 69 && fil >= 0 && math <= 69 && math >= 0 && eng <= 69 && eng >= 0)
{
    document.getElementById("fourth").textContent="Repeater";
}
else if (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90 || (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) ||( fil  <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) || (eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90))
{
    document.getElementById("fourth").textContent="second";
} 
else
{
    document.getElementById("fourth").textContent="none";
}
}