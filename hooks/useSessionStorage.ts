import { useState, useEffect } from 'react';
import { ItemType } from '../pages';
import { useIsServer } from './useIsServer';

function getSessionStorageOrDefault(key: string, defaultValue: String | ItemType[]) {
    const isServer = useIsServer()

    if (!isServer) {
        const stored = sessionStorage.getItem(key);
        if (!stored) {
            return defaultValue;
        }
        return JSON.parse(stored);
    } else {
        return defaultValue;
    }
}

export const useSessionStorage = (key: string, defaultValue: string | ItemType[]) => {
    const isServer = useIsServer()

    const [value, setValue] = useState(
        getSessionStorageOrDefault(key, defaultValue)
    );

    useEffect(() => {
        if (!isServer) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}
