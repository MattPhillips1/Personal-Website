import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SubHeading from '../components/subheading'
import GridTable from '../components/gridtable'
import TableHeader from '../components/tableheader'
import CourseResult from '../components/courseresult'
import Content from '../components/content'
import MyLink from '../components/mylink'

import {courses} from '../constants'


const makeYear = (courses) => {
  return courses.map(object => {
    return (
      <CourseResult
        code={object['code']}
        title={object['title']}
        grade={object['grade']}
        note={
          object['note'] !== undefined ? <small> {object['note']}</small> : ''
        }
      />
    )
  })
}
class EducationPage extends React.Component {

  state = {
    hideTwo: true,
    hideOne: true
  }

  hideOne = () => {
    this.setState({hideOne: !this.state.hideOne})
  }

  hideTwo = () => {
    this.setState({hideTwo: !this.state.hideTwo})
  }

  render() {
    return (
      <Layout>
        <SEO title='Education' keywords={['gatsby', 'application', 'react']} />
        <Content>
          <h1 className='main-title'>Education</h1>
          <SubHeading
          title='University'
          message='4th Year Computer Science & Mathematics Student (UNSW) | WAM: 85.75 (HD)'
          />
          <b>Note:</b>
          <br/>
          Courses marked <i>McGill</i> were taken on an exchange semester to McGill University Montreal. These courses were on a scale of <b>F</b> to <b>A</b>
          <br/>
          Courses marked <i>WSC</i> were taken the same semester as I went on the <MyLink url='https://www.worldsolarchallenge.org/'>World Solar Challenge</MyLink> and hence was absent for ~4 weeks of the course
          <GridTable cols='1fr 2fr 1fr' gap='10px'>
            <TableHeader start={1} end={4}>
              Year 4
            </TableHeader>
            {
              makeYear(courses['fourth'])
            }
            <TableHeader start={1} end={4}>
              Year 3
            </TableHeader>
            {
              makeYear(courses['third'])
            }
            <TableHeader start={1} end={4}>
              <span onClick={this.hideTwo} style={{cursor: 'pointer'}}>
                Year 2 <small>{this.state.hideTwo ? '▼' : '▲'}</small>
              </span>
            </TableHeader>
            {
              this.state.hideTwo ? null : makeYear(courses['second'])
            }
            <TableHeader start={1} end={4}>
              <span onClick={this.hideOne} style={{cursor: 'pointer'}}>
                Year 1 <small>{this.state.hideOne ? '▼' : '▲'}</small>
              </span>
            </TableHeader>
              {
                this.state.hideOne ? null : makeYear(courses['first'])
              }
          </GridTable>
          <br/>
          <SubHeading
          title='Secondary School'
          message='Xavier Catholic College | ATAR: 98.7'
          />
        </Content>
      </Layout>
    )
  }
}


export default EducationPage
