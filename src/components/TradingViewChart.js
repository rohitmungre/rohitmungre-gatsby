import React, { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol = "NASDAQ:AAPL", width = "100%", height = 500 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    } else {
      renderWidget();
    }

    function renderWidget() {
      if (containerRef.current && containerRef.current.innerHTML === "") {
        new window.TradingView.widget({
          container_id: "tv_chart_container",
          symbol,
          width,
          height,
          theme: "light",
          locale: "en",
          style: "1",
          interval: "D",
          timezone: "Etc/UTC",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
        });
      }
    }
  }, [symbol, width, height]);

  return (
    <div>
      <div id="tv_chart_container" ref={containerRef} />
    </div>
  );
};

export default TradingViewChart;
