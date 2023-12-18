import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

type PhoneTabletScrollProps = {
    smoothScrollTop: () => void;
}

const PhoneTabletScroll = ({ smoothScrollTop }: PhoneTabletScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const threshold = 600
            if (scrollY > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                <FontAwesomeIcon icon={faCircleChevronUp} size='2xl'
                    className="sticky z-50   left-full lg:hidden  mr-2  text-sky-400 mobileScrollBtn"
                    onClick={smoothScrollTop} />
            )}
        </>
    );
};

export default PhoneTabletScroll;
