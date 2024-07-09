import styled from 'styled-components'
import { MagnifyingGlass } from '@phosphor-icons/react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  margin-top: 16px;

  label {
    color: ${(props) => props.theme.color.black};
    font-size: 1.125rem;
    font-weight: ${props => props.theme.weight.medium};
  }

  input {
    background: ${(props) => props.theme.color.base.input};
    border-radius: 40px;
    border: none;
    outline: none;
    width: 350px;
    padding: 20px;
    height: 40px;
    padding-right: 40px;
  }
`

export const Wapper = styled.div`
  position: relative;
  width: 100%;
`

export const IconSearch = styled(MagnifyingGlass)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`
