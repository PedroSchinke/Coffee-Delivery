import { Trash } from "phosphor-react";
import { CartItemContainer, Line } from "./styles";
import { useContext } from 'react'
import { CartItemType, Context } from "../../../../contexts/context";

export function CartItem({ image, title, price, id }: CartItemType) {

    const { removeItemFromCart } = useContext(Context)

    function handleDeleteCartItem() {

        removeItemFromCart(id)
    }

    return (

        <>

        <CartItemContainer>

            <div className="image_title">

                <img  className='cartItemImage' src={image}/>

                <div className="title_button">

                    <span className="cartItemTitle">{title}</span>

                    <div className="add_remove_buttons">
                        
                        <button 
                            className="removeButton" 
                            onClick={handleDeleteCartItem}
                        >
                            <Trash size={18} className="trashIcon"/>
                            REMOVER
                        </button>

                    </div>

                </div>

            </div>

            <div className="price">{price?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}</div>

        </CartItemContainer>

        <Line className="line"></Line>

        </>
    )
}