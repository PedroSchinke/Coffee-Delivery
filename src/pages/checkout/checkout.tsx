import { Cart } from "./components/cart/cart";
import { Infos } from "./components/orderForm/orderForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {

    return (

        <CheckoutContainer>

            <Infos />

            <Cart />

        </CheckoutContainer>
    )
}