import {useGetProducts} from "./useGetProducts";
import {separateByMonth} from "../helpers/separateByMonth";
import {aggregateData} from "../helpers/aggregateData";

export function usePaiData(monthNumber: string ,factoryId: string) {
    const {data} = useGetProducts()
    if(!data) return [0,0]
    const dataByMonth = separateByMonth(data || []);
    const reformData = aggregateData(dataByMonth);
    const paiData = Object.entries(reformData).filter(el => {
        return Number(el[0]) === (Number(monthNumber) - 1);
    }).map((item: any) => {
        const [_, el] = item

        return {
            product1: el[factoryId].product1,
            product2: el[factoryId].product2,
        }
    })

    return [paiData[0].product1, paiData[0].product2]
}