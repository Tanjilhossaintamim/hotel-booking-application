import "./offer.scss";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Offer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHour, setTimerHour] = useState("00");
  const [timerMinute, setTimerMinute] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("August 20, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  });

  return (
    <div className="offerwrapper">
      <ContentWrapper>
        <div className="promo">
          <div className="promoleft">
            <h1>Summer Promo 50% Off</h1>
            <button>Avil now</button>
          </div>
          <div className="promoright">
            <h6>THE PROMO WILL START IN</h6>
            <span>{timerDays}<small>Days</small></span>
            <span>: {timerHour}<small>Hour</small></span>
            <span>: {timerMinute}<small>Minutes</small></span>
            <span>: {timerSecond}<small>Seconds</small></span>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Offer;
