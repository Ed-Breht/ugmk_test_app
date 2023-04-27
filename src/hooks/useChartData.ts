import {useGetProducts} from "./useGetProducts";
import {separateByMonth} from "../helpers/separateByMonth";
import {aggregateData} from "../helpers/aggregateData";
import {useReformProductData} from "./useReformProductData";

export function useChartData() {
    const {data} = useGetProducts();
    const dataByMonth = separateByMonth(data || []);
    const reformData = aggregateData(dataByMonth);
    const chartData = useReformProductData(reformData);

    return chartData
}