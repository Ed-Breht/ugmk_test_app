import useSWR from "swr";
import {ProductsType} from "../helpers/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGetProducts() {
    return useSWR<ProductsType[]>(
        "http://localhost:3001/products",
        fetcher
    );
}