import cls from "./TitleDetails.module.scss";
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import 'moment/locale/ru';

export const TitleDetails = () => {

    const {factoryId, monthNumber} = useParams();
    const factoryType = factoryId === "1" ? "A" : "Б";
    const MonthName = moment().month(Number(monthNumber)).format("MMMM");

    return (
        <h2 className={cls.TitleDetails}>
            {`Статистика по продукции фабрики ${factoryType} за ${MonthName}`}
        </h2>
    );
};

