import { useContext, useEffect, useRef, useState } from "react";
import { RadialProgressType } from "../../types/components";

export default function RadialProgressComponent({
  value,
  color,
}: RadialProgressType) {
  const style = {
    "--value": value,
    "--size": "1.5rem",
    "--thickness": "2px",
  } as React.CSSProperties;

  return (
    <div className={"radial-progress " + color} style={style}>
      <strong className="text-[8px]">{value * 100}%</strong>
    </div>
  );
}
