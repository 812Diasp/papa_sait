import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const tools = [
    {
        name: 'hammer',
        icon: '/hammer_icon.svg'
    },
    {
        name: 'drill',
        icon: '/drill_icon.svg'
    },
    {
        name: 'paint-roller',
        icon: '/paint-roller_icon.svg'
    },
    {
        name: 'ruler',
        icon: '/ruler_icon.svg'
    },
    {
        name: 'helmet',
        icon: '/helmet_icon.svg'
    }
];

const AnimatedToolIcon = () => {
    const [currentTool, setCurrentTool] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTool((prev) => (prev + 1) % tools.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            key={tools[currentTool].name}
            initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
            animate={{
                rotate: [0, -5, 5, 0],
                opacity: 1,
                scale: 1,
                transition: {
                    rotate: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                    }
                }
            }}
            exit={{ rotate: 15, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="hidden md:block ml-2"
        >
            <motion.img
                src={tools[currentTool].icon}
                alt={tools[currentTool].name}
                width="40"
                height="40"
                className="object-contain filter brightness-0 invert"
            />
        </motion.div>
    );
};

export default AnimatedToolIcon;