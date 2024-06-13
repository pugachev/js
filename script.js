document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.getElementById('calendar');
  const days = ['日', '月', '火', '水', '木', '金', '土'];

  // 曜日のヘッダーを追加
  days.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = day;
      calendar.appendChild(dayElement);
  });

  // 日付を追加
  for (let i = 1; i <= 30; i++) { // 30日間と仮定
      const dateElement = document.createElement('div');
      dateElement.classList.add('date');
      dateElement.textContent = i;
      calendar.appendChild(dateElement);

      // クリックイベントを追加
      dateElement.addEventListener('click', (e) => {
          document.querySelectorAll('.date').forEach(date => date.classList.remove('selected'));
          e.target.classList.add('selected');
      });
  }
});