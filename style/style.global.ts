import { createTheme } from "@mui/material/styles";
import styled, { createGlobalStyle } from "styled-components";
import { styleAdd_Alinhamentos } from "./logicals/alinhamentos.defaults";
import { styleAdd_Posicoes } from "./logicals/posicoes.defaults";
import { IDefaultStyle_Flex, IDefaultStyle_Margins, IDefaultStyle_Paddings } from "./logicals/types";

export const theme = createTheme({

})




type IFlexSC =
    IDefaultStyle_Margins &
    IDefaultStyle_Paddings &
    IDefaultStyle_Flex &
    {

    }



export const GlobalStyles = createGlobalStyle`
    body{
        background-color:#f2f2f2;
    }
`


export const FlexSC = styled.div<IFlexSC>`
    ${(props: IFlexSC) => {
        return `
        ${styleAdd_Alinhamentos(props, ['margin', 'padding'])}
        ${styleAdd_Posicoes(props, ['flex'])}

        `
    }};
    background-color: blue;

`