import {memo, useCallback} from 'react';
import cls from "./Header.module.scss";
import {useStorageProductType} from "../../../hooks/useStorageProductType";
import {Tabs} from "../Tab/Tabs";

export interface TabItem {
    value: string;
    content: string;
}

export const Header = memo(() => {

    const [productType, setProductType] = useStorageProductType()

    const typeTabs = [
            {
                value: "All",
                content: "Все Продукты",
            },
            {
                value: "product1",
                content: "Продукт 1",
            },
            {
                value: "product2",
                content: "Продукт 2",
            },

        ]

    const onTabClick = useCallback((tab: TabItem) => {
           setProductType(tab.value)
        },
        [setProductType]);

    return (
        <header className={cls.Header}>
            <Tabs
                tabs={typeTabs}
                value={productType}
                onTabClick={onTabClick}
            />
        </header>
    );
});

