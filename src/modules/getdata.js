const getFoodItems = async () => {
  const Url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
  const getUrl = fetch(Url, {
    method: 'GET',
  });
  const testUrl = await getUrl;
  const foodItems = await testUrl.json();
  return foodItems.meals;
};

export default getFoodItems;