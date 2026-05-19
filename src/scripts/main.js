'use strict';

const table = document.querySelector('table');
table.addEventListener('click', (e) => {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const th = e.target.closest('th');
  if(!th) return;
  const columnIndex = th.cellIndex;


  rows.sort((a, b) => {
    const valueA = a.cells[columnIndex].textContent;
    const valueB = b.cells[columnIndex].textContent;

    return valueA.localeCompare(valueB);
  });
  
  rows.forEach(row => tbody.appendChild(row));
});
