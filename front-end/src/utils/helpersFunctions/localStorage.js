const saveStorage = (key, data) => localStorage
  .setItem(key, JSON.stringify(data));

const readStorage = (key, payload) => {
  let content = localStorage.getItem(key);
  if (!content) {
    saveStorage(key, payload);
    content = payload;
    return JSON.parse(content);
  }
  return JSON.parse(content);
};

const setStorageLikeArray = (key, payload) => {
  const items = readStorage(key);
  items.push(payload);
  saveStorage(key, items);
  return items;
};

module.exports = { setStorageLikeArray, saveStorage, readStorage };
