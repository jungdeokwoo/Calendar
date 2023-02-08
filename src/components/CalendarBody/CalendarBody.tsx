import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarBody = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const clickDateHandler = (date: Date | '') => {
    if (date === '') {
      return;
    }
    if (startDate === null && endDate === null) {
      setStartDate(date);
    } else if (
      !!startDate &&
      endDate === null &&
      (startDate.getTime() === date.getTime() || startDate.getTime() >= date.getTime())
    ) {
      setStartDate(null);
    } else if (!!startDate && endDate === null) {
      setEndDate(date);
    } else if (!!startDate && !!endDate) {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const emptyDate = new Array(31).fill('');

  const realDate = emptyDate
    .map((el, idx) => new Date(today.getFullYear(), today.getMonth(), idx + 1))
    .filter(el => el.getMonth() === today.getMonth());

  const prevEmpty = new Array(firstDay.getDay()).fill('');
  const nextEmpty = new Array(6 - lastDay.getDay()).fill('');

  const totalDateArr = [...prevEmpty, ...realDate, ...nextEmpty];

  return (
    <CalBody>
      <Days>
        {WEEKS.map((el, idx) => (
          <DayButton key={idx} selected={false}>
            {el}
          </DayButton>
        ))}
      </Days>
      <FirstWeeks>
        {totalDateArr.slice(0, 7).map((el, idx) => (
          <DayButton
            key={idx}
            selected={
              !!el
                ? el?.getTime() === startDate?.getTime() || el?.getTime() === endDate?.getTime()
                : false
            }
            onClick={() => clickDateHandler(el)}
          >
            {el === '' ? '' : el.getDate()}
          </DayButton>
        ))}
      </FirstWeeks>
      <SecondWeeks>
        {totalDateArr.slice(7, 14).map((el, idx) => (
          <DayButton
            key={idx}
            selected={
              !!el
                ? el?.getTime() === startDate?.getTime() || el?.getTime() === endDate?.getTime()
                : false
            }
            onClick={() => clickDateHandler(el)}
          >
            {el === '' ? '' : el.getDate()}
          </DayButton>
        ))}
      </SecondWeeks>
      <ThirdWeeks>
        {totalDateArr.slice(14, 21).map((el, idx) => (
          <DayButton
            key={idx}
            selected={
              !!el
                ? el?.getTime() === startDate?.getTime() || el?.getTime() === endDate?.getTime()
                : false
            }
            onClick={() => clickDateHandler(el)}
          >
            {el === '' ? '' : el.getDate()}
          </DayButton>
        ))}
      </ThirdWeeks>
      <FourthWeeks>
        {totalDateArr.slice(21, 28).map((el, idx) => (
          <DayButton
            key={idx}
            selected={
              !!el
                ? el?.getTime() === startDate?.getTime() || el?.getTime() === endDate?.getTime()
                : false
            }
            onClick={() => clickDateHandler(el)}
          >
            {el === '' ? '' : el.getDate()}
          </DayButton>
        ))}
      </FourthWeeks>
      <FifthWeeks>
        {totalDateArr.slice(28, 35).map((el, idx) => (
          <DayButton
            key={idx}
            selected={
              !!el
                ? el?.getTime() === startDate?.getTime() || el?.getTime() === endDate?.getTime()
                : false
            }
            onClick={() => clickDateHandler(el)}
          >
            {el === '' ? '' : el.getDate()}
          </DayButton>
        ))}
      </FifthWeeks>
      <SixthWeeks></SixthWeeks>
    </CalBody>
  );
};

export default CalendarBody;

const CalBody = styled.main`
  display: flex;
  flex-direction: column;
  flex: 7;
  width: 100%;
`;

const Days = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: bisque;
`;

const DayButton = styled.div<{ selected: boolean }>`
  flex: 1;
  position: relative;
  width: 40px;
  height: 40px;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  z-index: 10;
  ${({ selected }) => {
    console.log(selected);
    if (selected) {
      return css`
        ::before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: beige;
          z-index: -2;
        }
        /* border-radius: 50%; */
        /* background-color: bisque; */
      `;
    }
  }}
`;

const FirstWeeks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const SecondWeeks = styled(FirstWeeks)``;
const ThirdWeeks = styled(FirstWeeks)``;
const FourthWeeks = styled(FirstWeeks)``;
const FifthWeeks = styled(FirstWeeks)``;
const SixthWeeks = styled(FirstWeeks)``;
