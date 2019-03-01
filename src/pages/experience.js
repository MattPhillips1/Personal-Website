import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/content'
import SubHeading from '../components/subheading'
import GridTable from '../components/gridtable'
import TableHeader from '../components/tableheader'
import MyLink from '../components/mylink'
import UNSWImage from '../components/unswimage'
import TwoPiImage from '../components/twopiimage'

const ExpDate = ({children}) => (
  <span style={{justifySelf: 'center'}}>{children}</span>
)
const ExperiencePage = () => (
  <Layout>
    <SEO title='Experience' keywords={['gatsby', 'application', 'react']} />
    <Content>
      <h1 className='main-title'>Experience</h1>
      <SubHeading
        title='Engineering & Academic'
        message='Software Engineering and University positions'
      />
      <GridTable cols='2fr 5fr 1fr 2fr' gap='10px'>
        <TableHeader start={1} end={5}>
          <MyLink target='_blank' url='https://www.twopicode.com/'>
            TwoPi Code
          </MyLink>
        </TableHeader>
        <span>Full Stack Developer</span>
        <span>I have worked either independently or in a small team on various applications across different sectors. I have had experience designing and implementing both backends (primarily REST apis using Flask) and frontends (using primarily ReactJS)</span>
        <ExpDate>2016 - Now</ExpDate>
        <span style={{gridRow: 'span 2', height: 'fit-content', textAlign: 'center', alignSelf: 'center', maxWidth: '200px'}}><TwoPiImage/></span>
        <TableHeader start={1} end={5}>
          <MyLink target='_blank' url='https://www.unsw.edu.au/'>
            University of New South Wales
          </MyLink>
        </TableHeader>
        <span>Application Lead Developer</span>
        <span>I am the lead developer on an application that was used by only COMP1531 in 2018 but is now being used by a 2 second year and a third year software engineering courses (~700 students). I was charged with developing an application that seemlessly integrated git into COMP1531 in a way that students could not avoid in favour of bad version control techniques such as email or messenger applications...</span>
        <ExpDate>2017 - Now</ExpDate>
        <span style={{gridRow: 'span 4', height: 'fit-content', textAlign: 'center', alignSelf: 'center', maxWidth: '200px'}}><UNSWImage/></span>
        <span>Course Tutor</span>
        <span>I have tutored two computer science courses at UNSW. Microprocessors and Interfacing (COMP2121) and Software Engineering Fundamentals (COMP1531). This involves preparing and presenting lessons to approx. 30 students as well as answering any questions students may have about lab work, and marking assignments/exams</span>
        <ExpDate>2016 - Now</ExpDate>
        <span>Course Admin</span>
        <span>As a course admin of Software Engineering Fundamentals, I was responsible for content development and technical duties. This meant that I was responsible for; setting up automated assignment submissions, preparing the online exam environment and setting up the course infrastructure for the coming semesters.</span>
        <ExpDate>2017 - Now</ExpDate>
      </GridTable>
      <SubHeading
        title='Part Time'
        message='Non-technical positions'
      />
    </Content>
  </Layout>
)

export default ExperiencePage
