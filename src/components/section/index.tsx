import * as S from './styles'

interface PropsSection{
    height: string
    color: string
}
const Section = (props : any) => {

    console.log(...props)
    return(
        <S.SectionWrapper {...props} />
    )
}

export default Section;