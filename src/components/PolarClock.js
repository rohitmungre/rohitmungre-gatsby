import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PolarClock = () => {
  const ref = useRef();

  useEffect(() => {
    const width = 640;
    const height = 640;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .style("font", "bold 14px sans-serif");

    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

    const format = d3.timeFormat("%H:%M:%S");

    const fields = [
      { name: "second", interval: d3.timeSecond, color: "#d53e4f" },
      { name: "minute", interval: d3.timeMinute, color: "#f46d43" },
      { name: "hour",   interval: d3.timeHour,   color: "#fdae61" },
      { name: "day",    interval: d3.timeDay,    color: "#fee08b" },
      { name: "month",  interval: d3.timeMonth,  color: "#e6f598" },
    ];

    fields.forEach((f, i) => (f.index = i));

    const paths = g.selectAll("path")
      .data(fields)
      .enter()
      .append("path")
      .attr("fill", d => d.color);

    const text = g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em");

    function arc(field, now) {
      const start = field.interval.floor(now);
      const end = field.interval.offset(start, 1);

      return d3.arc()({
        innerRadius: field.index * 30 + 100,
        outerRadius: field.index * 30 + 128,
        startAngle: 0,
        endAngle: 2 * Math.PI * ((now - start) / (end - start)),
      });
    }

    d3.timer(() => {
      const now = new Date();
      paths.attr("d", d => arc(d, now));
      text.text(format(now));
    });
  }, []);

  return <svg ref={ref}></svg>;
};

export default PolarClock;
