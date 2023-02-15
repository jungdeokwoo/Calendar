import React, { useState } from 'react';

import CalendarFooter from '../../components/CalendarFooter/CalendarFooter';
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader';
import CalendarBody from '../../components/CalendarBody/CalendarBody';
import { getDateArray } from '../../utils/convertDate';

const CalComponents = ({ startDate, range }: { startDate: Date; range: number }) => {
  const [startSelected, setstartSelected] = useState<Date | null>(null);
  const [endSelected, setEndSelected] = useState<Date | null>(null);
  const dateArray: Date[] = getDateArray(startDate, range);

  const clickDateHandler = (date: Date | '') => {
    if (date === '') {
      return;
    }
    if (startSelected === null && endSelected === null) {
      setstartSelected(date);
    } else if (
      !!startSelected &&
      endSelected === null &&
      (startSelected.getTime() === date.getTime() || startSelected.getTime() >= date.getTime())
    ) {
      setstartSelected(null);
    } else if (!!startSelected && endSelected === null) {
      setEndSelected(date);
    } else if (!!startSelected && !!endSelected) {
      setstartSelected(null);
      setEndSelected(null);
    }
  };

  return (
    <>
      {dateArray.map((date: Date) => (
        <>
          <CalendarHeader month={date.getMonth()} />
          <CalendarBody
            startDate={date}
            startSelected={startSelected}
            endSelected={endSelected}
            clickDateHandler={clickDateHandler}
          />
        </>
      ))}
      {/* <CalendarBody
        startDate={startDate}
        startSelected={startSelected}
        endSelected={endSelected}
        clickDateHandler={clickDateHandler}
      />
      <CalendarBody
        startDate={new Date('2023/3/3')}
        startSelected={startSelected}
        endSelected={endSelected}
        clickDateHandler={clickDateHandler}
      /> */}
      <CalendarFooter />
    </>
  );
};

export default CalComponents;
