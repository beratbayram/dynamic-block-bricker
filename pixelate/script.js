window.onload = () => {
  const imgURL =
    "https://upload.wikimedia.org/wikipedia/commons/7/73/University_of_eastern_finland_logo.jpg";
  const canvas = document.getElementById("bufferCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgURL;

  img.onload = () => {
    canvas.height = img.height / 10;
    canvas.width = img.width / 10;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    canvas.height = img.height;
    canvas.width = img.width;

    const size = 1;
    const w = canvas.width * size;
    const h = canvas.height * size;

    ctx.drawImage(img, 0, 0, w, h);
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    const tolerance = 55;
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const pixel = getPixelValue(data, canvas.width, x, y);

        if (
          x > canvas.width - 1 / size || // prevent alignment issues
          y > canvas.height - 1 / size ||
          (pixel.red >= 255 - tolerance &&
            pixel.green >= 255 - tolerance &&
            pixel.blue >= 255 - tolerance)
        ) {
          // remove pixel
          data[(y * canvas.width + x) * 4 + 0] = 0;
          data[(y * canvas.width + x) * 4 + 1] = 0;
          data[(y * canvas.width + x) * 4 + 2] = 0;
          data[(y * canvas.width + x) * 4 + 3] = 0;
        } else {
          data[(y * canvas.width + x) * 4 + 3] = 255;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const result = [];
    
    for (let y = 0; y < canvas.height; y+=1/size) {
      const element = [];
      for (let x = 0; x < canvas.width; x+=1/size) {
        const pixel = getPixelValue(data, canvas.width, x, y);
        element.push({
          r: pixel.red,
          g: pixel.green,
          b: pixel.blue,
          a: pixel.alpha,
        });
      }
      result.push(element);
    }
    console.log(result);
  };
};

function getPixelValue(data, width, x, y) {
  return {
    red: data[(y * width + x) * 4 + 0],
    green: data[(y * width + x) * 4 + 1],
    blue: data[(y * width + x) * 4 + 2],
    alpha: data[(y * width + x) * 4 + 3],
  };
}
