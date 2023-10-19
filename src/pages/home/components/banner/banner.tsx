import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, ListContainer, TitleContainer } from "./styles";
import BannerImage from '../../../../assets/Imagem.svg'

export function Banner() {

    return (

        <BannerContainer>

            <div className='title-list'>

                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                </TitleContainer>

                <ListContainer>
                    <li><ShoppingCart size={24} weight='fill' className='item1'/>Compra simples e segura</li>
                    <li><Package size={24} weight='fill' className='item3'/>Embalagem mantém o café intacto</li>
                    <li><Timer size={24} weight='fill' className='item2'/>Entrega rápida e rastreada</li>
                    <li><Coffee size={24} weight='fill' className='item4'/>O café chega fresquinho até você</li>
                </ListContainer>

            </div>

            <img src={BannerImage} />

        </BannerContainer>
    )
}