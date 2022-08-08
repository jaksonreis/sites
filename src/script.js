
 document.addEventListener("click", function(event) {
    
    if(event.target.getAttribute("class") == "card-img-bottom")
    setImg(event.target.getAttribute("src"))
})

function setImg(link) {

    document.getElementById("imgClicked").src = link;
}