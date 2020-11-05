import React from 'react'
import { PRIVATE_DARK_YELLOW, PRIVATE_YELLOW_COLOR } from '../types/publicStyles'
import styled from "@emotion/styled";

interface Props {
    text: string
    onClick?: () => void
    onCancel?: () => void
    background?: boolean
    type?: "button" | "submit" | "reset"
    style?: object
    fontSize?: number | string
    fontColor?: string
    fontFamily?: string
    form?: string
    disabled?: boolean
}

const Button = styled.button(({ backgroundColor }: { backgroundColor?: boolean }) => ({
    boxShadow: '2px 3px 2px 0px #00000029',
    backgroundColor: `${backgroundColor ? PRIVATE_YELLOW_COLOR : PRIVATE_DARK_YELLOW}`,
    borderRadius: '5pt',
    border: 0,
    cursor: 'pointer',
    height: '40pt',
    width: '84pt',
    outlineStyle: 'none',
    zIndex: 10
}))

const Label = styled.label(({ fontSize, fontColor, fontFamily }: { fontSize?: string | number, fontColor?: string | number, fontFamily: string }) => ({
    fontFamily: `${fontFamily}`,
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: `${fontSize ? fontSize : 12}pt`,
    color: `${fontColor}`
}))

const CustomButton: React.FunctionComponent<Props> = ({ type, text, onCancel, onClick, style, fontSize, fontColor, fontFamily, background = true, form, disabled }) => (
    <Button disabled={disabled} type={type} onClick={onClick} style={style} backgroundColor={background} form={form}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label fontSize={fontSize} fontColor={fontColor} fontFamily={fontFamily ? fontFamily : 'Helvetica Neue'}>{text}</Label>
        </div>
    </Button>
)

export default CustomButton
