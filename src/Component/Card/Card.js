import React, { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";
import { UilTimes } from "@iconscout/react-unicons";
import "./Card.css";

const Card = (props) => {
  const [Expanded, setExpanded] = useState(false);

  return (
  
      <AnimatePresence>
        <div>
        {Expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </div>
      </AnimatePresence>
    
  );
};

// Compact card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      layoutId="card"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${param.value}</span>
        <span>last 24 hours</span>
      </div>
    </motion.div>
  );
}

// EXPANDED CARD

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      Chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: "false",
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      strokes: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2017-10-04T20:24:30+00:00",
          "2017-10-04T12:35:30+00:00",
          "2017-10-14T20:32:30+00:00",
          "2017-10-04T10:12:30+00:00",
          "2017-10-14T20:34:30+00:00",
          "2017-10-14T20:34:30+00:00",
          "2017-10-14T20:34:30+00:00",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      layoutId="card"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="ChartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>last 24hours</span>
    </motion.div>
  );
}
export default Card;
