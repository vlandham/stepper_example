
function switchStep(newStep)
{
  d3.selectAll(".step-link").classed("active", false);
  d3.select("#" + newStep).classed("active", true);
}

function switchAnnotation(newStep)
{
  d3.selectAll(".annotation-step")
    .style("display", "none")
    .style("opacity", 0.0);

  d3.select("#" + newStep + "-annotation")
    .style("display", "block")
    .transition().delay(300).duration(500)
      .style("opacity", 1);
}

d3.selectAll("a.step-link").on("click", function(d) {
  var clickedStep = d3.select(this).attr("id");
  switchStep(clickedStep);
  switchAnnotation(clickedStep);
  return false;
});
