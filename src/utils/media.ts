export default function media(
  min: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'tablet' | 'desktop',
  theme: any
): string {
  if (min === 'tablet') min = 'sm';
  else if (min === 'desktop') min = 'lg';
  return `@media (min-width:${theme.breakpoints.values[min]}px)`;
}
