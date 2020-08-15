var likecounter=1;

function commenthere()
{
    let userComment = document.querySelector("#inputId1").value;

    // create new div for every single comment
    const newElement = document.createElement("div");
    newElement.textContent = userComment;

    newElement.style.background="royalblue";
    newElement.style.color="white";
    newElement.style.margin="4px";

    // const commentBox = document.querySelector("#commentBox");

    // commentBox.appendChild(newElement);
    // commentCounter++;

    commentBox.insertBefore(newElement,commentBox.firstChild);

    document.querySelector("#inputId1").value="";

}

function likehere()
{
    likecounter++;

    let btnelement= document.querySelector("#btnid");

    btnelement.innerHTML = "like" + likecounter;
}