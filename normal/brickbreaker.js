const RADIUS = 8;
const MAX_LEVEL = 5;
const scorePerBrick = 10;

const pixelArr1 = [
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 238, g: 65, b: 12, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 238, g: 65, b: 12, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 169, g: 27, b: 202, a: 255 },
    { r: 169, g: 27, b: 202, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 180, g: 191, b: 28, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 180, g: 191, b: 28, a: 255 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
];
const pixelArr2 = [
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 21, g: 21, b: 86, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 21, g: 21, b: 86, a: 255 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
];
const pixelArr3 = [
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 241, g: 44, b: 8, a: 255 },
    { r: 241, g: 44, b: 8, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
  ],
  [
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 33, g: 52, b: 119, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
];
const pixelArr4 = [
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 0, g: 247, b: 249, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 249, g: 140, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 40, g: 40, b: 1, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 221, g: 221, b: 0, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
];
const pixelArr5 = [
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 162, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 88, b: 255, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 18, g: 42, b: 212, a: 255 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
  [
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
    { r: 0, g: 0, b: 0, a: 0 },
  ],
];

function playHitSound() {
  const sound = document.createElement("audio");
  sound.src = "https://www.w3schools.com/graphics/bounce.mp3";
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);
  sound.play().catch(null);
}
let level = 0;

do {
  level = prompt("Enter Level 1-5 (for debug purposes)");
} while (level < 1 || 5 < level);
let currentLevel = level;
let GAMEOVER = false;
let goLeft = false;
let goRight = false;
let life = 3;
let maxLife = 5;
const cvs = document.getElementById("space");
const ctx = cvs.getContext("2d");

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) goLeft = true;
  else if (event.keyCode == 39) goRight = true;
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) goLeft = false;
  else if (event.keyCode == 39) goRight = false;
});

const table = {
  width: 250,
  height: 25,
  x: cvs.width * 0.5 - 50,
  y: cvs.height - 45,
  dx: 13,
};

function drawTable() {
  ctx.fillStyle = "#FFA500";
  ctx.fillRect(table.x, table.y, table.width, table.height);

  ctx.strokeStyle = "#8B008B";
  ctx.strokeRect(table.x, table.y, table.width, table.height);
}

function moveTable() {
  if (goRight && table.x + table.width < cvs.width) {
    table.x += table.dx;
  } else if (goLeft && table.x > 0) {
    table.x -= table.dx;
  }
}

const ball = {
  x: cvs.width / 2,
  y: table.y - RADIUS,
  radius: RADIUS,
  speed: 8,
  dx: 8 * (Math.random() * 2 - 1),
  dy: -8,
};

function drawBall() {
  ctx.beginPath();

  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#DC143C";
  ctx.fill();

  ctx.closePath();
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function ballHitToBorders() {
  if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
    playHitSound();

  }

  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
    playHitSound();

  }

  if (ball.y + ball.radius > cvs.height) {
    life--;
    resetBall();
  }
}

function resetBall() {
  ball.x = cvs.width / 2;
  ball.y = table.y - RADIUS;
  ball.dx = 8 * (Math.random() * 2 - 1);
  ball.dy = -8;
}

function ballHitToTable() {
  if (
    ball.x < table.x + table.width &&
    ball.x > table.x &&
    table.y < table.y + table.height &&
    ball.y > table.y
  ) {
    playHitSound();

    let hitPoint = ball.x - (table.x + table.width / 2);
    hitPoint = hitPoint / (table.width / 2);

    let angle = (hitPoint * Math.PI) / 3;

    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}

let brick = {
  width: 67,
  height: 25,
  row: 14,
  offSetLeft: 15,
  offSetTop: 15,
  marginTop: 30, //Üstte bırakılacak boşluk
  fillColor: "#7FFFD4",
  strokeColor: "#FFF",
  column: 12,
};

let bricks = [];

function createBricks() {
  for (let r = 0; r < brick.row; r++) {
    bricks[r] = [];
    for (let c = 0; c < brick.column; c++) {
      let durum = false;
      if (currentLevel == 1) {
        if (pixelArr1[r][c].a == 255) durum = true;
      } else if (currentLevel == 2) {
        if (pixelArr2[r][c].a == 255) durum = true;
      } else if (currentLevel == 3) {
        if (pixelArr3[r][c].a == 255) durum = true;
      } else if (currentLevel == 4) {
        if (pixelArr4[r][c].a == 255) durum = true;
      } else if (currentLevel == 5) {
        if (pixelArr5[r][c].a == 255) durum = true;
      }

      bricks[r][c] = {
        x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
        y:
          r * (brick.offSetTop + brick.height) +
          brick.offSetTop +
          brick.marginTop,
        status: durum,
      };
    }
  }
}

createBricks();

function drawBricks() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];

      if (b.status) {
        if (currentLevel == 1)
          ctx.fillStyle =
            "rgba(" +
            pixelArr1[r][c].r +
            ", " +
            pixelArr1[r][c].g +
            ", " +
            pixelArr1[r][c].b +
            ", " +
            pixelArr1[r][c].a +
            ")";
        else if (currentLevel == 2)
          ctx.fillStyle =
            "rgba(" +
            pixelArr2[r][c].r +
            ", " +
            pixelArr2[r][c].g +
            ", " +
            pixelArr2[r][c].b +
            ", " +
            pixelArr2[r][c].a +
            ")";
        else if (currentLevel == 3)
          ctx.fillStyle =
            "rgba(" +
            pixelArr3[r][c].r +
            ", " +
            pixelArr3[r][c].g +
            ", " +
            pixelArr3[r][c].b +
            ", " +
            pixelArr3[r][c].a +
            ")";
        else if (currentLevel == 4)
          ctx.fillStyle =
            "rgba(" +
            pixelArr4[r][c].r +
            ", " +
            pixelArr4[r][c].g +
            ", " +
            pixelArr4[r][c].b +
            ", " +
            pixelArr4[r][c].a +
            ")";
        else if (currentLevel == 5)
          ctx.fillStyle =
            "rgba(" +
            pixelArr5[r][c].r +
            ", " +
            pixelArr5[r][c].g +
            ", " +
            pixelArr5[r][c].b +
            ", " +
            pixelArr5[r][c].a +
            ")";

        ctx.fillRect(b.x, b.y, brick.width, brick.height);

        ctx.strokeStyle = brick.strokeColor;
        ctx.strokeRect(b.x, b.y, brick.width, brick.height);
      }
    }
  }
}

function ballHitToBrick() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      if (b.status) {
        if (
          ball.x + ball.radius > b.x &&
          ball.x - ball.radius < b.x + brick.width &&
          ball.y + ball.radius > b.y &&
          ball.y - ball.radius < b.y + brick.height
        ) {
          playHitSound();
          ball.dy = -ball.dy;
          b.status = false; // the brick is broken
          //totalScore += scorePerBrick;
        }
      }
    }
  }
}

function showGameStats(text, textX, textY, img, imgX, imgY) {
  // draw text
  ctx.fillStyle = "#FFF";
  ctx.font = "25px Germania One";
  ctx.fillText(text, textX, textY);

  // draw image
  ctx.drawImage(img, imgX, imgY, (width = 25), (height = 25));
}

function draw() {
  drawTable();
  drawBall();
  drawBricks();

  let ht = 30;
  for (let i = 0; i < life; i++) {
    showGameStats(" ", cvs.width - 155, 25, FULL_LIFE_IMG, i * ht + 5, 5);
  }

  let tc = 30;
  for (let j = 0; j < maxLife - life; j++) {
    showGameStats(" ", cvs.width - 25, 25, LIFE_IMG, life * ht + j * tc + 5, 5);
  }

  let post = "st";
  if (currentLevel == 2) post = "nd";
  else if (currentLevel == 3) post = "rd";
  else if (currentLevel == 4) post = "th";
  else if (currentLevel == 5) post = "th";
  showGameStats(
    currentLevel + post + " LEVEL",
    cvs.width / 2,
    25,
    LEVEL_IMG,
    cvs.width / 2 - 30,
    5
  );

  //showGameStats(life, cvs.width - 25, 25, LIFE_IMG, 15, 5);

  //showGameStats(" ", cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5);
  //showGameStats(" ", cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5);
}

function gameOver() {
  if (life <= 0) {
    lost();
    GAMEOVER = true;
  }

  let ht = 30;
  for (let i = 0; i < life; i++) {
    showGameStats(" ", cvs.width - 155, 25, FULL_LIFE_IMG, i * ht + 5, 5);
  }

  let tc = 30;
  for (let j = 0; j < maxLife - life; j++) {
    showGameStats(" ", cvs.width - 25, 25, LIFE_IMG, life * ht + j * tc + 5, 5);
  }
}

function levelUp() {
  let isLevelDone = true;

  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      isLevelDone = isLevelDone && !bricks[r][c].status;
    }
  }

  if (isLevelDone) {
    if (currentLevel >= MAX_LEVEL) {
      won();
      GAMEOVER = true;
      return;
    }

    currentLevel++;
    createBricks();
    ball.speed += 0.5;
    resetBall();
    if (life < maxLife) {
      life++;
    }
  }
}

function update() {
  moveTable();

  moveBall();

  ballHitToBorders();

  ballHitToTable();

  ballHitToBrick();

  gameOver();

  levelUp();
}

const gameover = document.getElementById("gameover");
const youlose = document.getElementById("youlose");
const youwin = document.getElementById("youwin");

function loop() {
  if (currentLevel == 1) ctx.drawImage(BG1_IMG, 0, 0);
  else if (currentLevel == 2) ctx.drawImage(BG2_IMG, 0, 0);
  else if (currentLevel == 3) ctx.drawImage(BG3_IMG, 0, 0);
  else if (currentLevel == 4) ctx.drawImage(BG4_IMG, 0, 0);
  else if (currentLevel == 5) ctx.drawImage(BG5_IMG, 0, 0);
  draw();
  update();

  if (!GAMEOVER) {
    requestAnimationFrame(loop);
  }
}
loop();

function won() {
  gameover.style.display = "block";
  youwon.style.display = "block";
}

function lost() {
  gameover.style.display = "block";
  youlose.style.display = "block";
}
