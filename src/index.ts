export function pad(s: string): string {
  // padStart should be wrapped by plugin-transform-runtime
  return s.padStart(123);
}

export async function foobar() {
  // regenerator should not pollute the global namespace
  await Promise.resolve(42);
}

export function arr(): number | undefined {
  // find should be wrapped by plugin-transform-runtime
  return [1, 2, 3].find(a => a === 4);
}

export function innocent(a: { run: () => void }) {
  // run should not be wrapped by plugin-transform-runtime
  a.run();
}
