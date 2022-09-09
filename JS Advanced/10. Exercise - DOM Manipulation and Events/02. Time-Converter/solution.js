function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    for (let b of buttons) {
        b.addEventListener(`click`, time);
        function time() {
            if (b.id == `daysBtn`) {
                document.getElementById(`hours`).value =
                    document.getElementById(`days`).value * 24;
                document.getElementById(`minutes`).value =
                    document.getElementById(`days`).value * 1440;
                document.getElementById(`seconds`).value =
                    document.getElementById(`days`).value * 86400;
            } else if (b.id == `hoursBtn`) {
                document.getElementById(`days`).value =
                    document.getElementById(`hours`).value / 24;
                document.getElementById(`minutes`).value =
                    document.getElementById(`hours`).value * 60;
                document.getElementById(`seconds`).value =
                    document.getElementById(`hours`).value * 3600;
            } else if (b.id == `minutesBtn`) {
                document.getElementById(`days`).value =
                    document.getElementById(`minutes`).value / 1440;
                document.getElementById(`hours`).value =
                    document.getElementById(`minutes`).value / 60;
                document.getElementById(`seconds`).value =
                    document.getElementById(`minutes`).value * 60;
            } else {
                document.getElementById(`days`).value =
                    document.getElementById(`seconds`).value / 86400;
                document.getElementById(`hours`).value =
                    document.getElementById(`seconds`).value / 3600;
                document.getElementById(`minutes`).value =
                    document.getElementById(`seconds`).value / 60;
            }
        }
    }
}
