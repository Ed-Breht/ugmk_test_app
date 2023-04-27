import moment from "moment/moment";
import {ProductsType} from "./types";

export const separateByMonth = (data: ProductsType[]) =>
    data.reduce((acc: Record<number, ProductsType[]>, date) => {
        if (!date.date) {
            return acc
        }
        const month = moment(date.date, "DD/MM/YYYY").month();
        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(date);
        return acc;
    }, {})