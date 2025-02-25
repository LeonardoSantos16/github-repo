import logo from '../../assets/logo.svg'
import * as S from './styles'

const Header = () => {
    return(
        <S.Container>
            <S.ContentHeader>
                <img src={logo} alt="logo" />
                <h1>GITHUB REPOSITÓRIOS</h1>
            </S.ContentHeader>
        </S.Container>
    )
}

export default Header;