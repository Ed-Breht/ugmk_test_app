import {BundleSumDataType, DataByMonthType, ProductsType} from "./types";

export const aggregateData = (data: Record<number, ProductsType[]>) => {
    const bundleSumData: BundleSumDataType = {}

    for (const month of Object.keys(data)) {
        bundleSumData[Number(month)] = data[Number(month)]
            .reduce((acc: DataByMonthType, data: { product1: number, product2: number, factory_id: number }) => {
                if (!acc[data.factory_id]) {
                    acc[data.factory_id] = {
                        product1: data.product1,
                        product2: data.product2,
                        sum: data.product1 + data.product2
                    }
                } else {
                    acc[data.factory_id].product1 = acc[data.factory_id].product1 + data.product1
                    acc[data.factory_id].product2 = acc[data.factory_id].product2 + data.product2
                    acc[data.factory_id].sum = acc[data.factory_id].sum + data.product1 + data.product2
                }
                return acc
            }, {});
    }

    return bundleSumData
}