// //get random restaurant
// function recommendRestaurants(restaurants) {
//   const randomRestaurantList = [];
//   let tries = 0; //設置計數器, 用來避免陷入無限迴圈
//   while (randomRestaurantList.length < 3 && tries < 300) {
//     const restaurant =
//       restaurants[Math.floor(Math.random() * restaurants.length)];
//     if (!randomRestaurantList.some((res) => res._id === restaurant._id)) {
//       randomRestaurantList.push(restaurant);
//     }
//     tries++;
//   }
//   return randomRestaurantList;
// }

//使用set 改善效能
function recommendRestaurants(restaurants) {
  const randomRestaurantSet = new Set();
  while (
    randomRestaurantSet.size < 3 &&
    randomRestaurantSet.size < restaurants.length // 避免餐廳總數<3的時候產生無限迴圈
  ) {
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    randomRestaurantSet.add(restaurant);
  }
  return [...randomRestaurantSet];
}

module.exports = recommendRestaurants;
