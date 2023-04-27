import useSWR from "swr";
import {useCallback} from "react";

export const useLocalStorage = (key: string, defaultValue: string): [string, (value: string) => Promise<void>] => {

    const getValue = useCallback(
        () => {
            let value = window.localStorage.getItem(key)
            if (!value) {
                value = defaultValue
                window.localStorage.setItem(key, value)
            }
            return value
        },
        [key, defaultValue],
    );

    const {data: value, mutate} = useSWR<string>(`localStorage-${key}`, getValue);

    const setValue = useCallback(
        async (value: string) => {
            window.localStorage.setItem(key, value);
            await mutate();
        },
        [key, mutate],
    );


    return [value || defaultValue, setValue]
}