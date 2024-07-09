import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  background-color: ${(props) => props.theme.color.purple};
  color: ${(props) => props.theme.color.base.text};
  -webkit-font-smoothing: antialiased;
`

export const Wrapper = styled.div`
  padding: 16px;
`
