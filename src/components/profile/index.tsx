import Section from "../section"
import { FaGithub, FaBuilding, FaRegArrowAltCircleRight } from "react-icons/fa"
const Profile = () => {
    <Section>
        <S.ProfileWrapper>
            <img src="" alt="imagem de perfil" />
            <S.ContentProfile>
                <S.Head>
                    <h2>Leonardo Mendes</h2>
                    <S.AnchorGithub>GITHUB <FaRegArrowAltCircleRight size={12}/></S.AnchorGithub>
                </S.Head>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div>
                    <S.Info>
                        <FaGithub size={18} />
                        LeonardoSantos16
                    </S.Info>
                    <S.Info>
                        <FaBuilding size={18} />
                        JBQGlobal
                    </S.Info>
                </div>
            </S.ContentProfile>
        </S.ProfileWrapper>
       
    </Section>
}