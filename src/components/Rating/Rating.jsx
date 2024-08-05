import { motion } from "framer-motion";
import "./Rating.css";
function Rating({ vote_average }) {
  const color = (vote) => {
    if (vote >= 80) {
      return "#00FCA8";
    } else if (vote >= 70) {
      return "#0099A9";
    } else if (vote >= 60) {
      return "#26948B";
    } else if (vote >= 50) {
      return "#EFD077";
    } else {
      return "#E76C53";
    }
  };

  const vote = ((vote_average * 10) / 100) * 100;
  return (
    <div className="rate__score">
      <svg className="rate__score--circle">
        <circle cx="20" cy="20" r="20" />
        {/* <circle cx="20" cy="20" r="20" style={rateColor()} /> */}
        <motion.circle
          initial={{ strokeDashoffset: 125 }}
          animate={{
            transition: { duration: 0.6 },
            strokeDashoffset: 125 - (125 * vote) / 100,
          }}
          cx="20"
          cy="20"
          r="20"
          stroke={color(vote)}
        />
      </svg>
      <p className="rate__score--percent">
        {Math.ceil(((vote_average * 10) / 100) * 100)}%
      </p>
    </div>
  );
}

export default Rating;
