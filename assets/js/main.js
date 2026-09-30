const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const requestForm = document.querySelector('#request-form');
if (requestForm) {
  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!requestForm.reportValidity()) return;

    // Replace this address with the email address that should receive requests.
    const recipient = 'CHANGE-ME@example.com';
    const data = new FormData(requestForm);
    const subject = `[강의 요청] ${data.get('organization')} - ${data.get('topic')}`;
    const body = [
      `담당자: ${data.get('name')}`,
      `기관: ${data.get('organization')}`,
      `연락처: ${data.get('phone')}`,
      `이메일: ${data.get('email')}`,
      `희망 분야: ${data.get('topic')}`,
      `희망 일정: ${data.get('date') || '미정'}`,
      `교육 대상/인원: ${data.get('audience') || '미기재'}`,
      '',
      '문의 내용:',
      data.get('message')
    ].join('\n');

    if (recipient.includes('CHANGE-ME')) {
      document.querySelector('#form-message').textContent = '받는 이메일 주소를 설정해야 접수가 가능합니다. docs/사용안내.md의 설정 방법을 확인해 주세요.';
      return;
    }
    document.querySelector('#form-message').textContent = '이메일 앱에서 내용을 확인하고 전송을 완료해 주세요.';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
