import React from 'react';
import styled from 'styled-components';

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarBody = () => {
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
          <DayButton key={idx}>{el}</DayButton>
        ))}
      </Days>
      <FirstWeeks>
        {totalDateArr.slice(0, 7).map(el => (
          <DayButton>{el === '' ? '' : el.getDate()}</DayButton>
        ))}
      </FirstWeeks>
      <SecondWeeks>
        {totalDateArr.slice(7, 14).map(el => (
          <DayButton>{el === '' ? '' : el.getDate()}</DayButton>
        ))}
      </SecondWeeks>
      <ThirdWeeks>
        {totalDateArr.slice(14, 21).map(el => (
          <DayButton>{el === '' ? '' : el.getDate()}</DayButton>
        ))}
      </ThirdWeeks>
      <FourthWeeks>
        {totalDateArr.slice(21, 28).map(el => (
          <DayButton>{el === '' ? '' : el.getDate()}</DayButton>
        ))}
      </FourthWeeks>
      <FifthWeeks>
        {totalDateArr.slice(28, 35).map(el => (
          <DayButton>{el === '' ? '' : el.getDate()}</DayButton>
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
  background-color: aqua;
`;

const Days = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const DayButton = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 500;
  text-align: center;
`;

const FirstWeeks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: aliceblue;
`;

const SecondWeeks = styled(FirstWeeks)``;
const ThirdWeeks = styled(FirstWeeks)``;
const FourthWeeks = styled(FirstWeeks)``;
const FifthWeeks = styled(FirstWeeks)``;
const SixthWeeks = styled(FirstWeeks)``;
