import document from 'document';
import clock, { TickEvent } from 'clock';

// ----- Clock ------
const hourHand = document.getElementById('hourHand') as GroupElement;
const minuteHand = document.getElementById('minuteHand') as GroupElement;

clock.granularity = 'minutes';
clock.ontick = (event: TickEvent) => {
    hourHand.groupTransform.rotate.angle =
        30 * (event.date.getHours() % 12) + 0.5 * event.date.getMinutes();
    minuteHand.groupTransform.rotate.angle =
        6 * event.date.getMinutes() + 0.1 * event.date.getSeconds();
};

// ----- Clock End -----
