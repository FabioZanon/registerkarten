$(document).ready(function(){
    $("dt").on('click', function(){ 
        $('dd').slideUp("fast");
        $('dt').removeClass('open').addClass("closed");
        $(this).next("dd").slideDown("fast"); 
        $(this).children("dt").removeClass('closed').addClass("open");
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}