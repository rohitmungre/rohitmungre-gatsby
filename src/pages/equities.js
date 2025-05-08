import React, { useEffect, useRef, useState } from "react";
import Helmet from 'react-helmet';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { PageLayout } from '../components/PageLayout';
import config from '../utils/config';

export default function SymbolDashboard() {
  const title = 'Equity Insights';

  const [symbol, setSymbol] = useState("NASDAQ:AAPL");

  const overviewRef = useRef();
  const chartRef = useRef();
  const fundamentalRef = useRef();
  const technicalRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const refs = [overviewRef, chartRef, fundamentalRef, technicalRef, profileRef];
    refs.forEach(ref => {
      if (ref.current) ref.current.innerHTML = "";
    });

    const widgets = [
      {
        ref: overviewRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js",
        config: {
          symbols: [[symbol]],
          colorTheme: "light",
          isTransparent: false,
          width: "100%",
          height: "200",
          locale: "en"
        }
      },
      {
        ref: chartRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",
        config: {
          symbol: symbol,
          width: "100%",
          height: "500",
          colorTheme: "light",
          isTransparent: false,
          locale: "en"
        }
      },
      {
        ref: fundamentalRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-financials.js",
        config: {
          symbol: symbol,
          width: "100%",
          height: "450",
          colorTheme: "light",
          isTransparent: false,
          locale: "en"
        }
      },
      {
        ref: technicalRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",
        config: {
          symbol: symbol,
          width: "100%",
          height: "450",
          colorTheme: "light",
          isTransparent: false,
          locale: "en"
        }
      }
    ];

    widgets.forEach(({ ref, src, config }) => {
      if (ref.current) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.innerHTML = JSON.stringify(config);
        ref.current.appendChild(script);
      }
    });
  }, [symbol]);

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <PageLayout>
        <Hero title={title} />

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="symbol-select"><strong>Company: </strong></label>
          <select
            id="symbol-select"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          >
            <option value="NASDAQ:AAPL">Apple</option>
            <option value="NASDAQ:GOOGL">Google</option>
            <option value="NASDAQ:MSFT">Microsoft</option>
            <option value="NASDAQ:AMZN">Amazon</option>
            <option value="NASDAQ:TSLA">Tesla</option>
          </select>
        </div>

        <h3>Symbol Overview</h3>
        <div className="tradingview-widget-container" ref={overviewRef} />

        <h3>Advanced Ticker Chart</h3>
        <div className="tradingview-widget-container" ref={chartRef} />

        <h3><a href="https://www.investopedia.com/terms/f/fundamentalanalysis.asp">Fundamental Analysis</a></h3>
        <div className="tradingview-widget-container" ref={fundamentalRef} />

        <h3><a href="https://www.investopedia.com/terms/t/technicalanalysis.asp">Technical Analysis</a></h3>
        <div className="tradingview-widget-container" ref={technicalRef} />

        <p> *All data is powered by <a href="https://www.tradingview.com/">TradingView</a> and is delayed by up to 15 minutes</p>

      </PageLayout>
    </>
  );
}

SymbolDashboard.Layout = Layout;
