import React, { useState, useEffect } from 'react'
import { ProfileSkills, Profiles, ProfileList, ProfileItem, Span1, Span2, Skills, SkillsDesc, SkillsBar, BarTitle, BarPercentage, Sp, BarParent, ProfileTitle, ProfileTitleSpan, SkillsTitle, SkillsTitleSpan } from './style.js'
import axios from 'axios'

const Profile = () => {
  const [profile, setProfile] = useState([])
  useEffect(() => {
    axios.get(`json/data.json`).then((res) => {
      // console.log(res.data.works);
      setProfile(res.data.profile)
    })
  }, [])

  const profileContainer = profile.map((res) => {
    return (

      <SkillsBar item={res.id} key={res.id}>
        <BarTitle>{res.title}</BarTitle>
        <BarPercentage>{res.percentage}</BarPercentage>
        <BarParent item={res.id}>
          <Sp item={res.id}></Sp>

          {/* <div>{res.id}</div> */}
        </BarParent>
      </SkillsBar>

    )
  })
  return (
    <ProfileSkills>
      <div class="container">
        <Profiles>
          <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <Span1>Name</Span1>
              nael elmahdy
            </ProfileItem>
            <ProfileItem>
              <Span1>Birthday</Span1>
              25/5/95
            </ProfileItem>
            <ProfileItem>
              <Span1>Address</Span1>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <Span1>Phone</Span1>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <Span1>Email</Span1>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <Span1>Website</Span1>
              <Span2>www.google.com</Span2>
            </ProfileItem>
          </ProfileList>
        </Profiles>

        <Skills>
          <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>

          {profileContainer}

        </Skills>

      </div>
    </ProfileSkills>

  )
}

export default Profile