import React,  { useEffect, useRef } from "react";
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function TVChart() {
    const title = 'Stock Market Heatmap';      
    const containerRef = useRef();

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "600",
        locale: "en",
        colorTheme: "light",
        market: "us",
        showChart: true,
        isTransparent: false,
        largeChartUrl: "",
      });
      containerRef.current.appendChild(script);
    }, []);

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <p>The heatmap is a treemap-style visualization where each block represents a stock, 
            with size based on market cap and color indicating daily price change, offering a quick snapshot of market performance.</p>
        <div className="tradingview-widget-container" ref={containerRef} />
        
        </PageLayout>
      </>
    )
  }
  
TVChart.Layout = Layout
