import React, { useState, useEffect } from 'react'
import { SocialMedia2, Social, Icon, SocialDesc, Span, SpanInfo } from './style.js'
import axios from 'axios'

const SocialMedia = () => {
  const [social, setSocial] = useState([])
  useEffect(() => {
    axios.get(`json/data.json`).then((res) => {
      // console.log(res.data.works);
      setSocial(res.data.social)
    })
  }, [])

  const socialList = social.map((socialItem) => {
    return (

      <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialDesc>
          <Span> {socialItem.title}</Span>
          <SpanInfo >{socialItem.body}</SpanInfo>
        </SocialDesc>

      </Social>

    )
  })
  return (
    <SocialMedia2>
      {socialList}
      {/* 
      <Social>
        <Icon class="icon fa fa-pinterest fa-lg"></Icon>
        <SocialDesc>
          <Span class="info1">Pin Me on</Span>
          <SpanInfo class="info2">Social Pinterest</SpanInfo>
        </SocialDesc>

      </Social> */}
      {/* <div class="social face">
        <i class="icon fa fa-facebook fa-lg"></i>
        <p>
          <span class="info1">Follow Me on</span>
          <span class="info2">Social Facebook</span>
        </p>
      </div>

      <div class="social twitter">
        <i class="icon fa fa-twitter fa-lg"></i>
        <p>
          <span class="info1">Tweet Me on</span>
          <span class="info2">Social twitter</span>
        </p>
      </div> */}
    </SocialMedia2>
  )
}

export default SocialMedia