import React from "react";
import TradingViewChart from "../components/TradingViewChart";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function TVChart() {
    const title = 'Symbol Advanced Chart';      

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <p>A real-time, interactive financial visualization tool that lets one select symbols from multiple sources,
          supports multiple time frequencies
          and offers various chart types like candlestick, bar and area charts, along with technical indicators 
          and drawing tools for comprehensive market analysis.</p>

        <TradingViewChart symbol="NASDAQ:AAPL" height={600} />
        
        </PageLayout>
      </>
    )
  }
  
TVChart.Layout = Layout
