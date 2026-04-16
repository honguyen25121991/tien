const modeInputs = document.querySelectorAll('input[name="view-mode"]');
const title = document.querySelector('.title');
const studentNameEl = document.querySelector('#student-name');
const studentIdEl = document.querySelector('#student-id');

const formatNameFromSlug = (slug) => {
  if (!slug) {
    return '';
  }

  const withSpaces = decodeURIComponent(slug)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim();

  return withSpaces
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const setStudentInfoFromPath = () => {
  const segments = window.location.pathname.split('/').filter(Boolean);

  if (segments.length < 2) {
    return;
  }

  const [nameSlug, studentCode] = segments;

  if (studentNameEl && nameSlug) {
    const formattedName = formatNameFromSlug(nameSlug);

    if (formattedName) {
      studentNameEl.textContent = formattedName;
    }
  }

  if (studentIdEl && /^\d{6,12}$/.test(studentCode)) {
    studentIdEl.textContent = studentCode;
  }
};

setStudentInfoFromPath();

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
