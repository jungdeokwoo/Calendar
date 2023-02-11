import React from 'react';
import styled from 'styled-components';

const CalendarHeader = ({ month }: { month: number }) => {
  return <CalHeader>{month} 월</CalHeader>;
};

export default CalendarHeader;

const CalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
`;
