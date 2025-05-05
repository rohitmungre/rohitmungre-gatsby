import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PolarClock = () => {
  const ref = useRef();
  const themeTextColorRef = useRef("#ffffff"); // fallback default

  useEffect(() => {
    const width = 640;
    const height = 640;

    // Get default theme text color from body or root container
    try {
      const style = getComputedStyle(document.body);
      themeTextColorRef.current = style.color || "#ffffff";
    } catch (e) {
      console.warn("Could not read theme text color:", e);
    }

    const svg = d3.select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .style("font", "bold 14px sans-serif");

    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

    const fieldDefs = [
      { name: "second", max: 60, getter: d => d.getSeconds(), color: "#d53e4f" },
      { name: "minute", max: 60, getter: d => d.getMinutes(), color: "#f46d43" },
      { name: "hour",   max: 24, getter: d => d.getHours(),   color: "#fdae61" },
      { name: "day",    max: 31, getter: d => d.getDate(),    color: "#fee08b" },
      { name: "month",  max: 12, getter: d => d.getMonth() + 1, color: "#e6f598" },
    ];

    const dateColor = "#fee08b";
    const monthColor = "#e6f598";

    const fields = [...fieldDefs].reverse();
    fields.forEach((f, i) => (f.index = i));

    const paths = g.selectAll("path")
      .data(fields)
      .enter()
      .append("path")
      .attr("fill", d => d.color);

    const timeGroup = g.append("foreignObject")
      .attr("x", -160)
      .attr("y", -50)
      .attr("width", 320)
      .attr("height", 120);

    const div = timeGroup.append("xhtml:div")
      .style("text-align", "center")
      .style("font", "bold 16px sans-serif")
      .style("line-height", "1.4");

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    function formatStyled(now) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

      const second = now.getSeconds();
      const minute = now.getMinutes();
      const hour = now.getHours();
      const date = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      const pad = n => n.toString().padStart(2, '0');

      const baseColor = themeTextColorRef.current;

      return `
        <div>
          <span style="color:${dateColor}">${date}</span> 
          <span style="color:${monthColor}">${month}</span> 
          <span style="color:${baseColor}">${year}</span><br/>
          <span style="color:${fieldDefs[2].color}">${pad(hour)}</span>:
          <span style="color:${fieldDefs[1].color}">${pad(minute)}</span>:
          <span style="color:${fieldDefs[0].color}">${pad(second)}</span><br/>
          <span style="color:${baseColor}; font-size: 0.9em;">(${timeZone})</span>
        </div>
      `;
    }

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
      div.html(formatStyled(now));
    });
  }, []);

  return <svg ref={ref}></svg>;
};

export default PolarClock;
