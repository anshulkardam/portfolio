"use client";
import React from "react";
import TiltedCard from "../ui/TiltedCard";

const ProfileCard = () => {
    return (
        <TiltedCard
            imageSrc="/karzemo.jpeg"
            altText="Anshul Kardam"
            captionText="Anshul Kardam"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
        />
    );
};

export default ProfileCard;
