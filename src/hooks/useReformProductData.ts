import moment from "moment/moment";
import 'moment/locale/ru';
import {useStorageProductType} from "./useStorageProductType";
import {DataByMonthType} from "../helpers/types";

export const useReformProductData = (data: Record<number, DataByMonthType>) => {

    const [productType] = useStorageProductType()

    return Object.entries(data).map((item) => {

        const [month, el] = item;

        const result: {
            month: string;
            monthNumber: string;
            factoryA_sum: number;
            factoryB_sum: number;
        } = {
            month: moment().month(month).format("MMM"),
            monthNumber: month,
            factoryA_sum: 0,
            factoryB_sum: 0
        }

        switch (productType) {
            case "product1":
                result.factoryA_sum = el[1].product1;
                result.factoryB_sum = el[2].product1;
                break;
            case "product2":
                result.factoryA_sum = el[1].product2;
                result.factoryB_sum = el[2].product2;
                break;
            default:
                result.factoryA_sum = el[1].product1 + el[1].product2;
                result.factoryB_sum = el[2].product1 + el[2].product2;
        }
        return result;
    });
}