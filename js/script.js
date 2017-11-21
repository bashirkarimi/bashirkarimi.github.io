 var mobBtn = document.querySelector("#btn-bars");
    var mobMenu = document.querySelector("#main-menu");
        var onClick = function(event) {
           if(mobMenu.classList.contains('expanded')) {
               mobMenu.classList.remove('expanded');
           } else {
                mobMenu.classList.add('expanded');
           }
            
            
            /*if(mobMenu.style.display == "block") {
            mobMenu.style.display = "none"
            }else{
             mobMenu.style.display = "block";  
            }*/
                
                
        }
       
        mobBtn.addEventListener('click', onClick);