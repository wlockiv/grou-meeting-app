export function formatAWSDateTimeString(utcString: string): string {
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

  const resultDate = date.toLocaleDateString('en-US', dateOptions);
  const resultTime = date.toLocaleTimeString('en-US', timeOptions);
  return `${resultDate} @ ${resultTime}`;
}

export function isIsoDate(str: string): boolean {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
  const d = new Date(str);
  return d.toISOString() === str;
}
