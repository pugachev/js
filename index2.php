<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHPレスポンシブカレンダー</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .calendar {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
            max-width: 600px;
            margin: auto;
        }
        .day, .date {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }
        .date.selected {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div class="calendar">
        <!-- 曜日 -->
        <div class="day">日</div>
        <div class="day">月</div>
        <div class="day">火</div>
        <div class="day">水</div>
        <div class="day">木</div>
        <div class="day">金</div>
        <div class="day">土</div>

        <!-- PHPで生成する日付がここに入ります -->
        <?php
        // PHPでカレンダーの日付を生成
        $year = date('Y');
        $month = date('m');
        $firstDayOfMonth = mktime(0, 0, 0, $month, 1, $year);
        $daysInMonth = date('t', $firstDayOfMonth);
        $firstDayOfWeek = date('w', $firstDayOfMonth);

        echo $firstDayOfMonth.'   '.$daysInMonth.'   '.$firstDayOfWeek;

        // 空白を埋める
        for ($i = 0; $i < $firstDayOfWeek; $i++) {
            echo "<div class='date'></div>";
        }

        // 日付を埋める
        for ($day = 1; $day <= $daysInMonth; $day++) {
            echo "<div class='date' data-date='$year-$month-$day'>$day</div>";
        }
        ?>
    </div>

    <script>
        document.querySelectorAll('.date').forEach(dateElement => {
            dateElement.addEventListener('click', () => {
                dateElement.classList.toggle('selected');
            });
        });
    </script>
</body>
</html>