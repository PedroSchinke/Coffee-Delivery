import Logo from '../../assets/Logo.svg'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FooterContainer, FooterInfos } from './styles'

export function Footer() {

    return (

        <FooterContainer>

            <img src={Logo} alt="Logo Coffee Delivery" />

            <FooterInfos>
                <p>Desenvolvido por Pedro Schinke</p>

                <div>

                    <a href="https://www.linkedin.com/in/pedro-schinke-17b866223/"> 
                        <AiFillLinkedin size={38} /> 
                    </a>

                    <a href="https://github.com/PedroSchinke"> 
                        <AiFillGithub size={35}/> 
                    </a>

                    <p>pedro.schinke@outlook.com</p>

                </div>
            </FooterInfos>

        </FooterContainer>
    )
}