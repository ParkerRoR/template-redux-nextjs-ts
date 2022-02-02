import React from 'react';
import autobind from 'class-autobind'
import { connect } from 'react-redux';
import { IRedux_Dispatch } from '../../redux/interfaces/dispatch';
import { IRedux_InitialState } from '../../redux/interfaces/initialState';
import { mapDispatchToProps } from '../../redux/with-redux-store';
import { IRedux_Payload } from '../../redux/interfaces/params';
import { ButtonE } from '../../components/elements/UI/Button';
import { FlexSC } from '../../style/style.global';
import { styleAdd_Alinhamentos } from '../../style/logicals/alinhamentos.defaults';


interface PropriedadeProps extends IRedux_Dispatch<IRedux_Payload> {

}
interface PropriedadeState {

}

type PropriedadePayload<T> = {
    [P in keyof T]?: T[P];
}

class propriedade extends React.Component<PropriedadeProps, PropriedadeState> {

    public state: PropriedadeState = {

    }

    constructor(p: PropriedadeProps) {
        super(p)
        autobind(this)
    }

    public componentDidMount() {

    }

    public UNSAFE_componentWillReceiveProps(props: PropriedadeProps) {

    }

    private handleState(payload: PropriedadePayload<PropriedadeProps>) {
        this.setState({
            ...this.state,
            ...payload
        })
    }

    render() {
        const { state, props } = this
        return (
            <>
                <FlexSC pl="40px">
                    <ButtonE onClick={() => console.log(styleAdd_Alinhamentos({ml:'40px'},['margin','padding']))}>
                        teste
                    </ButtonE>
                </FlexSC>
            </>
        );
    }
}

const mapStateToProps = (state: IRedux_InitialState) => state

const Propriedade = connect<IRedux_InitialState>(mapStateToProps, mapDispatchToProps)(propriedade)

export default Propriedade