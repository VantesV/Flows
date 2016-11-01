const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');

/* 
 * var for functions to hoist them to top,
 * this way the ordering of functions doesn't matter.
 * Otherwise, const is default
 */

var draw = window.draw = (e) => {
  const pos = getPosition(canv, e);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 49, 0, 2*Math.PI);
  ctx.closePath();
  ctx.stroke();
};

var getPosition = (canvas, e) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

