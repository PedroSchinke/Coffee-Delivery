import Logo from '../../assets/Logo.svg'
import { MapPin, Notepad } from 'phosphor-react'
import { HeaderContainer, HistoryButton } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {

    return (

        <HeaderContainer>

            <NavLink to='/'>
                <img className='logo' src={Logo} />
            </NavLink>

            <div>
               
                <span className='location'> 
                    <a><MapPin size={26} weight='fill'/></a>
                    Porto Alegre, RS
                </span>

                <NavLink to='/history'>
                    <HistoryButton title='Meus Pedidos'>
                        <Notepad size={26} />
                        <span className='myOrdersSpan'>Meus Pedidos</span>
                    </HistoryButton>
                </NavLink>

            </div>

        </HeaderContainer>

    )
}