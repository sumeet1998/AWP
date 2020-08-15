var likecounter=1;

function commenthere()
{
   let usercomment=document.querySelector("#inputid1").value;
//    const newElement=document.createElement("div");

  //    newElement.textContent=usercomment;

    const newElement = document
    .querySelector("#referenceCommentId")
    .cloneNode(true);
  newElement.removeAttribute("id"); //good practice to keep unique id.
  newElement.style.visibility = "visible";
  newElement.children[0].innerHTML = usercomment;


//    newElement.style.background="royalblue";
//    newElement.style.color="white";
//    newElement.style.margin="4px";

   

   commentBox.insertBefore(newElement,commentBox.firstChild);
   usercomment=document.querySelector("#inputid1").value="";

}

function likehere()
{
    likecounter++;

    let btnelement= document.querySelector("#btnid");

    btnelement.innerHTML = "like" + likecounter;
}

function deletehere(btnelement)
{
    btnelement.parentElement.remove();
}