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
      { name: "second", max: 60, getter: d => d.getSeconds(), color: "#d53e4f" },
      { name: "minute", max: 60, getter: d => d.getMinutes(), color: "#f46d43" },
      { name: "hour",   max: 24, getter: d => d.getHours(),   color: "#fdae61" },
      { name: "day",    max: 31, getter: d => d.getDate(),    color: "#fee08b" },
      { name: "month",  max: 12, getter: d => d.getMonth() + 1, color: "#e6f598" }, // +1 to make Jan = 1
    ];

    // Reverse so seconds are on outside
    fields.reverse();

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
      const value = field.getter(now);
      return d3.arc()({
        innerRadius: field.index * 30 + 100,
        outerRadius: field.index * 30 + 128,
        startAngle: 0,
        endAngle: 2 * Math.PI * (value / field.max),
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
