// Helpers for <ScrollFlight>.
// A route is a list of points: { x, y } are fractions of the host section's
// width/height, { ox, oy } are pixel offsets (on desktop routes these are
// scaled down a little on narrower screens).

/**
 * Points on a circle — dropped into a route, the spline makes a loop.
 * For a clean loop-de-loop while travelling right, start at the bottom
 * (startDeg 90) and go counter-clockwise (dir -1), entering at the circle's
 * bottom height.
 */
export function loop(cx, cy, r, startDeg = -90, dir = 1, { oy = 0, steps = 8, el, ey } = {}) {
  return Array.from({ length: steps + 1 }, (_, k) => {
    const a = ((startDeg + (dir * k * 360) / steps) * Math.PI) / 180;
    return { x: cx, y: cy, ox: r * Math.cos(a), oy: oy + r * Math.sin(a), el, ey };
  });
}

/**
 * Vertical position of a route point inside `host`. A point may be anchored
 * to an element instead of a fraction: { el: '.selector', ey: 0..1 } puts it
 * at that fraction of the element's height (plus `oy`), so routes follow the
 * real layout at any screen width. offsetTop is used so scroll-reveal
 * transforms don't skew the measurement.
 */
export function pointY(pt, host, h, s) {
  const oy = (pt.oy || 0) * s;
  if (pt.el) {
    const e = host.querySelector(pt.el);
    if (e) {
      let y = 0;
      for (let n = e; n && n !== host; n = n.offsetParent) y += n.offsetTop;
      return y + (pt.ey || 0) * e.offsetHeight + oy;
    }
  }
  return pt.y * h + oy;
}

/** Smooth path through every point (uniform Catmull-Rom → cubic Bézier). */
export function toPath(P) {
  if (P.length < 2) return '';
  const f = (n) => n.toFixed(1);
  let d = `M${f(P[0][0])},${f(P[0][1])}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[i - 1] || P[i];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}
