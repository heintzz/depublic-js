const numToMonth = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const ISOToDateString = (ISODate) => {
  const date = new Date(ISODate);
  const monthIndex = date.getMonth();
  return `${date.getDate()} ${numToMonth[monthIndex]} ${date.getFullYear()}`;
};

export const NumberToCurrencyFormat = (num) => {
  const currecyFormat = num.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return currecyFormat;
};
