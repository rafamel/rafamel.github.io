export { default as withProps } from './with-props';
export { Provider, Consumer, withContext } from './context';

export default function compose(...fns: Array<(value: any) => any>): any {
  if (fns.length === 0) return (arg: any) => arg;
  if (fns.length === 1) return fns[0];

  return fns.reduce((a, b) => (...args) => a(b(...args)));
}
