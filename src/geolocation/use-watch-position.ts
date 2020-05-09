import { useEffect, useState } from 'react';

export const useWatchPosition = (options?: PositionOptions) => {
    const [position, setPosition] = useState<Position | null>(null);
    const [error, setError] = useState<PositionError | null>(null);

    useEffect(() => {
        const watcher = navigator.geolocation.watchPosition(setPosition, setError, options);
        return () => navigator.geolocation.clearWatch(watcher);
    }, [options]);

    return { position, error };
};
