export const DateToString = ({ date, type }: { date: Date; type: string }) => {
  const years = date.getFullYear();
  const months = date.getMonth();
  const dates = date.getDate();
  return `${years}${type}${months}${type}${dates}`;
};

export const StringToDate = ({ dateString }: { dateString: string }) => {
  return new Date(dateString);
};

export const getDateArray = (date: Date, range: number): Date[] => {
  const emptyArray = new Array(range).fill('');
  const dateArr = emptyArray.map((el, idx) => date.getMonth() + idx);

  return dateArr.map(el => new Date(new Date().setMonth(el)));
};
