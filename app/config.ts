import * as fs from 'fs';
import { Settings } from '../types';

const SETTINGS_FILE = 'fibit-hygge-clone.json';
const SETTINGS_TYPE = 'json';

let settings: Settings = {
    backgroundColor: 'black',
    hourHandColor: 'orange',
    minuteHandColor: 'black'
};

export const setItem = (key: keyof Settings, value: string): void => {
    settings[key] = value;
};

export const getItem = (key: keyof Settings): string => {
    return settings[key];
};

export const load = (): boolean => {
    try {
        settings = fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
        return true;
    } catch (ignore) {
        return false;
    }
};

export const save = (): boolean => {
    try {
        fs.writeFileSync(SETTINGS_FILE, settings, SETTINGS_TYPE);
        return true;
    } catch (err) {
        return false;
    }
};
