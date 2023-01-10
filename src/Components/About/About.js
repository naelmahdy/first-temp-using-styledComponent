import React from 'react'
import { Creative, CreativeInfo, CreativeInfoTitle, CreativeInfoSpan, CreativeInfoDir, CreativeInfDesc, CreativeInfDescA } from './style.js'
const About = () => {
  return (
    <Creative>
      <div class="container">
        <CreativeInfo>
          <CreativeInfoTitle><CreativeInfoSpan>This is</CreativeInfoSpan> Me</CreativeInfoTitle>
          <CreativeInfoDir>Creative Director</CreativeInfoDir>
          <CreativeInfDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <CreativeInfDescA>explicabo</CreativeInfDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeInfDesc>
          <CreativeInfDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeInfDesc>
        </CreativeInfo>
      </div>
    </Creative>
  )
}

export default About