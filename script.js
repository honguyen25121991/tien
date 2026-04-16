const modeInputs = document.querySelectorAll('input[name="view-mode"]');
const title = document.querySelector('.title');

modeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.radio-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.contains(input) && input.checked);
    });

    if (input.value === 'weekly') {
      title.innerHTML = 'Xem thoi khoa bieu theo tuan <span>| See the weekly schedule</span>';
      return;
    }

    title.innerHTML = 'Xem thoi khoa bieu tong quat <span>| See the general schedule</span>';
  });
});
