import { memo } from 'react';
import {TitleDetails} from "../../entities/PieChart/Title/TitleDetails";
import {PieChart} from "../../entities/PieChart/PieChart";

const PieChartPage = memo(() => {
    return (
        <>
            <TitleDetails />
            <PieChart />
        </>
    );
});

export default PieChartPage;
