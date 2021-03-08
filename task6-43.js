// Пиши код ниже этой строки
const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки

// Задание
// Дополни функцию getSortedFriends(users) так,
// чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.
