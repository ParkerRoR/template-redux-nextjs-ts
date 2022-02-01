import { IReduxPayload_Teste } from "./payload/teste"




export type IRedux_Payload = {
    teste? : IReduxPayload_Teste
}


export type IRedux_ActionsTypes = 'UPDATE'

export type IRedux_Action = {
    type: IRedux_ActionsTypes
    payload: IRedux_Payload
}



