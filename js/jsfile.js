var main = function() {
  var paused = false
  $('.arrowR').click(function() {
    paused = true;
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  });
    
  $('.arrowL').click(function() {
    paused = true;
    $('#slideshow > div:last')
    .fadeIn(1000)
    .prependTo('#slideshow')
    .next()
    .fadeOut(1000)
    .end();
  });
  
  setInterval(function() {
    if (paused === false) { 
      $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
    };
  },  5000);  
};
$(document).ready(main);

//for dog page=>>>>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(".filter").change(function() {
    var filterValue = $(this).val();
    var row = $('.row'); 
    row.hide()
    row.each(function(i, el) {
         if($(el).attr('data-type') == filterValue) {
             $(el).show();
         }
    })
});