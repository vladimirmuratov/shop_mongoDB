import React from "react";
import {useMockData} from "../../utils/useMockData";
import styles from "./initial-data-component.module.css";
import {loadGoods} from "../../store/goods";
import {useDispatch} from "react-redux";

export const InitialDataComponent: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const { error, initialize, progress, status } = useMockData();
    const handleClick = async () => {
        await initialize()
        dispatch(loadGoods())
    };
    return (
        <div className={`container ${styles.initial_wrapper}`}>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn" onClick={handleClick}>
                {" "}
                Инициализировать
            </button>
        </div>
    );
}