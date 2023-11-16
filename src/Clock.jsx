import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Clock = () => {
  const [day, setDay] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDay(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <h1 data-aos="zoom-in-down">Coming Soon</h1>
      <p className="subtitle" data-aos="zoom-in-up">
        Stay Tuned For <br />
        Something Amazing!
      </p>
      <div className="clock">
        <div className="hour">
          <HourHand
            rotation={
              ((day.getHours() % 12) +
                day.getMinutes() / 60 +
                day.getSeconds() / 3600) *
                30 +
              'deg'
            }
          />
        </div>
        <div className="min">
          <MinuteHand rotation={day.getMinutes() * 6 + 'deg'} />
        </div>
        <div className="sec">
          <SecondHand rotation={day.getSeconds() * 6 + 'deg'} />
        </div>
        <div className="number number1">
          <p>1</p>
        </div>
        <div className="number number2">
          <p>2</p>
        </div>
        <div className="number number3">
          <p>3</p>
        </div>
        <div className="number number4">
          <p>4</p>
        </div>
        <div className="number number5">
          <p>5</p>
        </div>
        <div className="number number6">
          <p>6</p>
        </div>
        <div className="number number7">
          <p>7</p>
        </div>
        <div className="number number8">
          <p>8</p>
        </div>
        <div className="number number9">
          <p>9</p>
        </div>
        <div className="number number10">
          <p>10</p>
        </div>
        <div className="number number11">
          <p>11</p>
        </div>
        <div className="number number12">
          <p>12</p>
        </div>
      </div>
    </>
  );
};

const SecondHand = styled.div`
&:before{
content: "";
position: absolute;
width: 2px;
height: 150px;
background: #13a1d8;
z-index: 12;   /*place it above the "clock" and hour+min gage but under the centerDot*/
border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
bottom: 113px;
transform: rotate(${(props) => props.rotation});
translate3d(-50%, 0, 0);
transform-origin: 0px bottom;
}
display: flex;
justify-content: center; !*make it be on spot -> move it from left to center*!
position: absolute;
width: 230px;
height: 230px;
`;

const MinuteHand = styled.div`
&:before{
content: "";
position: absolute;
width: 2px;
height: 90px;
top: 5px;
background: #fff;
z-index: 11; /*place it above the "clock" and hour gage but under the centerDot*/
border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
left: 50%;
transform: rotate(${(props) => props.rotation});
translate3d(-50%, 0, 0);
transform-origin: 0px bottom;
}
`;

const HourHand = styled.div`
&:before{
content: "";
position: absolute;
width: 5px;
height: 80px;
// background: #292a2e;
left: 50%;
z-index: 10; /*place it above the "clock" but under the centerDot*/
border-radius: 6px 6px 0 0; /*smoothing out end of hour gage*/
transform: rotate(${(props) => props.rotation});
translate3d(-50%, 0, 0);
transform-origin: 0px bottom;
}
`;

export default Clock;
