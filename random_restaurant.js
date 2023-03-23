//get random restaurant
function recommendRestaurants(restaurants) {
  const randomRestaurantList = [];
  let tries = 0; //設置計數器, 用來避免陷入無限迴圈
  while (randomRestaurantList.length < 3 && tries < 300) {
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    if (!randomRestaurantList.some((res) => res._id === restaurant._id)) {
      randomRestaurantList.push(restaurant);
    }
    tries++;
  }
  return randomRestaurantList;
}
module.exports = recommendRestaurants;
