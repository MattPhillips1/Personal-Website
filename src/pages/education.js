import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SubHeading from '../components/subheading'
import Content from '../components/content'

const EducationPage = () => (
  <Layout>
    <SEO title='Education' keywords={['gatsby', 'application', 'react']} />
    <Content>
      <h1 className='main-title'>Education</h1>
      <SubHeading
      title='University'
      message='4th Year Computer Science & Mathematics Student (UNSW) | WAM: 85.75 (HD)'
      />
      <SubHeading
      title='Secondary School'
      message='Xavier Catholic College | ATAR: 98.7'
      />
    </Content>
  </Layout>
)

export default EducationPage
