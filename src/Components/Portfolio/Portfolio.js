import React, { useState, useEffect } from 'react'
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style.js'
import axios from 'axios'

const Portfolio = () => {

  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get(`json/data.json`).then((res) => {
      // console.log(res.data.works);
      setImages(res.data.portfolio)
    })
  }, [])
  const PortfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        {/* <Image src="images/Portfolio/portfolio-img1.jpg" alt="" /> */}
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>
            Show Image
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  })
  return (
    <PortfolioSection>
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div class="box">



        {PortfolioImages}

      </div>

    </PortfolioSection >
  )
}

export default Portfolio