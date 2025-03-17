"use client";
import React from "react";
import CountUp from "../ui/counter";

type ViewCountBarProps = {
    from: number;
    to: number;
    direction: "up" | "down";
    duration: number;
};

const ViewCountBar = ({ from, to, direction, duration }: ViewCountBarProps) => {
    return (
        <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl font-bold"
        />
    );
};

export default ViewCountBar;
