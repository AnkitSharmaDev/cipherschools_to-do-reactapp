const dateFormatter = new Intl.DateTimeFormat('en-US', {
  
    hourCycle: 'h12',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

export const formatDate =  (date) => dateFormatter.format((date));

// export formatDate;