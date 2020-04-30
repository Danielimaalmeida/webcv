export function scrollTo(elementId: string): void {
  const toNavigate = elementId.toLowerCase();
  const element: HTMLElement = document.getElementById(toNavigate);
  element.scrollIntoView({behavior: 'smooth'});
}
