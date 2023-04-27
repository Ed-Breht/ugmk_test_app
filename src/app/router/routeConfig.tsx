import {RouteProps} from "react-router-dom";
import {MainPageAsync as MainPage} from "../../pages/MainPage/MainPage.async";
import {PieChartPageAsync as PieChartPage} from "../../pages/PieChartPage/PieChartPage.tsx.async";

export enum AppRoutes {
    MAIN = 'main',
    DETAILS = 'details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS]: '/details/:factoryId/:monthNumber',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.DETAILS]: {
        path: RoutePath.details,
        element: <PieChartPage />
    },
}
