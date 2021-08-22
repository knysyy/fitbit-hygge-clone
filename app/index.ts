import document from 'document';
import clock, { TickEvent } from 'clock';
import * as messaging from 'messaging';
import { MessageEvent } from 'messaging';
import * as Config from './config';
import {
    BACKGROUND_COLOR_KEY,
    HOUR_HAND_COLOR_KEY,
    MINUTE_HAND_COLOR_KEY
} from '../types';

const background = document.getElementById('background') as RectElement;
const hourHand = document.getElementById('hourHand') as GroupElement;
const hourHands = document.getElementsByClassName('hourHand') as (RectElement | CircleElement)[];
const minuteHand = document.getElementById('minuteHand') as GroupElement;
const minuteHands = document.getElementsByClassName('minuteHand') as (RectElement | CircleElement)[];

const init = () => {
    Config.load();
    background.style.fill = Config.getItem(BACKGROUND_COLOR_KEY);
    hourHands.forEach(hand => {
        hand.style.fill = Config.getItem(HOUR_HAND_COLOR_KEY);
    });
    minuteHands.forEach(hand => {
        hand.style.fill = Config.getItem(MINUTE_HAND_COLOR_KEY);
    })
};

messaging.peerSocket.onmessage = (event: MessageEvent) => {
    if (event.data.value) {
        switch (event.data.key) {
            case BACKGROUND_COLOR_KEY:
                background.style.fill = event.data.value;
                Config.setItem(BACKGROUND_COLOR_KEY, event.data.value);
                break;
            case HOUR_HAND_COLOR_KEY:
                hourHands.forEach(hand => {
                    hand.style.fill = event.data.value;
                });
                Config.setItem(HOUR_HAND_COLOR_KEY, event.data.value);
                break;
            case MINUTE_HAND_COLOR_KEY:
                minuteHands.forEach(hand => {
                    hand.style.fill = event.data.value;
                })
                Config.setItem(MINUTE_HAND_COLOR_KEY, event.data.value);
                break;
        }
        Config.save();
    }
};

clock.granularity = 'minutes';
clock.ontick = (event: TickEvent) => {
    hourHand.groupTransform.rotate.angle =
        30 * (event.date.getHours() % 12) + 0.5 * event.date.getMinutes();
    minuteHand.groupTransform.rotate.angle =
        6 * event.date.getMinutes() + 0.1 * event.date.getSeconds();
};

init();
