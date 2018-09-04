export { t1 as t2 } from "./flow";

interface T1 {
  (a: number, b: number): number;
}

export class T2 {
  static a = 1;
}

export function t1(a: number, b: number): number {
  const obj1 = {
    a: 1,
    b: 2,
  };
  const obj2 = {
    ...obj1,
    c: 3,
  };
  const { c } = obj2;
  return a + b + c;
}
