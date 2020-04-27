import { format } from 'date-fns';

const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);
  return format(parsedDate, 'dd/MM/yyyy');
};

export default formatDate;
