interface ForProps<T> {
  each: readonly T[];
  children: (elem: T, i: number) => React.ReactNode;
  fallback?: React.ReactElement | null;
}

export function For<T>({ each, children, fallback = null }: ForProps<T>) {
  if (each.length === 0) return fallback;

  return <>{each.map((value, index) => children(value, index))}</>;
}
