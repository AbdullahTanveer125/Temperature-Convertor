var celcius=document.querySelector('#cel');
var fahrenheit=document.querySelector('#fah');

celcius.oninput=function()
{
    var f=(celcius.value * 9/5) + 32;
    if(!Number.isInteger(f))
    {
        f=f.toFixed(4);
    }
    fahrenheit.value=f;
}

fahrenheit.oninput=function()
{
    var c=(fahrenheit.value - 32) * 5/9;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(4);
    }
    celcius.value=c;
}