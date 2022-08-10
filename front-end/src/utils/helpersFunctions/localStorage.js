const INITIAL_VALUE = [];

const saveStorage = (key, data) => localStorage
  .setItem(key, JSON.stringify(data));

const readStorage = (key) => {
  let content = localStorage.getItem(key);
  if (!content) {
    saveStorage(key, INITIAL_VALUE);
    content = INITIAL_VALUE;
    return content;
  }
  content = data;

  return JSON.parse(content);
};

const deliveryStorage = {
  add(key, payload) {
    const items = readStorage(key);
    items.push(payload);
    saveStorage(key, items);
    return items;
  },
  get(key) {
    const items = readStorage(key);
    return items;
  },
};

module.exports = { deliveryStorage };
