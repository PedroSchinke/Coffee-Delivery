import { Notepad } from "phosphor-react";
import { NoOrdersContainer } from "./styles";

export function NoOrders() {

    return (
        
        <NoOrdersContainer>

            <h1>
                <Notepad size={40} className="notepadIcon"/>
                Você não tem pedidos concluídos
            </h1>

            <span>Volte para a tela inicial para fazer seu pedido!</span>
            
        </NoOrdersContainer>
    )
}