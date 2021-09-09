const cricle = document.getElementById('circle');
const circleStyle = cricle.style;

document.addEventListener('mousemove', e => {
  circleStyle.top = `${e.clientY - cricle.offsetHeight/2}px`;
  circleStyle.left = `${e.clientX - cricle.offsetWidth/2}px`;
});