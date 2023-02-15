import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

type CalendarProps = {
  startDate: Date;
  startSelected: Date | null;
  endSelected: Date | null;
  clickDateHandler: (el: Date) => void;
};

const CalendarBody = ({
  startDate,
  startSelected,
  endSelected,
  clickDateHandler,
}: CalendarProps) => {
  const today = startDate;
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
          <DayButton key={idx} selectedStart={false} selectedEnd={false} range={false}>
            {el}
          </DayButton>
        ))}
      </Days>
      <FirstWeeks>
        {totalDateArr.slice(0, 7).map((el, idx) => (
          <DayButton
            key={idx}
            selectedStart={!!el ? el?.getTime() === startSelected?.getTime() : false}
            selectedEnd={!!el ? el?.getTime() === endSelected?.getTime() : false}
            range={
              !!el && !!startSelected && !!endSelected
                ? el?.getTime() > startSelected?.getTime() && el?.getTime() < endSelected?.getTime()
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
            selectedStart={!!el ? el?.getTime() === startSelected?.getTime() : false}
            selectedEnd={!!el ? el?.getTime() === endSelected?.getTime() : false}
            range={
              !!el && !!startSelected && !!endSelected
                ? el?.getTime() > startSelected?.getTime() && el?.getTime() < endSelected?.getTime()
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
            selectedStart={!!el ? el?.getTime() === startSelected?.getTime() : false}
            selectedEnd={!!el ? el?.getTime() === endSelected?.getTime() : false}
            range={
              !!el && !!startSelected && !!endSelected
                ? el?.getTime() > startSelected?.getTime() && el?.getTime() < endSelected?.getTime()
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
            selectedStart={!!el ? el?.getTime() === startSelected?.getTime() : false}
            selectedEnd={!!el ? el?.getTime() === endSelected?.getTime() : false}
            range={
              !!el && !!startSelected && !!endSelected
                ? el?.getTime() > startSelected?.getTime() && el?.getTime() < endSelected?.getTime()
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
            selectedStart={!!el ? el?.getTime() === startSelected?.getTime() : false}
            selectedEnd={!!el ? el?.getTime() === endSelected?.getTime() : false}
            range={
              !!el && !!startSelected && !!endSelected
                ? el?.getTime() > startSelected?.getTime() && el?.getTime() < endSelected?.getTime()
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
  margin-bottom: 10px;
`;

const Days = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: bisque;
`;

const DayButton = styled.div<{ selectedStart: boolean; range: boolean; selectedEnd: boolean }>`
  flex: 1;
  position: relative;
  width: 40px;
  height: 40px;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  z-index: 10;
  ${({ selectedStart, selectedEnd }) => {
    if (selectedStart) {
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
        ::after {
          content: '';
          display: block;
          position: absolute;
          right: -30%;
          top: 0;
          transform: translateX(-50%);
          width: 30px;
          height: 40px;
          background-color: beige;
          z-index: -2;
        }
      `;
    }
    if (selectedEnd) {
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
        ::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background-color: beige;
          z-index: -2;
        }
      `;
    }
  }}
  ${({ range }) => {
    if (range) {
      return css`
        background-color: beige;
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
