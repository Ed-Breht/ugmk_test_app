export type ProductsDataType = { product1: number, product2: number, sum: number }
export type DataByMonthType = Record<number, ProductsDataType>
export type BundleSumDataType = Record<number, DataByMonthType>
export type ProductsType = {
    date: string,
    factory_id: number,
    id: number,
    product1: number,
    product2: number,
}
