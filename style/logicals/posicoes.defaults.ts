import { IDefaultStyle_Flex } from "./types"


type ITypes = ['flex']
type IProps = { [key: string]: any }

export const styleAdd_Posicoes = (props: IProps, types: ITypes) => {

    let result: string = ''

    const cross = {
        'flex': styleAdd_Flex(props),
    }


    for (const type of types) {
        result += cross[type] || ''
    }


    return result
}

const styleAdd_Flex = (props: IDefaultStyle_Flex | any) => {
    const cross = {
        'display': {
            key: 'display',
            value: props.display
        },
        'flex': {
            key: 'flex',
            value: props.flex
        },
        'alignItems': {
            key: 'align-items',
            value: props.alignItems
        },
        'justifyContent': {
            key: 'justify-content',
            value: props.justifyContent
        },
    }
    let result = ``

    for (const key of Object.keys(cross)) {
        if (props[key]) {
            result += `\n${cross[key].key}:${cross[key].value};`
        }
    }

    return result



}

