import {memo, useCallback} from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import cls from './MixBarChart.module.scss';
import {useChartData} from "../../hooks/useChartData";
import {useNavigate} from "react-router-dom";

export const MixBarChart = memo(() => {
    const charData = useChartData()
    const navigate = useNavigate();

    const handleFactoryAClick = useCallback((data: {monthNumber: number}) => {
        navigate(`/details/1/${Number(data.monthNumber) + 1}`)
    }, [navigate]);

    const handleFactoryBClick = useCallback((data: {monthNumber: number}) => {
        navigate(`/details/2/${Number(data.monthNumber) + 1}`)
    }, [navigate]);

    if (!charData) {
        return null
    }

    return (
        <div className={cls.Wrapper}>
            <ResponsiveContainer minWidth={1000} minHeight={100} maxHeight={1000}>
                <BarChart
                    height={300}
                    data={charData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Legend/>
                    <Bar onClick={handleFactoryAClick} dataKey="factoryA_sum" name={"Фабрика А"} fill="#8884d8"/>
                    <Bar onClick={handleFactoryBClick} dataKey="factoryB_sum" name={"Фабрика Б"} fill="#82ca9d"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
});

