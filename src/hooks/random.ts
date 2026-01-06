import { useEffect, useState, useCallback } from "react";

export function useRandomPicker<T>(array: T[]): [T | undefined, () => void]
{
    const [current, setCurrent] = useState<T | undefined>(() =>
        array.length > 0 ? array[0] : undefined
    );

    const pickRandom = useCallback(() => {
        if (array.length === 0) {
            setCurrent(undefined);
            return;
        }

        const randomElement =
            array[Math.floor(Math.random() * array.length)];

        setCurrent(randomElement);
    }, [array]);

    useEffect(() => {
        if (array.length === 0) {
            setCurrent(undefined);
        } else {
            setCurrent(array[0]);
        }
    }, [array]);

    return [current, pickRandom];
}
