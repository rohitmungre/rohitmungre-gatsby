import React from "react";
import PolarClock from "../components/PolarClock";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function PClock() {
    const title = 'Polar Clock';      

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <p>The Polar Clock is a dynamic circular visualization that represents time using 
            concentric arcs for seconds, minutes, hours, days, and months in a visually engaging radial format.</p>
        <PolarClock />
        
        </PageLayout>
      </>
    )
  }
  
PClock.Layout = Layout
