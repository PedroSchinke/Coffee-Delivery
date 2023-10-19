import { CurrencyDollar } from "phosphor-react";
import { Line, OrderContainer, OrderInfos, OrderItensContainer, OrderListItem, PaymentInfosContainer } from "./styles";
import { OrderType } from "../../../../contexts/context";

export function Order({ orderItems, paymentPreference, totalPrice, date }: OrderType) {

    return (

        <OrderContainer>
            
            <span className="date">{date}</span>

            <OrderInfos>

                <OrderItensContainer>

                    <ul>
                        {orderItems!.map((orderItem) => {
                            return (
                                <OrderListItem 
                                    className="img_title_price"
                                    key={orderItem.id}
                                >
                                    <div className="img_title">
                                        <img src={orderItem!.image} />
                                        <span>{orderItem!.title}</span>
                                    </div>
                                    <span>
                                        {orderItem!.price!.toLocaleString('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </span>
                                </OrderListItem>
                            )})
                        }
                    </ul>

                </OrderItensContainer>

                <Line></Line>

                <PaymentInfosContainer>

                    <CurrencyDollar className="dollarIcon" size={24} />

                    <div className="paymentPreference_price">

                        <span>{paymentPreference.payment_preference}</span>
                        <span className="orderPrice">
                            {totalPrice?.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>

                    </div>    

                </PaymentInfosContainer>

            </OrderInfos>

        </OrderContainer>
    )
}