(function () {
  $(document).ready(function () {
    initialize();
  });

  var $shape1El = $(),
    transformAttr, x, y;

  const leftFlyXPos = -500,
    rightFlyXPos = 19200,
    bottomFlyYPos = 5000,
    topFlyYPos = -3000;

  function initialize() {
    $shape1El = $("#slideObjContainer").find("#view5687"),
      transformAttr = $shape1El.attr("transform"),
      x = 2415.4851074,
      y = 1316.129150390625;

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
    // 추후 layer를 씌워 그 위에 애니메이션 작업이 수행된다면 shape relocate는 필요없음
    $shape1El.attr("transform", transformAttr);
  }

  function flyFromLeft(x) {
    var startX = leftFlyXPos,
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
      endX = leftFlyXPos,
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
    var startX = rightFlyXPos,
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
      endX = rightFlyXPos,
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
    var startY = bottomFlyYPos,
      endY = y,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY -= 100;
      $shape1El.attr("transform", "translate(2415.485107421875," + startY + ") scale(1,1)");

      if (startY <= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToBottom(y) {
    var startY = y,
      endY = bottomFlyYPos,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY += 100;
      $shape1El.attr("transform", "translate(2415.485107421875," + startY + ") scale(1,1)");

      if (startY >= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyFromTop(y) {
    var startY = topFlyYPos,
      endY = y,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY += 100;
      $shape1El.attr("transform", "translate(2415.485107421875," + startY + ") scale(1,1)");

      if (startY >= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function flyToTop(y) {
    var startY = y,
      endY = topFlyYPos,
      animation = setInterval(_loop, 20);

    function _loop() {
      startY -= 100;
      $shape1El.attr("transform", "translate(2415.485107421875," + startY + ") scale(1,1)");

      if (startY <= endY) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function scaleUp() {
    //TODO: div와 달리 transform-origin을 도형의 정중앙으로 셋팅을 해줘야 확대,축소,회전이 가운데 기준으로 실행된다.
    var startScale = 0.001,
      endScale = 1,
      animation = setInterval(_loop, 20);

    function _loop() {
      startScale *= 1.1;
      $shape1El.attr(
        "transform", "translate(2415.485107421875,1316.129150390625) scale(" + startScale + "," + startScale + ")");

      if (startScale >= endScale) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function scaleDown() {
    //TODO: div와 달리 transform-origin을 도형의 정중앙으로 셋팅을 해줘야 확대,축소,회전이 가운데 기준으로 실행된다.
    var startScale = 1,
      endScale = 0.001,
      animation = setInterval(_loop, 20);

    function _loop() {
      startScale *= 0.9;
      $shape1El.attr(
        "transform", "translate(2415.485107421875,1316.129150390625) scale(" + startScale + "," + startScale + ")");

      if (startScale <= endScale) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }

  function rotate() {
    //TODO: div와 달리 transform-origin을 도형의 정중앙으로 셋팅을 해줘야 확대,축소,회전이 가운데 기준으로 실행된다.
    var startDegree = 10,
      endDegree = 360,
      animation = setInterval(_loop, 20);

    function _loop() {
      startDegree += 10;
      $shape1El.attr(
        "transform", "translate(2415.485107421875,1316.129150390625) scale(1,1) rotate(" + startDegree + ")");

      if (startDegree >= endDegree) {
        clearInterval(animation);
        relocateShape();
      }
    }
  }
})();