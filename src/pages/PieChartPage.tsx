import { memo } from 'react';
import {TitleDetails} from "../entities/PieChart/Title/TitleDetails";
import {PieChart} from "../entities/PieChart/PieChart";

export const PieChartPage = memo(() => {

    return (
        <>
            <TitleDetails />
            <PieChart />
        </>
    );
});

