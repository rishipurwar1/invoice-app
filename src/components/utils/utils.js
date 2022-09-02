import moment from "moment";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getSubstring = (string, length) => {
  return string.substring(string.length - length);
};

export const formatDate = (date) => {
  return moment(date).format("MMM Do YY");
};
