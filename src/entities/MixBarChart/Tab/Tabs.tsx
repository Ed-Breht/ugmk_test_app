import { memo, useCallback } from 'react';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: string;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { tabs, onTabClick, value } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={cls.Tabs}>
            {tabs.map((tab) => (
                <div
                    data-theme={
                        tab.value === value
                            ? "normal"
                            : "outlined"
                    }
                    className={cls.Card}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
});
