(function (){
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let new_birthday = "june 30, 2024 00:00:00",
        countDown = new Date(new_birthday).getTime(),
        x = setInterval(function() {
          
            let now = new Date().getTime(),
                distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance /day),
                    document.getElementById("hours").innerText = Math.floor((distance % day)
                / hour),
                document.getElementById("minutes").innerText = Math.floor((distance % hour)
                / minute),
                document.getElementById("seconds").innerText = Math.floor((distance % minute)
                / second);

//          what to do after new birthday was over    
     
            if(distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "Happy Birthday Christian!We thank God for His protection.Enjoy your special day and may you be showered with God's love and grace";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
        }, 1000);

        // Reminder dialog handling
    const remindMeButton = document.getElementById("remindMeButton");
    const reminderDialog = document.getElementById("reminderDialog");
    const closeDialogButton = document.getElementById("closeDialog");
    const allowNotificationsButton = document.getElementById("allowNotifications");

    remindMeButton.addEventListener("click", () => {
        reminderDialog.style.display = "block";
    });

    closeDialogButton.addEventListener("click", () => {
        reminderDialog.style.display = "none";
    });

    allowNotificationsButton.addEventListener("click", () => {
        reminderDialog.style.display = "none";

        // Request notification permission
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    alert("Notification permission granted. You will be notified when the countdown reaches zero.");
                } else {
                    alert("Notification permission denied.");
                }
            });
        } else {
            alert("Notification permission already granted. You will be notified when the countdown reaches zero.");
        }
    });

    

}());

