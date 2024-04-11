import React from 'react'
import{Button} from 'antd'

export const ButtonComponent = ({size, styleButton, styleTextButton,textButton, ...rests}) => {
  return (
    <Button 
        size={size} 
        style={styleButton}
        {...rests}
        //icon={<SearchOutlined color={ colorButton} style={{color: colorButton}} />}
    >
        <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}
