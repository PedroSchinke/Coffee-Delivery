import { DeliveryInfos, SuccessContainer } from "./styles";
import SuccessImage from '../../assets/Success Image.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Context } from "../../contexts/context";
import { useContext } from "react";

export function Success() {

    const { orderInfos, paymentPreference } = useContext(Context)

    return (

        <SuccessContainer>

            <div className="succesInfosContainer">

                <div className="title_subtitle">
                    <h1>Pedido confirmado!</h1>
                    <span>Agora é só aguardar que logo seu café chegará até você</span>
                </div>

                <DeliveryInfos>

                    <div className="addressInfos">
                        <div className="mappin"><MapPin size={22} weight="fill" /></div>
                        <div>
                            <span>Entrega em <strong>{orderInfos!.Rua}, {orderInfos!.Número} {orderInfos!.Complemento}</strong></span>
                            <span>{orderInfos!.Bairro} - {orderInfos!.Cidade}, {orderInfos!.Estado}</span>
                        </div>
                    </div>

                    <div className="timeInfos">
                        <div className="timer"><Timer size={22} weight="fill" /></div>
                        <div>
                            <span>Previsão de entrega</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </div>

                    <div className="paymentInfos">
                        <div className="dollar"><CurrencyDollar size={22} weight="fill"/></div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <strong>{paymentPreference.payment_preference}</strong>
                        </div>
                    </div>

                </DeliveryInfos>

            </div>

            <img className="successImg" src={SuccessImage}/>
            
        </SuccessContainer>
    )
}