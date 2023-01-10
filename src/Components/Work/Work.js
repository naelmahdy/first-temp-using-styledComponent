import React, { Component } from 'react'
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js'
import axios from 'axios'
class Work extends Component {
  state = {
    works: []
  }
  componentDidMount() {
    axios.get(`json/data.json`).then((res) => {
      // console.log(res.data.works);
      this.setState({ works: res.data.works })
    })
  }

  render() {
    const { works } = this.state
    const worksList = works.map((workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>
      )
    })
    return (
      // <!-- Work -->
      <WorkSection>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {/* <WorkPart first='1'>
            <Icon className="icon fa fa-chain fa-2x"></Icon>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>

          <WorkPart>
            <Icon className="icon fa fa-chain fa-2x"></Icon>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>

          <WorkPart>
            <Icon className="icon fa fa-chain fa-2x"></Icon>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart> */}
          {worksList}
        </div>
      </WorkSection >
    )
  }
}

export default Work