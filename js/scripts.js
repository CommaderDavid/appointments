$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    $("#info").toggle();
    $("#complete").toggle();
  });

  $("#new").click(function() {
    $("#complete").toggle();
    $("#info").toggle();
  });
});
