//get random restaurant
function recommendRestaurants(restaurants) {
  const randomRestaurantList = [];
  while (randomRestaurantList.length < 3) {
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    if (!randomRestaurantList.some((res) => res.name === restaurant.name)) {
      randomRestaurantList.push(restaurant);
    }
  }
  return randomRestaurantList;
}
module.exports = recommendRestaurants;
