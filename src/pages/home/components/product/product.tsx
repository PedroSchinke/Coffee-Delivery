import { Plus, ShoppingCart } from "phosphor-react";
import { AddToCartButton, BarContainer, Price, ProductsList } from "../product/styles";
import { Descrition, ProductName } from "../product/styles";
import { FormEvent, useContext } from "react";
import { CartItemType, Context } from "../../../../contexts/context";

interface CoffeeCardProps {
    coffee: CartItemType
}

export function Product({ coffee }: CoffeeCardProps) {

    const { addItemToCart } = useContext(Context)

    const { id, image, title, price, tag, description } = coffee

    const handleAddToCart = (event: FormEvent<HTMLButtonElement>) => {

        event?.preventDefault()

        addItemToCart(coffee)
    }

    return (

        <ProductsList>

            <section>

                <img src={image}/>
                <span>{tag}</span>
                <ProductName>{title}</ProductName>
                <Descrition>{description}</Descrition>

                <BarContainer>

                <div className="price">
                    <Price>{price!.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</Price>
                </div>

                <div>

                    <AddToCartButton onClick={handleAddToCart} title="Adicionar ao carrinho">
                        <ShoppingCart size={22} weight="fill"/>
                        <Plus size={14} weight="bold"/>
                    </AddToCartButton>

                </div>

                </BarContainer>

            </section>
            
        </ProductsList>
    )
}