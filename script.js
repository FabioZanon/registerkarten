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

$(document).ready(function() {                    // Wird erst ausgeführt nach dem Laden der Webseite
  $("#unten img").on("click", function() {        // Wenn man eines der unteren Bilder anklickt passiert folgendes:
    var src = $(this).attr("src");                // Variable erstellen und hinzufügen für #unten img 
    var alt = $(this).attr("alt");                // Variable erstellen und hinzufügen für #unten img 
        $("#unten img").css("opacity", "1");      // Das Bild, welches weggeht, bekommt die Deckkraft 1
        $(this).css("opacity", "0.3");            // Das Bild, welches gewählt wird, bekommt die Deckkraft 0.3
        $("#oben img").fadeOut(400);              // Das Bild, welches OBEN Weggeht bekommt einen fadeOut von 400ms
        setTimeout(function(){                    // Timeout hinzufügen, damit sich der FadeOut und FadeIn nicht überlappen
        $("#oben img")                            
        .removeAttr("src")                        // Die Attribute src und alt werden für das Obere Bild entfernt und wieder hinzugefügt
        .removeAttr("alt")                        // -
        .attr("src", src)                         // -
        .attr("alt", alt)                         // -
        .fadeIn(400);                             // Das Obere Bild bekommt einen fadeIn von 400ms
}, 400);                                          // Diser ganze Vorgang passiert in 400ms oder .4s
    });
});