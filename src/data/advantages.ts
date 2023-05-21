export interface AdvantageItem {
    id: number,
    active: boolean,
    item: {
        icon: {
            src: string,
            alt: string
        }
        mainText: string;
        subText1: string;
        subText2: string;
    };
}

export const advantages: AdvantageItem[] = [
    {
        id: 2,
        active: false,
        item: {
            icon: {
                src: "/images/shutter.svg",
                alt: "shutter"
            },
            mainText: "Capture Stunning, detailed photos and videos",
            subText1: "Preserve memories",
            subText2: "Create lasting impressions",
        }
    },
    {
        id: 1,
        active: false,
        item: {
            icon: {
                src: "/images/sound.svg",
                alt: "sound"
            },
            mainText: "Immerse yourself in pure, uninterrupted sound",
            subText1: "Block out background noise",
            subText2: "Enhance your productivity",
        }
    },
    {
        id: 4,
        active: false,
        item: {
            icon: {
                src: "/images/device.svg",
                alt: "device"
            },
            mainText: "Use the device worry-free in various environments",
            subText1: "Withstand water exposure",
            subText2: "Providing peace of mind",
        }
    },
    {
        id: 3,
        active: false,
        item: {
            icon: {
                src: "/images/travel.svg",
                alt: "travel"
            },
            mainText: "Easily find your way to any destination",
            subText1: "Seamlessly navigate",
            subText2: "Save time, reduce stress",
        }
    },
];

