import { ButtonAndShoppingCartContainer, ProductsContainer } from "./styles";
import ExpressoTradicional from '../../../../assets/Expresso Tradicional.svg'
import ExpressoAmericano from '../../../../assets/Americano.svg'
import ExpressoCremoso from '../../../../assets/Cremoso.svg'
import ExpressoGelado from '../../../../assets/Gelado.svg'
import ComLeite from '../../../../assets/Com Leite.svg'
import Latte from '../../../../assets/Latte.svg'
import Capuccino from '../../../../assets/Capuccino.svg'
import Macchiato from '../../../../assets/Macchiato.svg'
import Mocaccino from '../../../../assets/Mocaccino.svg'
import Quente from '../../../../assets/Quente.svg'
import Cubano from '../../../../assets/Cubano.svg'
import Havaiano from '../../../../assets/Havaiano.svg'
import { Product } from "../product/product";
import { ShoppingCart } from "phosphor-react";
import { CartItemType, Context } from "../../../../contexts/context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsList } from "../product/styles";

const products: CartItemType[] = [
    {
        id: '1',
        image: ExpressoTradicional,
        tag: 'TRADICIONAL',
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 4.90,
    },
    {
        id: '2',
        image: ExpressoAmericano,
        tag: 'TRADICIONAL',
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 4.90,
    },
    {
        id: '3',
        image: ExpressoCremoso,
        tag: 'TRADICIONAL',
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 5.90,
    },
    {
        id: '4',
        image: ExpressoGelado,
        tag: 'GELADO',
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 4.90,
    },
    {
        id: '5',
        image: ComLeite,
        tag: 'COM LEITE',
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 4.90,
    },
    {
        id: '6',
        image: Latte,
        tag: 'COM LEITE',
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 7.90,
    },
    {
        id: '7',
        image: Capuccino,
        tag: 'COM LEITE',
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 7.90,
    },
    {
        id: '8',
        image: Macchiato,
        tag: 'COM LEITE',
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 8.50,
    },
    {
        id: '9',
        image: Mocaccino,
        tag: 'COM LEITE',
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 8.90,
    },
    {
        id: '10',
        image: Quente,
        tag: 'COM LEITE',
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 7.90,
    },
    {
        id: '11',
        image: Cubano,
        tag: 'ALCOÓLICO',
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
    },
    {
        id: '12',
        image: Havaiano,
        tag: 'ESPECIAL',
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 8.90,
    }
]

export function Products() {

    const { cartItems } = useContext(Context)

    const totalPrice = cartItems?.reduce(
        (total, currentValue) => total = total + currentValue.price!, 0
    )

    return (

        <ProductsContainer>

            <div className='productsLabel'>

                <h1>Nossos cafés</h1>

            </div>

            <ProductsList>
                
                {products.map((product) => {
                    return <Product 
                        key={product.id}
                        coffee={product}
                    />
                })}
                
            </ProductsList>    

            <ButtonAndShoppingCartContainer>
                
                <a className='shoppingcart'>
                    <ShoppingCart size={26} weight='fill'/>
                    {totalPrice!.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })} / {cartItems.length} itens
                </a>

                <NavLink to='/checkout'>
                    <button className="goToCartButton">VER CARRINHO</button>
                </NavLink>

            </ButtonAndShoppingCartContainer>
        
        </ProductsContainer>
    )
}