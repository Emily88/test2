(function () {
  $(document).ready(function () {
    initialize();
  });

  var $animationViewEl = $(),
    $shapeSvgEl = $();

  function initialize() {
    $animationViewEl = $(".executeSection");

    registerEvt();
  }

  function registerEvt() {
    $(document).bind("animationend", function() {
      $shapeSvgEl.removeClass();
    });

    $("button").click(function (e) {
      var animationType = $(e.currentTarget).attr("value");

      $shapeSvgEl = $animationViewEl.children("svg").children("circle");
      $shapeSvgEl.removeClass();

      if (animationType === "1") {
        $animationViewEl.hide();

        setTimeout(function() {
          $animationViewEl.show();
        }, 100)
      } else if (animationType === "2") {
        $shapeSvgEl.addClass("ani2");
      } else if (animationType === "3") {
        $shapeSvgEl.addClass("ani3");
      } else if (animationType === "4") {
        $shapeSvgEl.addClass("ani4");
      }
    })
  }
})();