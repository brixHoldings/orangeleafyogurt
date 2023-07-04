export const validatePhoneNumber = (value?: string): boolean => {
  if (!value) {
    return true;
  }

  const numberString = value.replace(/[^0-9]/gu, '');

  return numberString.length === 10;
};
