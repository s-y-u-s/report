let timeLeft = 1500;
let timerId = null;

function toggleTimer() {
    const btn = document.getElementById('startBtn');
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        btn.innerText = 'スタート！';
    } else {
        btn.innerText = 'ストップ';
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
                const sec = (timeLeft % 60).toString().padStart(2, '0');
                document.getElementById('timer').innerText = `${min}:${sec}`;
            } else {
                clearInterval(timerId);
                alert("お疲れ様でした！");
            }
        }, 1000);
    }
}