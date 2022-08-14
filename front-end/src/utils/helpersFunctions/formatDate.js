const formatDate = (date) => {
  const dateUTC = new Date(Date.parse(date));
  const localDate = dateUTC.toLocaleDateString('pt-BR');
  return localDate;
};

console.log(formatDate('2022-08-12T19:46:10.000Z'));

export default formatDate;
