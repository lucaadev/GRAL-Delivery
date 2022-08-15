const formatDate = (date) => {
  const dateUTC = new Date(Date.parse(date));
  const localDate = dateUTC.toLocaleDateString('pt-BR');
  return localDate;
};

export default formatDate;
