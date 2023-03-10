import React from 'react';
import styled from 'styled-components';
import CalComponents from '../../components/CalComponents/CalComponents';

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarContainer>
        <CalComponents startDate={new Date()} range={3} />
      </CalendarContainer>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(200, 200, 200);
`;

const CalendarContainer = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px rgb(150, 150, 150);
  background-color: white;
  overflow: scroll;
`;
