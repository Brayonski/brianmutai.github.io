AOS.init();
$('#menu a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 2000);
  return false;
});

$(function () {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,

    barColor: '#1abc9c',
    trackColor: "#ecf0f1",
    size: 160,
    animate: 500
  });
});