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
