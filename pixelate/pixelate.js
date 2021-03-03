var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
window.onload = firstDraw();

function firstDraw() {
  var initialImageURL =
    "https://upload.wikimedia.org/wikipedia/commons/7/73/University_of_eastern_finland_logo.jpg";
  draw(initialImageURL);
}
function draw(imgURL) {
  // Specify the src to load the image
  img.crossOrigin = "anonymous";
  img.src = imgURL;

  img.onload = function () {
    canvas.height = img.height / 4;
    canvas.width = img.width / 4;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    console.log("image draw");
    pixelate();
  };
}

function pixelate() {
  canvas.height = img.height;
  canvas.width = img.width;
  var size = blocks.value * 0.01,
    w = canvas.width * size,
    h = canvas.height * size;

  console.log(size);
  ctx.drawImage(img, 0, 0, w, h);
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}

function submitImageURL() {
  var imgURL = document.getElementById("ImageURL").value;

  //veriy the form isn't black or null
  if (imgURL == null || imgURL == "") {
    alert("Image URL must be filled out");
    return false;
  }
  if (imgURL.search("/https:/") !== -1) {
    alert("Image URL from https site (security reasons)");
    return false;
  }
  draw(imgURL);
}
blocks.addEventListener("change", pixelate, false);
window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
