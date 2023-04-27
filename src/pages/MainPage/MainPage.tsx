import { memo } from 'react';
import {Header} from "../../entities/MixBarChart/Header/Header";
import {MixBarChart} from "../../entities/MixBarChart/MixBarChart";

const MainPage = memo(() => {
    return (
        <>
            <Header/>
            <MixBarChart/>
        </>
    );
});

export default MainPage;

