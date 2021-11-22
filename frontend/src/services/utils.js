export function fromTimeStampToDisplay(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${year}-${month}-${day}`;
}

export function getDateNowTimeZero() {
  return new Date().setHours(0, 0, 0, 0);
}

function log(name) {
  console.log();
}
