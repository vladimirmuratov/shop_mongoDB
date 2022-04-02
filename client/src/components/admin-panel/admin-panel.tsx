import React, {useState} from "react";
import styles from "./admin-panel.module.css";
import {InitialDataComponent} from "../initial-data-component/initial-data-component";
import {Table} from "../table/table";
import {ModalComponent} from "../modal-component/modal-component";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {OrderPage} from "../../pages/order-page/order-page";

export const AdminPanel = () => {
    const [isInitialize, setInitialize] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [order, serOrder] = useState(false)
    const {data, isLoading, message} = useSelector((state: RootState) => state.data)

    const handleModalClose = () => setIsAdd(false)

    const handleInitialLink = () => {
        setInitialize(true)
        serOrder(false)
    }

    const handleAddLink = () => {
        setIsAdd(true)
    }

    const handleTableLink = () => {
        setInitialize(false)
        serOrder(false)
    }

    const handleOrderLink = () => {
        serOrder(true)
        setInitialize(false)
    }

    return (
        <div className={styles.adminPanel_wrapper}>
            <ul className={`sidebar_container ${styles.adminPanel_sidebar__position}`}>
                {!isInitialize && <li onClick={handleInitialLink}><a href="#">инициализация</a></li>}
                {!isInitialize && <li onClick={handleAddLink}><a href="#">добавить</a></li>}
                {(isInitialize || order) && <li onClick={handleTableLink}><a href="#">таблица</a></li>}
                {!order && <li onClick={handleOrderLink}><a href="#">заказы</a></li>}
            </ul>
            {(isInitialize && !order) && <div className={styles.initial_position}><InitialDataComponent/></div>}
            {(!isInitialize && !order && data.length) && <Table data={data} isLoading={isLoading} message={message}/>}
            {isAdd && <ModalComponent modalIsOpen={isAdd} onClose={handleModalClose} isAdd={isAdd}/>}
            {order && <OrderPage/>}
        </div>
    )
}