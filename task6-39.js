// Пиши код ниже этой строки
const sortByDescendingFriendCount = (users) => {
  const descendingFriendCount = [...users].sort(
    (a, b) => b.friends.length - a.friends.length
  );
  return descendingFriendCount;
};
// Пиши код выше этой строки
