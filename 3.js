function handlemouseover ()
{
    var id2element = document.querySelector("div");
    id2element.style.background="gold";
    id2element.style.color="black";

    id2element.innerHTML="Hello Cdac!!";
}

function handlemouseout ()
{
    let id2Element = document.querySelector(".beautify");
    id2Element.style.background="black";
    id2Element.style.color="white";

    id2Element.innerHTML="Hello world";
}
