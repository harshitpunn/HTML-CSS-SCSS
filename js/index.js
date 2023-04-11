
function myFunction (parentID, listID) {
  let parent =document.getElementById(parentID)
  let list = document.getElementById(listID)

  if(list.style.display == "none"){
    list.style.display = "block"
  }
  else{
    list.style.display ="none"
  }

  parent.classList.toggle("article-expand");

}