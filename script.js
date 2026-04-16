const modeInputs = document.querySelectorAll('input[name="view-mode"]');
const title = document.querySelector('.title');

modeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.radio-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.contains(input) && input.checked);
    });

    if (input.value === 'weekly') {
      title.innerHTML = 'Xem thời khóa biểu theo tuần <span>Hệ đào tạo chính quy</span>';
      return;
    }

    title.innerHTML = 'Xem thời khóa biểu tổng quát <span>Hệ đào tạo chính quy</span>';
  });
});
