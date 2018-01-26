(function () {
  $(document).ready(function () {
    initialize();
  });

  function initialize() {
    registerEvt();
  }

  function registerEvt() {
    $("button").click(function (e) {
      var animationType = +$(e.currentTarget).attr("value");

      if (animationType === 1) {
        flyToLeft();
      } else if (animationType === 2) {
      } else if (animationType === 3) {
      } else if (animationType === 4) {
      } else if (animationType === 5) {
      } else if (animationType === 6) {
      } else if (animationType === 7) {
      } else if (animationType === 8) {
      } else if (animationType === 9) {
      } else if (animationType === 10) {
      } else if (animationType === 11) {
      } else if (animationType === 12) {
      } else if (animationType === 13) {
      } else if (animationType === 14) {
      } else if (animationType === 15) {
      }
    });
  }

  function flyToLeft() {
    console.error("flyToLeft function called!!");

    var $shape1El = $("#view5687");

    $shape1El.animate({
      "transform" : "translate(0,1316.129150390625)"
    },1500);
  }
})();