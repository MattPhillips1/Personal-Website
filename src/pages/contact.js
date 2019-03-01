import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GridTable from '../components/gridtable'
import MyLink from '../components/mylink'
import Content from '../components/content'

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' keywords={['gatsby', 'application', 'react']} />
    <Content innerStyle={{maxWidth: '800px'}}>
      <h1 className='main-title'>Contact Me</h1>
      <p>I am available for contact at any time and would love to hear from you.</p>
      <GridTable cols='1fr 3fr'>
        <span>E-mail:</span>
        <span>
          <MyLink url='mailto:matt.phillips121@gmail.com'>
            <i className='fa fa-envelope'></i> matt.phillips121@gmail.com
          </MyLink>
        </span>
        <span>&nbsp;</span><span/>
        <span>LinkedIn:</span>
        <span>
          <MyLink url='www.linkedin.com/in/matthew-james-phillips'>
            <i className='fa fa-linkedin'></i> Matt Phillips
          </MyLink>
        </span>
        <span>Github:</span>
        <span>
          <MyLink url='https://github.com/MattPhillips1'>
            <i className='fa fa-github'></i> MattPhillips1
          </MyLink>
        </span>
      </GridTable>
    </Content>
  </Layout>
)

export default ContactPage
