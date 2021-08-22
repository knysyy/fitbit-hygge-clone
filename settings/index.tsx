import {
    BACKGROUND_COLOR_KEY,
    HOUR_HAND_COLOR_KEY,
    MINUTE_HAND_COLOR_KEY
} from '../types';

const colorSet = [
    { color: 'red' },
    { color: 'crimson' },
    { color: 'pink' },
    { color: 'orangered' },
    { color: 'orange' },
    { color: 'yellow' },
    { color: 'darkgreen' },
    { color: 'seagreen' },
    { color: 'olivedrab' },
    { color: 'lightgreen' },
    { color: 'teal' },
    { color: 'lightskyblue' },
    { color: 'deepskyblue' },
    { color: 'dodgerblue' },
    { color: 'navy' },
    { color: 'mediumpurple' },
    { color: 'purple' },
    { color: 'lightgrey' },
    { color: 'grey' },
    { color: 'white' },
    { color: 'black' }
];

const settings = () => {
    return (
        <Page>
            <Section
                title={
                    <Text bold align="center">
                        Background Color
                    </Text>
                }
            >
                <ColorSelect
                    settingsKey={BACKGROUND_COLOR_KEY}
                    colors={colorSet}
                />
            </Section>
            <Section
                title={
                    <Text bold align="center">
                        Hour Hand Color
                    </Text>
                }
            >
                <ColorSelect
                    settingsKey={HOUR_HAND_COLOR_KEY}
                    colors={colorSet}
                />
            </Section>
            <Section
                title={
                    <Text bold align="center">
                        Minute Hand Color
                    </Text>
                }
            >
                <ColorSelect
                    settingsKey={MINUTE_HAND_COLOR_KEY}
                    colors={colorSet}
                />
            </Section>
        </Page>
    );
};

registerSettingsPage(settings);
