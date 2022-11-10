/* ---------- Flow Function Declarations ---------- */
function customBezier(t, tMin, tMax, value1, value2, bezierPoints) {
  if (arguments.length !== 6)
    return value;
  var a = value2 - value1; var b = tMax - tMin; var c = clamp((t - tMin) / b, 0, 1);
  if (!(bezierPoints instanceof Array) || bezierPoints.length !== 4)
    bezierPoints = [0, 0, 1, 1];
  return a * h(c, bezierPoints) + value1;
  function h(f, g) {
    var x = 3 * g[0];
    var j = 3 * (g[2] - g[0]) - x;
    var k = 1 - x - j; var l = 3 * g[1];
    var m = 3 * (g[3] - g[1]) - l;
    var n = 1 - l - m; var d = f;
    for (var i = 0; i < 5; i++) {
      var z = d * (x + d * (j + d * k)) - f;
      if (Math.abs(z) < 1e-3) break;
      d -= z / (x + d * (2 * j + 3 * k * d));
    } return d * (l + d * (m + d * n));
  }
}

/* ---------- Flow Function Declarations ---------- */
/* ---------- Flow Expression Template ------------ */
var animationStartTime = 1;
var animationEndTime = 2;
var startValue = value;
var endValue = value * 2;
if (numKeys > 0) {
  var nearestKeyIndex = nearestKey(time).index;
  if (key(nearestKeyIndex).time > time) nearestKeyIndex--;
  if (nearestKeyIndex === 0 || nearestKeyIndex === numKeys) {
    startValue = endValue = value;
  } else {
    animationStartTime = key(nearestKeyIndex).time;
    animationEndTime = key(nearestKeyIndex + 1).time;
    startValue = key(nearestKeyIndex).value;
    endValue = key(nearestKeyIndex + 1).value;
  }
}
customBezier(time, animationStartTime, animationEndTime, startValue, endValue, [0.9, 0, 0.72, 1]);
/* ---------- Flow Expression Template ------------ */