export default function bar() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  document.body.appendChild(element);
}
