import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/content'

const IndexPage = () => (
  <Layout hideWhenSmall={true}>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <Content outerStyle={{background: 'none'}} innerStyle={{background: 'none'}}>
      <div className='blurb'>
        <h2>Hey, nice to meet you</h2>
        <p style={{fontSize: '20px'}}>
          I am a 22 year old software engineer currently based in <b>Sydney, Australia</b> and am deciding what to do with my life after I graduate in <b>2020</b>
        </p>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
