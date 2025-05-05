import React, { useEffect, useRef } from "react";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

import Lottie from "lottie-react";
import animationData from "../assets/lottie/rocket.json"; 
import passport from "../assets/lottie/passport.json";

export default function LottiePage() {
    const title = 'Animation';   

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>

        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300, margin: "0 auto" }}
        />
        
        <Lottie
            animationData={passport}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300, margin: "0 auto" }}
        />

        </div>

        </PageLayout>
      </>
    )
  }
  
LottiePage.Layout = Layout
