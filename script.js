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


//Bildanzeige

$(document).ready(function() {
  $("#unten img").on("click", function() {
    var src = $(this).attr("src");
    var alt = $(this).attr("alt");
        $("#unten img").css("opacity", "1");
        $(this).css("opacity", "0.3");
        $("#oben img").fadeOut(400);
        setTimeout(function(){
        $("#oben img")
        .removeAttr("src")
        .removeAttr("alt")
        .attr("src", src)
        .attr("alt", alt)
        .fadeIn(400);
}, 400);
    });
});