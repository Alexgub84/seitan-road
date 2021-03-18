export const utils = {
  formatDate,
};

function formatDate(date, purpose = "display") {
  console.log({ dateInUtils: date });
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  const result =
    purpose === "display"
      ? `${day}-${month}-${year}`
      : `${year}-${month}-${day}`;
  return result;
}
