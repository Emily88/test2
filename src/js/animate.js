(function () {
  $(document).ready(function () {
    initialize();
  });

  var $animationViewEl = $(),
    $originalViewEl = $(),
    $shapeSvgEl = $();

  function initialize() {
    $animationViewEl = $(".animation_preview_pane");
    $originalViewEl = $(".original_view");
    $shapeSvgEl = $animationViewEl.children("svg").children("circle");

    $animationViewEl.hide();
    registerEvt();
  }

  function registerEvt() {
    $(document).bind("animationend", function() {
      console.error("animationend evt!");

      switchPane(true);
      $shapeSvgEl.removeClass();
    });

    $("button").click(function (e) {
      var animationType = $(e.currentTarget).attr("value");

      switchPane(false);

      if (animationType === "1") {
        $shapeSvgEl.addClass("showUp");
      } else if (animationType === "2") {
        $shapeSvgEl.addClass("disappear");
      } else if (animationType === "3") {
        $shapeSvgEl.addClass("fadeIn");
      } else if (animationType === "4") {
        $shapeSvgEl.addClass("fadeOut");
      } else if (animationType === "5") {
        $shapeSvgEl.addClass("flyIn");
      } else if (animationType === "6") {
        $shapeSvgEl.addClass("flyOut");
      } else if (animationType === "7") {
        $shapeSvgEl.addClass("scaleUp");
      } else if (animationType === "8") {
        $shapeSvgEl.addClass("scaleDown");
      }
    });
  }

  function switchPane(option) {
    if (option) {
      $originalViewEl.show();
      $animationViewEl.hide();
    } else {
      $originalViewEl.hide();
      $animationViewEl.show();
    }
  }
})();