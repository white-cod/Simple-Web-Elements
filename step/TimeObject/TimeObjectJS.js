const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    
    displayTime: function() {
        document.getElementById('timeDisplay').innerText = `${this.hours}:${this.minutes}:${this.seconds}`;
    },

    changeSeconds: function(seconds) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
        this.displayTime();
    },

    changeMinutes: function(minutes) {
        let totalMinutes = this.hours * 60 + this.minutes + minutes;
        this.hours = Math.floor(totalMinutes / 60) % 24;
        this.minutes = totalMinutes % 60;
        this.displayTime();
    },

    changeHours: function(hours) {
        this.hours = (this.hours + hours) % 24;
        this.displayTime();
    }
};

time.changeSeconds(130);
time.changeMinutes(10);
time.changeHours(2);