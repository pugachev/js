$(document).ready(function() {
    const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  
    function generateCalendar(year, month) {
      const firstDay = (new Date(year, month)).getDay();
      const daysInMonth = 32 - new Date(year, month, 32).getDate();
      let calendarHTML = '<div class="calendar-header">';
      dayNames.forEach(day => {
        calendarHTML += `<div class="calendar-day">${day}</div>`;
      });
      calendarHTML += '</div>';
  
      let dayCounter = 1;
      for (let i = 0; i < 6; i++) {
        calendarHTML += '<div class="calendar-row">';
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            calendarHTML += '<div class="calendar-day"></div>'; // 空白
          } else if (dayCounter > daysInMonth) {
            break;
          } else {
            const today = new Date();
            const isToday = (today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayCounter);
            calendarHTML += `<div class="calendar-day ${isToday ? 'today' : ''}" data-date="${year}-${month+1}-${dayCounter}">${dayCounter}</div>`;
            dayCounter++;
          }
        }
        calendarHTML += '</div>';
      }
  
      $('#calendar').html(calendarHTML);
    }
  
    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth());
  
    $('#calendar').on('click', '.calendar-day', function() {
      $('.calendar-day').removeClass('selected');
      $(this).addClass('selected');
    });
  });
  