import React from 'react';
import autobind from 'class-autobind'
import { connect } from 'react-redux';
import { IRedux_Dispatch } from '../redux/interfaces/dispatch';
import { IRedux_InitialState } from '../redux/interfaces/initialState';
import { mapDispatchToProps } from '../redux/with-redux-store';


interface ClockProps extends IRedux_Dispatch<IRedux_InitialState> {

}
interface ClockState {

}

type ClockPayload<T> = {
  [P in keyof T]?: T[P];
}

class clock extends React.Component<ClockProps, ClockState> {
  
  public state: ClockState = {

  }

  constructor(p: ClockProps) {
    super(p)
    autobind(this)
  }

  public componentDidMount() {

  }

  public UNSAFE_componentWillReceiveProps(props: ClockProps) {

  }

  private handleState(payload: ClockPayload<ClockProps>) {
    this.setState({
      ...this.state,
      ...payload
    })
  }

  render() {
    const { state, props } = this
    return (
      <>
      <button onClick={() => console.log(props)}>logger</button>
        <button onClick={() => props.dispatch({
          type:'UPDATE',
          payload:{
            teste:1
          }
        })}>
          change!
        </button>
      </>
    );
  }
}

const mapStateToProps = (state: IRedux_InitialState) => state

export const Clock = connect<IRedux_InitialState>(mapStateToProps, mapDispatchToProps)(clock)
