import React from "react";

interface PhoneDesignProps {
    /**
     * Is the principal component to render inside the phone design
     */
    ticTactoeComponent: React.ElementType<any>
}

export const PhoneDesign = ({ ticTactoeComponent }: PhoneDesignProps) => {
    const TicTacToe = ticTactoeComponent;
    return (
        <>
            <div className="bezel p-relative">
                <div className="inner-bezel">
                    <div className="screen">
                        <TicTacToe />
                    </div>
                </div>
                <div className="power p-absolute"></div>
                <div className="up-volume p-absolute"></div>
                <div className="down-volume p-absolute"></div>
                <div className="home p-absolute">
                    <div className="home-key"></div>
                </div>
            </div>
        </>
    )
}