import {memo} from "react";
import {PieChart as PieReChart, Pie, Cell, Legend} from 'recharts';
import {useParams} from "react-router-dom";
import cls from "./PieChart.module.scss";
import {usePaiData} from "../../hooks/usePaiData";
import {renderCustomizedLabel} from "./renderCustomizedLabel/renderCustomizedLabel";

export const PieChart = memo(() => {
    const {factoryId, monthNumber} = useParams();
    const [product1, product2] = usePaiData(monthNumber || '', factoryId || '');

    const data = [
        {name: 'Продукт 1', value: product1},
        {name: 'Продукт 2', value: product2},
    ];
    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <>
            <div className={cls.Wrapper}>
                <PieReChart width={700} height={700}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={250}
                        fill="#8884d8"
                        dataKey="value"
                        style={{pointerEvents: "none"}}
                        label={renderCustomizedLabel}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Legend/>
                </PieReChart>
            </div>
        </>
    );
});
