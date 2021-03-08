const users = [{ name: "ira" }, { name: "vasya" }];

// Пиши код ниже этой строки
// Пиши код ниже этой строки
const getUserNames = (users) => {
  const names = users.map((user) => user.name);
  return names;
};
// Пиши код выше этой строки
// Пиши код выше этой строки

console.log(getUserNames(users));
