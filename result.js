document.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  // 로컬스토리지에서 MBTI 결과 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');

  if (mbtiResult) {
    // MBTI 결과가 있을 경우 결과를 표시
    resultElement.textContent = `${mbtiResult}입니다!`;
    restartButton.textContent = '테스트 하러 가기';
  } else {
    // MBTI 결과가 없을 경우 텍스트를 표시
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
  }

  restartButton.addEventListener('click', function () {
    // 결과 페이지에서 "테스트 하러 가기" 버튼을 클릭하면 로컬스토리지에서 결과를 제거하고 다시 테스트 페이지로 이동
    localStorage.removeItem('mbti_result');
    window.location.href = './index.html';
  });
});
