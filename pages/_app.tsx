import React from 'react'
import withReduxStore, { Store } from '../redux/with-redux-store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
interface Props {
  reduxStore: Store
}

export default withReduxStore(
  class MyApp extends React.Component<Props & AppProps> {
    render() {
      const { Component, pageProps, reduxStore } = this.props
      return (
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)
