export const validateDateFormat = (value?: string): boolean => {
  if (!value || value.length !== 5) {
    return false;
  }

  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;

  return dateRegex.test(value);
};
