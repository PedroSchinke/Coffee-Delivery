import { useContext } from "react";
import { Order } from "./components/order/order";
import { OrderHistoryContainer, OrdersSection } from "./styles";
import { Context } from "../../contexts/context";
import { NoOrders } from "./components/noOrders/noOrders";

export function OrderHistory() {

    const { orders } = useContext(Context)

    return (

        <OrderHistoryContainer>

            {orders.length === 0 ? <NoOrders /> : 
                <>
                    <h1>Histórico</h1>

                    <OrdersSection>

                        {orders.map((order) => {
                            return <Order
                                key={order.id}
                                orderItems={order.orderItems}
                                paymentPreference={order.paymentPreference}
                                totalPrice={order.totalPrice}
                                date={order.date}
                                id={order.id}
                            />   
                        })}
                        
                    </OrdersSection>
                </>
            }

        </OrderHistoryContainer>
    )
}