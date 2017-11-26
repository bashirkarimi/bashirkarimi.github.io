 var mobBtn = document.querySelector(".toggle");
 var mobMenu = document.querySelector("#main-menu, .toggle");
 var onClick = function (event) {
     event.preventDefault();
     if (mobMenu.classList.contains('active')) {
         mobMenu.classList.remove('active');
     } else {
         mobMenu.classList.add('active');
     }


     /*if(mobMenu.style.display == "block") {
     mobMenu.style.display = "none"
     }else{
      mobMenu.style.display = "block";  
     }*/


 }

 mobBtn.addEventListener('click', onClick);
