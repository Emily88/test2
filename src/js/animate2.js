(function () {
  $(document).ready(function () {
    initialize();
  });

  var $shape1El = $(),
    transformAttr, x, y;

  function initialize() {
    $shape1El = $("#slideObjContainer").find("#view5687"),
      transformAttr = $shape1El.attr("transform"),
      x = 2415.4851074,
    y= 1316.129150390625;

    registerEvt();
  }

  function registerEvt() {
    $("button").click(function (e) {
      var animationType = +$(e.currentTarget).attr("value");

      if (animationType === 1) {
        flyFromLeft(x);
      } else if (animationType === 2) {
        flyToLeft(x);
      } else if (animationType === 3) {
        flyFromRight(x);
      } else if (animationType === 4) {
        flyToRight(x)
      } else if (animationType === 5) {
        flyFromBottom(y);
      } else if (animationType === 6) {
        flyToBottom(y);
      } else if (animationType === 7) {
        flyFromTop(y);
      } else if (animationType === 8) {
        flyToTop(y);
      } else if (animationType === 9) {
        scaleUp();
      } else if (animationType === 10) {
        scaleDown();
      } else if (animationType === 11) {
        rotate();
      }
    });
  }

  function relocateShape() {
    $shape1El.attr("transform", transformAttr);
  }

  function flyFromLeft(x) {
    var startX = -500,
      endX = x,
      animation = setInterval(_loop, 20);

    function _loop() {
      startX += 100;
      $shape1El.attr("transform", "translate(" + startX + ",1316.129150390625) scale(1,1) ");

      if (startX >= endX) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToLeft(x) {
    var startX = x,
      endX = -500,
      animation = setInterval(_loop, 20);

    function _loop() {
      startX -= 100;
      $shape1El.attr("transform", "translate(" + startX + ",1316.129150390625) scale(1,1) ");
      if (startX <= endX) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyFromRight(x) {
    var startX = 19200,
      endX = x,
      animation = setInterval(_loop, 20);

    function _loop() {
      startX -= 100;
      $shape1El.attr("transform", "translate(" + startX + ",1316.129150390625) scale(1,1) ");
      if (startX <= endX) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToRight(x) {
    var startX = x,
      endX = 19200,
      animation = setInterval(_loop, 20);

    function _loop() {
      startX += 100;
      $shape1El.attr("transform", "translate(" + startX + ",1316.129150390625) scale(1,1) ");
      if (startX >= endX) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyFromBottom(y) {
    var startY = 5000,
      endY = y,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY -= 100;
      $shape1El.attr("transform", "translate(2415.485107421875,"+ startY +") scale(1,1)");
      if (startY <= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToBottom(y) {
    var startY = y,
      endY = 5000,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY += 100;
      $shape1El.attr("transform", "translate(2415.485107421875,"+ startY +") scale(1,1)");
      if (startY >= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyFromTop(y) {
    var startY = -3000,
      endY = y,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY += 100;
      $shape1El.attr("transform", "translate(2415.485107421875,"+ startY +") scale(1,1)");
      if (startY >= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToTop(y) {
    var startY = y,
      endY = -3000,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY -= 100;
      $shape1El.attr("transform", "translate(2415.485107421875,"+ startY +") scale(1,1)");
      if (startY <= endY ) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function scaleUp() {
    var startScale = 0.001,
      endScale = 1,
      animation = setInterval(_loop, 20);

    function _loop() {
      startScale *= 1.1;
      $shape1El.attr("transform", "translate(2415.485107421875,1316.129150390625) scale(" + startScale + "," + startScale + ")");
      $shape1El.css("transform-origin", "1200px 600px;");

      if(startScale >= endScale) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function scaleDown() {
    var startScale = 1,
      endScale = 0.001,
      animation = setInterval(_loop, 20);

    function _loop() {
      startScale *= 0.9;
      $shape1El.attr("transform", "translate(2415.485107421875,1316.129150390625) scale(" + startScale + "," + startScale + ")");
      $shape1El.css("transform-origin", "1200px 600px;");

      if(startScale <= endScale) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function rotate() {
    var startDegree = 10,
      endDegree = 360,
      animation = setInterval(_loop, 20);

    function _loop() {
      startDegree += 10;
      $shape1El.attr("transform", "translate(2415.485107421875,1316.129150390625) scale(1,1) rotate(" + startDegree + ")");
      //$shape1El.css("transform-origin", "1200px 600px;");

      if (startDegree >= endDegree) {
        clearInterval(animation);
       // relocateShape();
      }
    }
  }
})();