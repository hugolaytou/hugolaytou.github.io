import React from "react";

export function random<T>(array: T[]): [T, () => void] {
    const [current, setCurrent] = React.useState(array[0]);

    const next = () => {
        const randomElement = array[Math.floor(Math.random() * array.length)];
        setCurrent(randomElement);
    };

    return [current, next];
}
