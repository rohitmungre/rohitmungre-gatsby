import React, { useEffect, useRef } from "react";
import Helmet from 'react-helmet';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { PageLayout } from '../components/PageLayout';
import config from '../utils/config';

export default function TVMarket() {
  const title = 'Market Watch';

  const tickerRef = useRef(null);
  const heatmapRef = useRef(null);
  const screenerRef = useRef(null);
  const newsRef = useRef(null);
  const marketDataRef = useRef(null);

  useEffect(() => {
    const widgets = [
      {
        ref: tickerRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
        config: {
          symbols: [
            { proName: "NASDAQ:AAPL", title: "Apple" },
            { proName: "NASDAQ:GOOGL", title: "Google" },
            { proName: "NASDAQ:AMZN", title: "Amazon" },
            { proName: "NASDAQ:MSFT", title: "Microsoft" },
            { proName: "NASDAQ:TSLA", title: "Tesla" }
          ],
          colorTheme: "light",
          isTransparent: false,
          displayMode: "adaptive",
          locale: "en"
        }
      },
      {
        ref: heatmapRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",
        config: {
          width: "100%",
          height: "600",
          locale: "en",
          colorTheme: "light",
          market: "us",
          showChart: true,
          isTransparent: false,
          largeChartUrl: ""
        }
      },
      {
        ref: screenerRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
        config: {
          width: "100%",
          height: "400",
          defaultColumn: "overview",
          screener_type: "stock",
          displayCurrency: "USD",
          colorTheme: "light",
          locale: "en"
        }
      },
      {
        ref: newsRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",
        config: {
          feedMode: "all_symbols",
          colorTheme: "light",
          isTransparent: false,
          displayMode: "regular",
          width: "100%",
          height: "600",
          locale: "en"
        }
      },
      {
        ref: marketDataRef,
        src: "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
        config: {
          width: "100%",
          height: "400",
          symbolsGroups: [
            {
              name: "Indices",
              originalName: "Indices",
              symbols: [
                { name: "FOREXCOM:SPXUSD", displayName: "S&P 500" },
                { name: "FOREXCOM:NSXUSD", displayName: "Nasdaq 100" },
                { name: "FOREXCOM:DJI", displayName: "Dow 30" }
              ]
            },
            {
              name: "Commodities",
              originalName: "Commodities",
              symbols: [
                { name: "TVC:GOLD", displayName: "Gold" },
                { name: "TVC:SILVER", displayName: "Silver" },
              ]
            },
            {
              name: "Currencies",
              originalName: "Currencies",
              symbols: [
                { name: "FX:EURUSD", displayName: "EUR/USD" },
                { name: "FX:USDJPY", displayName: "USD/JPY" },
                { name: "FX:GBPUSD", displayName: "GBP/USD" }
              ]
            },
            {
              name: "Crypto",
              originalName: "Crypto",
              symbols: [
                { name: "BINANCE:BTCUSDT", displayName: "Bitcoin" },
                { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
                { name: "BINANCE:SOLUSDT", displayName: "Solana" }
              ]
            }
          ],
          showSymbolLogo: true,
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
        script.type = "text/javascript"; // optional, but safer
        script.innerHTML = JSON.stringify(config);
        ref.current.innerHTML = ""; // clear previous scripts if hot reloading
        ref.current.appendChild(script);
      }
    });
  }, []);

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <PageLayout>
        <Hero title={title} />

        <p>The following widgets provide a snapshot of current market conditions*.</p>
        
        <div className="tradingview-widget-container" ref={tickerRef} />

        <h3>Sector Performance Overview</h3>
        <div className="tradingview-widget-container" ref={heatmapRef} />

        <h3>Stock Screener</h3>
        <div className="tradingview-widget-container" ref={screenerRef} />

        <h3>Latest News</h3>
        <div className="tradingview-widget-container" ref={newsRef} />

        <h3>Market Data</h3>
        <div className="tradingview-widget-container" ref={marketDataRef} />

        <br />
        <p> *All data is powered by <a href="https://www.tradingview.com/">TradingView</a> and is delayed by up to 15 minutes</p>

      </PageLayout>
    </>
  );
}

TVMarket.Layout = Layout;
