import styled from "styled-components"
import {Card, InputNumber} from 'antd'
export const WrapperListOrder = styled.div`
`
export const WrapperInputNumber = styled(InputNumber)`
&.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap{
        display: none;
}
`
export const WrapperItemOrder = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  background: #fff;
  margin-top: 12px;
`
export const WrapperCountOrder  = styled.div`
display: flex;
align-items: center;
width: 60px;
border: 1px solid #ccc;
border-radius: 4px;
`
export const WrapperRight = styled.div`
  width: 320px;
  margin-left: 20px;
  display: flex ;
  flex-direction: column; 
  gap: 10px; 
  align-items: center
`
export const WrapperLeft = styled.div`
  width: 910px;
`
export const WrapperInfo = styled.div`
  padding: 17px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  width: 100%
`
export const WrapperTotal = styled.div`
  display: flex;
   align-items: flex-start; 
   justify-content: space-between;
    padding: 17px 20px;
    background: #fff ;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`