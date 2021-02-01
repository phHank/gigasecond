// Returns the date/time after a gigasecond has elapsed (approx 31.7 years - or exactly 1 billion seconds.)

const gigasecond = moment => {
  const oneGigaSecInMiliSec = (1e12);
  
  return new Date((moment.getTime()) + oneGigaSecInMiliSec);
};