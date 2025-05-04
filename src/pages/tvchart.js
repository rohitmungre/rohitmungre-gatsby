import React from "react";
import TradingViewChart from "../components/TradingViewChart";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function TVChart() {
    const title = 'Market Snapshot';      

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <TradingViewChart symbol="NASDAQ:AAPL" height={600} />
        
        </PageLayout>
      </>
    )
  }
  
TVChart.Layout = Layout
