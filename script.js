function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let isSpinning = false;

function spin() {
  if (isSpinning) return; // Prevent multiple spins
  isSpinning = true;

  const spinner = document.querySelector(".spinner-inner");
  const reward_input = document.querySelector("#reward_input");

  const outcomes = [
    { prize: "₹ 10", angle: 0, num:10 },
    { prize: "₹ 5", angle: 60, num:5 },
    { prize: "₹ 2", angle: 120, num:2 },
    { prize: "₹ 8", angle: 180, num:8 },
    { prize: "₹ 9", angle: 240, num:9 },
    { prize: "₹ 7", angle: 300, num:7 }
  ];

  // Randomly select a prize
  const selectedOutcome = outcomes.filter((outcome)=>outcome.num == reward_input.value);
  const spinAngle = 3600 + selectedOutcome.angle; // Spin at least 10 full rotations
  console.log("selectedOutcome",selectedOutcome)
  console.log("spinAngle",spinAngle)

      // Spin the wheel
    spinner.style.transform = `rotate(${spinAngle}deg)`

  // Reset spin state after spin
  setTimeout(() => {
    isSpinning = false;
    document.getElementById("card-text").innerHTML =
      "You have won a reward of " + selectedOutcome.prize;
    document.getElementById("reward_card").style.display = "flex";
  }, 5000);
}

function spinOld() {
  document.addEventListener('click', () => {
    // Play the sound
    //   wheel.play();

    const box = document.getElementById("box");
    const arrow_div = document.getElementById("arrow_div");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";
    let SelectedItemColor = "";

    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]);
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);

    let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
    ]);
    console.log(Hasil[0]);

    // get the value of selected item
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "₹ 7", SelectedItemColor = "#f6290c";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "₹ 9", SelectedItemColor = "#f5b122";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "₹ 8", SelectedItemColor = "#e86c57";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "₹ 2", SelectedItemColor = "#ff7cd8";
    if (Sanken.includes(Hasil[0])) SelectedItem = "₹ 6", SelectedItemColor = "#0a77d5";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "₹ 4", SelectedItemColor = "#e86c57";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = "₹ 10", SelectedItemColor = "#0a77d5";

    // spin
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    arrow_div.style.setProperty("transition", "all ease 5s");
    // arrow_div.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);

    // alert
    setTimeout(function () {
      // applause.play();
      // alert("Congratulations, You Won " + SelectedItem + " Reward.");
      document.getElementById("card-text").innerHTML =
        "You have won a reward of " + SelectedItem;
      document.getElementById("reward_card").style.display = "flex";
      document.getElementById("reward_card").style.backgroundColor = SelectedItemColor;
    }, 5500);

    if (spinned === true) {
      mainbox.style.display = "none";
    }
    // delay
    //   setTimeout(function () {
    //     box.style.setProperty("transition", "initial");
    //     box.style.transform = "rotate(90deg)";
    //   }, 6000);
  }, { once: true });
}


// Scratch Card

(function () {
  "use strict";

  var isDrawing, lastPoint;
  var container = document.getElementById("js-container"),
    canvas = document.getElementById("js-canvas"),
    canvasWidth = canvas.width,
    canvasHeight = canvas.height,
    ctx = canvas.getContext("2d"),
    image = new Image(),
    brush = new Image();

  // base64 Workaround because Same-Origin-Policy
  image.src =
    "data:image/jpeg;base64,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";

  image.onload = function () {
    ctx.drawImage(image, 0, 0);
    // Show the form when Image is loaded.
    document.querySelectorAll(".form")[0].style.visibility = "visible";
  };
  brush.src =
    "data:image/png;base64,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";

  canvas.addEventListener("mousedown", handleMouseDown, false);
  canvas.addEventListener("touchstart", handleMouseDown, false);
  canvas.addEventListener("mousemove", handleMouseMove, false);
  canvas.addEventListener("touchmove", handleMouseMove, false);
  canvas.addEventListener("mouseup", handleMouseUp, false);
  canvas.addEventListener("touchend", handleMouseUp, false);

  function distanceBetween(point1, point2) {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }

  function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  // Only test every `stride` pixel. `stride`x faster,
  // but might lead to inaccuracy
  function getFilledInPixels(stride) {
    if (!stride || stride < 1) {
      stride = 1;
    }

    var pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
      pdata = pixels.data,
      l = pdata.length,
      total = l / stride,
      count = 0;

    // Iterate over all pixels
    for (var i = (count = 0); i < l; i += stride) {
      if (parseInt(pdata[i]) === 0) {
        count++;
      }
    }

    return Math.round((count / total) * 100);
  }

  function getMouse(e, canvas) {
    var offsetX = 0,
      offsetY = 0,
      mx,
      my;

    if (canvas.offsetParent !== undefined) {
      do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
      } while ((canvas = canvas.offsetParent));
    }

    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;

    return { x: mx, y: my };
  }

  function handlePercentage(filledInPixels) {
    filledInPixels = filledInPixels || 0;
    console.log(filledInPixels + "%");
    if (filledInPixels > 75) {
      canvas.parentNode.removeChild(canvas);
    }
  }

  function handleMouseDown(e) {
    isDrawing = true;
    lastPoint = getMouse(e, canvas);
  }

  function handleMouseMove(e) {
    if (!isDrawing) {
      return;
    }

    e.preventDefault();

    var currentPoint = getMouse(e, canvas),
      dist = distanceBetween(lastPoint, currentPoint),
      angle = angleBetween(lastPoint, currentPoint),
      x,
      y;

    for (var i = 0; i < dist; i++) {
      x = lastPoint.x + Math.sin(angle) * i - 25;
      y = lastPoint.y + Math.cos(angle) * i - 25;
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(brush, x, y);
    }

    lastPoint = currentPoint;
    handlePercentage(getFilledInPixels(32));
  }

  function handleMouseUp(e) {
    isDrawing = false;
  }
})();