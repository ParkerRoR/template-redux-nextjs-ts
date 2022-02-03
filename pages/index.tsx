import React from 'react'
import { connect } from 'react-redux'
import { ButtonE } from '../components/elements/UI/Button';
import { Dispatchable, mapDispatchToProps } from '../redux/with-redux-store';

interface Props { }

class Index extends React.Component<Dispatchable<Props>> {


  render() {
    return (
      <>
        <ButtonE>
            Teste
        </ButtonE>

      </>
    )
  }
}

export default connect(null, mapDispatchToProps)(Index)
