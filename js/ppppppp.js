$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#once-popup").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }
    else {
       // DELETE THIS ELSE ON PRODUCTION
       document.getElementById("content").innerHTML='<object type="text/html" data="indexcopy.html" ></object>';

    }

    $('#popup-close').click(function(e) // You are clicking the close button
    {
    $('#once-popup').fadeOut(); // Now the pop up is hiden.
    });
    $('#once-popup').click(function(e) 
    {
    $('#once-popup').fadeOut(); 
    });
});