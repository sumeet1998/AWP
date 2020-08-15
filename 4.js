var likeCounter=1;
var commentCounter=1;

function commenthere()
{
    // creating a new Element for single comment
    const newElement = document.createElement("div");
    newElement.textContent="User Comment..." + commentCounter;

    newElement.style.background="Royalblue";
    newElement.style.color="white";
    newElement.style.margin="4px";

    const commentBox=document.querySelector("#commentBox");

    // connect new new Element

    commentBox.appendChild(newElement);

    commentCounter++;
}

function likehere()
{
    likeCounter++;
    // let btnElement = document.querySelector("#btnid");
    // btnElement.innerHTML= 'like ' + likeCounter;

    document.querySelector("#btnid").innerHTML='like' + likeCounter;

}















