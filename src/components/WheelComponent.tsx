import React, { useEffect, useState } from 'react';
import { FeatureItem, features as featureData } from '../data/features';
import { advantages as advantageData } from '../data/advantages';

const WheelComponent: React.FC = () => {
    const [features, setFeatures] = useState(featureData);
    const [advantages, setAdvantages] = useState(advantageData);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e?.key?.toLowerCase() === "r") {
                setFeatures(features.map(f => ({ ...f, active: true })));
                setAdvantages(advantages.map(a => ({ ...a, active: false })));
            }
        };

        window.addEventListener("keypress", (e: KeyboardEvent) => handleKeyDown(e));

        return () => {
            window.removeEventListener("keypress", (e: KeyboardEvent) => handleKeyDown(e))
        }
    }, [features, advantages])

    const getPositions = (arr: FeatureItem[], index: number) => {
        switch (index) {
            case 1:
                return [...arr.slice(1), arr[0]];
            case 2:
                return [...arr.slice(2), ...arr.slice(0, 2)];
            case 3:
                return arr.reverse();
            default:
                return arr;
        }
    }

    const handleClick = (index: number) => {

        const updatedFeatures = features.map((f, fIndex) => ({
            ...f,
            active: fIndex === index ? true : false
        }));

        const updatedAdvantages = advantages.map((a) => ({
            ...a,
            active: updatedFeatures.find(uf => uf.id === a.id)?.active || false
        }));

        setAdvantages([...updatedAdvantages]);
        setFeatures(getPositions(updatedFeatures, index));

    }

    return (
        <>
            <div className={"Main-container"}>
                <div className={"Ellipsis-container"}>
                    {/* Features */}
                    {features.map((f, index) => {
                        return (
                            <div
                                key={f.id}
                                onClick={() => handleClick(index)}
                                className={`
                                Feature-container 
                                Feature-${index === 0 ? "top" : index === 1 ? "right" : index === 2 ? "bottom" : "left"} 
                                ${(!f.active || features.every(f => f.active)) ? "cursor-pointer" : ""}
                            `}
                            >
                                <div>
                                    <div className={`Feature-circle ${f.active ? "bg-orange" : ""}`}>
                                        <img
                                            src={f.item.icon.src}
                                            alt={f.item.icon.alt}
                                        />
                                    </div>
                                    <div className={"shade"}></div>
                                </div>
                                <div className={"Feature-text"}>
                                    <span>{f.item.mainText}</span>
                                </div>
                            </div>
                        )
                    })}
                    <div className={"Ellipsis-parent"}>
                        <div className={"Ellipsis-child"}>
                        </div>
                    </div>
                </div>
                {/* Advantages */}
                <div className={"Advantages-container"}>
                    {advantages.map(a => {
                        return (
                            <div
                                key={a.item.mainText}
                                className={`Advantage-container ${a.active ? "active" : "inactive"}`}
                            >
                                <div className={"Advantage-box"}>
                                    <div className={"Advantage-icon"}>
                                        <img
                                            src={a.item.icon.src}
                                            alt={a.item.icon.alt}
                                        />
                                    </div>
                                    <div className={"Advantage-text"}>
                                        <span>{a.item.mainText}</span>
                                    </div>
                                </div>
                                <div className={"Benefit-container"}>
                                    <span className="Benefit-text">{a.item.subText1}</span>
                                    <span className="Benefit-text">{a.item.subText2}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={"Restart-bar"}>
                <span className={"Restart-text"}>Press R to Restart</span>
            </div>
        </>
    );
};

export default WheelComponent;