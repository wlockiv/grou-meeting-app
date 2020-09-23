export function formatAWSDateTimeString(utcString: string) {
  const date = new Date(utcString);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone,
  };

  const timeOptions = {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    timeZone,
  };

  let resultDate = date.toLocaleDateString('en-US', dateOptions);
  let resultTime = date.toLocaleTimeString('en-US', timeOptions);
  return `${resultDate} @ ${resultTime}`;
}
