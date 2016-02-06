var quotas = [
    "For healthier smoking!",
    "„Print Smoke combines two of my greatest hobbies - weed and 3D print“",
    "„Lorem ipsum dolor sit amet“"
];

function getQuote() {
  var i = 0;

  window.setInterval(function () {
      i = swap(quotas, i);
      $('#quote').fadeOut(500, function() {
        $('#quote').text(quotas[i]).fadeIn(500);
      });
  }, 4500);
}

function swap(quotas, i) {
    return (i + 1) % quotas.length;
}
