export interface FeatureItem {
    id: number,
    active: boolean;
    item: {
        icon: {
            src: string,
            alt: string
        }
        mainText: string;
    };
}

export const features: FeatureItem[] = [
    {
        id: 1,
        active: true,
        item: {
            icon: {
                src: "/images/noise-cancel.svg",
                alt: "noise-cancel"
            },
            mainText: "Noise Canceling Technology"
        },
    },
    {
        id: 2,
        active: true,
        item: {
            icon: {
                src: "/images/camera.svg",
                alt: "camera"
            },
            mainText: "High Resolution Camera"
        },
    },
    {
        id: 3,
        active: true,
        item: {
            icon: {
                src: "/images/GPS_navigation.svg",
                alt: "GPS-navigation"
            },
            mainText: "GPS Navigation System"
        },
    },
    {
        id: 4,
        active: true,
        item: {
            icon: {
                src: "/images/water-drop.svg",
                alt: "water-drop"
            },
            mainText: "Waterproof Design"
        },
    }
];
