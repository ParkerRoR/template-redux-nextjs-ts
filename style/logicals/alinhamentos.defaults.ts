import { IDefaultStyle_Margins, IDefaultStyle_Paddings } from "./types"

const styleAdd_Margin = (props: IDefaultStyle_Margins | any) => {
    const cross = {
        'mr': props.mr,
        'ml': props.ml,
        'mt': props.mt,
        'mb': props.mb,
        'mx': props.mx,
        'my': props.my,
        'm': props.m,
    }

    if (Object.keys(cross).every(key => !props[key])) {
        return undefined
    }

    const up = props.mt || props.my || props.m || '0px'
    const right = props.mr || props.mx || props.m || '0px'
    const down = props.mb || props.my || props.m || '0px'
    const left = props.ml || props.mx || props.m || '0px'

    return `\nmargin: ${up} ${right} ${down} ${left};`


}
const styledAdd_Padding = (props: IDefaultStyle_Paddings | any) => {
    const cross = {
        'pr': props.pr,
        'pl': props.pl,
        'pt': props.pt,
        'pb': props.pb,
        'px': props.px,
        'py': props.py,
        'p': props.p,
    }

    if (Object.keys(cross).every(key => !props[key])) {
        return undefined
    }

    const up = props.pt || props.py || props.p || '0px'
    const right = props.pr || props.px || props.p || '0px'
    const down = props.pb || props.py || props.p || '0px'
    const left = props.pl || props.px || props.p || '0px'

    return `\npadding: ${up} ${right} ${down} ${left};`


}

type ITypes = ['margin', 'padding']
type IProps = {[key : string] : any}
export const styleAdd_Alinhamentos = (props : IProps,types : ITypes) => {

    let result : string = ''

    const cross = {
        'margin':styleAdd_Margin(props),
        'padding': styledAdd_Padding(props)
    }


    for(const type of types){
        result += cross[type] || ''
    }


    return result
}
