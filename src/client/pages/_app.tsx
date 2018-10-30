import React from 'react'
import App, { Container } from 'next/app'

// Due to an outstanding bug with how next css/sass plugins load styles
// onto the app, importing at least an empty stylesheet here is a temporary
// workaround for such issue.
//
// See: https://github.com/zeit/next-plugins/issues/282
import './_app.scss'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
