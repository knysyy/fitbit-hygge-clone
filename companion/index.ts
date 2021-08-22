import * as messaging from 'messaging';
import { settingsStorage } from 'settings';

settingsStorage.onchange = (event: StorageChangeEvent) => {
    if (event.newValue !== event.oldValue) {
        sendValue(event.key, event.newValue);
    }
};

const sendValue = (key: string, value: string) => {
    if (!key || !value) {
        return;
    }

    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        messaging.peerSocket.send({
            key: key,
            value: JSON.parse(value)
        });
    }
};
