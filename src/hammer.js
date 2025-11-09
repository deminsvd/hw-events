export function setupCursorChange() {
  document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('mouseenter', () => {
      if (hole.className.includes('hole_has-mole')) {
        // Добавляем класс, который меняет курсор
        hole.classList.add('mole-cursor');
      }
    });
    hole.addEventListener('mouseleave', () => {
      // Убираем класс, возвращая стандартный курсор
      hole.classList.remove('mole-cursor');
    });
  });
}