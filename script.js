document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    alert(`Has hecho clic en la celda ${cell.textContent}`);
  });
});
