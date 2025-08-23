export default function getFormattedDate(dateInput, { timeZone } = {}) {
  let d;

  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    const [y, m, day] = dateInput.split('-').map(Number);
    d = new Date(y, m - 1, day); // local midnight, no UTC shift
  } else {
    d = new Date(dateInput);
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    ...(timeZone ? { timeZone } : {}),
  }).format(d);
}
