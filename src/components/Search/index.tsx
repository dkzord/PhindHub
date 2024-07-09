import * as S from './styles'

const Search = () => {
  return (
    <S.Container>
      <label htmlFor="search">Buscar repositório</label>
      <S.Wapper>
        <input type="text" id='search' placeholder='Digite o nome do usuário'/>
        <S.IconSearch size={24} />
      </S.Wapper>
    </S.Container>
  )
}

export default Search
