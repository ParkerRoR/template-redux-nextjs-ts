import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Clock } from '../components/clock';
import { getTheme } from '../helpers/styled-component';
import { Dispatchable, mapDispatchToProps } from '../redux/with-redux-store';

interface Props { }

class Index extends React.Component<Dispatchable<Props>> {


  render() {
    return (
      <>
        <Clock />
      </>
    )
  }
}

export default connect(null, mapDispatchToProps)(Index)
