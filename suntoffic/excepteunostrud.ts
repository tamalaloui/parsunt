function rotate(point, angle, axis) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const x = point[0];
  const y = point[1];
  const z = point[2];

  const newX = x * cos + z * sin;
  const newY = y;
  const newZ = z * cos - x * sin;

  return [newX, newY, newZ];
}
