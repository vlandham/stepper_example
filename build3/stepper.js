$(document).ready(function() {
  $("a.step-link").click(function(e) {
    var clickedStep = $(this).attr('id');
    switchStep(clickedStep);
    switchAnnotation(clickedStep);
    return false;
  });
});
