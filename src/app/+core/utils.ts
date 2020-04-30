export function scrollTo(elementId: string): void {
  const toNavigate = elementId.toLowerCase();
  const element: HTMLElement = document.getElementById(toNavigate);
  const headerOffset = 45;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}
