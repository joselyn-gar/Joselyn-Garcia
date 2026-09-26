// Rotation (degrees) that brings a face of <Die> to the front. Inverse of each face's placement.
export const FACE: Record<number, [number, number]> = {
  1: [0, 0], 6: [0, 180], 3: [0, -90], 4: [0, 90], 2: [-90, 0], 5: [90, 0],
};

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Spin a die a few full turns and land on `face`. Resolves when the roll settles.
export function roll(cube: HTMLElement, face: number, turns = 2, ms = 900): Promise<void> {
  const [x, y] = FACE[face];
  const base = Number(cube.dataset.turn || 0) + turns;
  cube.dataset.turn = String(base);
  cube.style.transition = `transform ${ms}ms cubic-bezier(.2,.8,.2,1)`;
  cube.style.transform = `rotateX(${x + base * 360}deg) rotateY(${y + base * 360}deg)`;
  return new Promise((r) => setTimeout(r, prefersReducedMotion() ? 0 : ms));
}
