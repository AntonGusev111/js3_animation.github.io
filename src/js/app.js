let coll = document.querySelector(".collapsebtn");


coll.addEventListener("click", function() {
    
    let content = this.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.border = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = '1px solid';
      content.style.borderRadius = '5px';
    }
  });
