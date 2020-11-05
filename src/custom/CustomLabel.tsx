import React from 'react'
import styled from "@emotion/styled";

interface Props {
    fontSize: string | number | undefined
    fontWeight?: any
    fontFamily?: string
    color?: string
    backgroundColor?: string
    fontType: 'px' | 'pt'
    text: string
    type?: any
    style?: object
    onClick?: () => void
}

interface PTagInterface {
    fontSize: string | number | undefined
    fontType: 'px' | 'pt'
    fontFamily: string
    fontWeight?: any
    color?: string
    backgroundColor?: string
    type?: any
}

const P = styled.p(({ fontSize, fontType, fontWeight, color, type, fontFamily, backgroundColor }: PTagInterface) => ({
    fontSize: `${String(fontSize + fontType)}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
    fontWeight,
    textAlign: type,
    fontFamily
}))

const CustomLabel: React.FunctionComponent<Props> = ({ fontSize, fontWeight, fontType, text, color, type, style, onClick, fontFamily, backgroundColor }) => (
    <P fontSize={fontSize} fontType={fontType} fontWeight={fontWeight} color={color} type={type}
        onClick={onClick} style={style} backgroundColor={backgroundColor} fontFamily={fontFamily ? fontFamily : 'Helvetica Neue'}>
        {text}
    </P>
)

export default CustomLabel
