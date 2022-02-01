import { IRedux_Action } from "./params";

export type IRedux_Dispatch<T> = T & {
    dispatch?: (action : IRedux_Action) => void
}