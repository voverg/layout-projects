// 3D Scroll
const $frames = document.querySelectorAll('.frame');

const speed = 3;
const zSpacing = -1000;
let lastPosition = zSpacing / speed;
const zValues = [];

function scrollHandler(event) {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const delta = lastPosition - top;

  lastPosition = top;

  $frames.forEach((frame, index) => {
    zValues.push((index * zSpacing) + zSpacing);
    zValues[index] += delta * -speed;

    const transform = `translateZ(${zValues[index]}px)`;
    const opacity = zValues[index] < Math.abs(zSpacing) / 0.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
}

window.addEventListener('scroll', scrollHandler);
window.scrollTo(0, 1);
