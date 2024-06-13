// calendar.js

document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    
    // 今月の日付を生成します
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    // 月の最初の日と最後の日を取得
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // カレンダーに日付を追加
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }
    
    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i;
        day.addEventListener('click', function() {
            this.classList.toggle('circle');
        });
        calendar.appendChild(day);
    }
});