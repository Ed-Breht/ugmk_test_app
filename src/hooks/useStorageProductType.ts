import {useLocalStorage} from "./useLocalStorage";

export const useStorageProductType = () => useLocalStorage('productType', 'All')