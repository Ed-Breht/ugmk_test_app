const RADIAN = Math.PI / 180;
export const CustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, value} : {
    cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, value: number
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {value}
        </text>
    );
};