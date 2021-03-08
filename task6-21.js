// Задание
// Дополни функцию getFriends(users) так,
// чтобы она возвращала массив друзей всех пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья,
// сделай так чтобы возвращаемый массив не содержал повторений.

// Пиши код ниже этой строки
const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  const friends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  return friends;
};
// Пиши код выше этой строки
