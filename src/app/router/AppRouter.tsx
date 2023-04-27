import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "./routeConfig";
import {memo, Suspense, useCallback} from "react";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<div>Загрузка</div>}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);