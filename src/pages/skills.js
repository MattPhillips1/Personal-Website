import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SubHeading from '../components/subheading'
import Content from '../components/content'
import GridTable from '../components/gridtable'
import Skill from '../components/skill'

const SkillsPage = () => (
  <Layout>
    <SEO title='Contact' keywords={['gatsby', 'application', 'react']} />
    <Content>
      <h1 className='main-title'>Skills & Knowledge</h1>
      <p>In my professional positions, throughout my degree, and in my own time, I have worked on multiple projects in frontend, backend, lead and junior roles.</p>
      <SubHeading
        title='Technical'
        message='Nuts & Bolts'
      />
      <div style={{padding: '10px'}}>
        <SubHeading title='Languages'/>
        <GridTable cols='1fr 1fr' gap='10px'>
          <Skill stars={5} title='C++'/>
          <Skill stars={5} title='Python'/>
          <Skill stars={4} title='C'/>
          <Skill stars={3} title='Java'/>
          <Skill stars={4} title='Javascript/JQuery'/>
          <Skill stars={1} title='PHP'/>
          <Skill stars={1} title='Swift'/>
        </GridTable>
        <br/>
        <SubHeading title='Technologies'/>
        <GridTable cols='1fr 1fr' gap='10px'>
          <Skill stars={5} title='Git'/>
          <Skill stars={5} title='Flask'/>
          <Skill stars={4} title='ReactJS'/>
          <Skill stars={4} title='Linux/Command Line'/>
          <Skill stars={4} title='Docker'/>
          <Skill stars={3} title='Rancher'/>
          <Skill stars={2} title='AWS'/>
        </GridTable>
      </div>
      <br/>
      <SubHeading
        title='People'
        message='Alright Guy'
      />
      <div style={{padding: '10px'}}>
        <GridTable cols='1fr 1fr' gap='10px'>
          <Skill stars={5} title='Teamwork'/>
          <Skill stars={4} title='Problem Solving'/>
          <Skill stars={4} title='Leadership'/>
          <Skill stars={3} title='Organisation'/>
        </GridTable>
      </div>
    </Content>
  </Layout>
)

export default SkillsPage
