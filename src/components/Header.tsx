import logoSvg from '../assets/logo.svg'
import logoutSvg from '../assets/logout.svg'

export function Header(){
    return(
        <header>
            <img src={logoSvg} alt="Logo" />

            <div>
                <span>Olá, Thamires</span>

                <img src={logoutSvg} alt="Icone de sair" />
            </div>
        </header>
    )
}