export type IDefaultStyle_Margins = {
    mr?: string
    ml?: string
    mt?: string
    mb?: string
    mx?: string
    my?: string
    m?: string
}

export type IDefaultStyle_Paddings = {
    pr?: string
    pl?: string
    pt?: string
    pb?: string
    px?: string
    py?: string
    p?: string
}


export type IDefaultStyle_Flex = {
    display?:'block' | 'flex'
    flex?:number
    alignItems?:'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
    justifyContent?:'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}
