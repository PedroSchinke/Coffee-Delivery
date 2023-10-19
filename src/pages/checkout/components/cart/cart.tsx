import { useContext } from "react"
import { Context } from "../../../../contexts/context"
import { CartItem } from "../cartItem/cartItem"
import { 
    BackButton, 
    BackToProductsButton, 
    CartContainer, 
    CartSection, 
    CartSummary 
} from "./styles"
import { NavLink } from "react-router-dom"
import { ConfirmOrderButton } from "../orderForm/styles"

export function Cart() {

    const { cartItems } = useContext(Context)

    const totalPrice = cartItems?.reduce(
        (total, currentValue) => total = total + currentValue.price!, 0
    )

    return (

        <>

            <CartContainer>

                <span className="selectedCoffees">Cafés selecionados</span>

                <CartSection>

                    {cartItems!.map((cartItem) => {

                        return <CartItem
                            key={cartItem.id}
                            id={cartItem.id} 
                            image={cartItem.image}
                            title={cartItem.title}
                            price={cartItem.price}
                        />
                    })}

                    <CartSummary>

                        <div className="totalItens">
                            <span>Total de itens</span>
                            <span>{totalPrice?.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</span>
                        </div>
                        <div className="delivery">
                            <span>Entrega</span>
                            <span>R$ 3,50</span>                      
                        </div>
                        <div className="total">
                            <span>Total</span>
                            <span>{(totalPrice! + 3.50).toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</span>           
                        </div>

                    </CartSummary>

                    <BackButton>

                        <NavLink to='/'>
                            <BackToProductsButton>Voltar para produtos</BackToProductsButton>
                        </NavLink>

                    </BackButton>

                    <ConfirmOrderButton 
                        type="submit"
                        form="orderForm"
                    >CONFIRMAR PEDIDO
                    </ConfirmOrderButton>

                </CartSection>

            </CartContainer>

        </>
    )
}