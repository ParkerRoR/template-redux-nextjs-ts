import React from 'react'
import { connect } from 'react-redux'
import { ButtonElement } from '../components/elements/UI/Button';
import { Dispatchable, mapDispatchToProps } from '../redux/with-redux-store';

interface Props { }

class Index extends React.Component<Dispatchable<Props>> {


  render() {
    return (
      <>
        
      </>
    )
  }
}

export default connect(null, mapDispatchToProps)(Index)
