const { getFoodItems } = require('./getdata.js');

describe('getFoodItems', () => {
  it('returns an array of food items', async () => {
    const foodItems = await getFoodItems();
    expect(Array.isArray(foodItems)).toBe(true);
  });

  it('contains at least one food item', async () => {
    const foodItems = await getFoodItems();
    expect(foodItems.length).toBeGreaterThan(0);
  });

  it('returns food items with valid properties', async () => {
    const foodItems = await getFoodItems();
    foodItems.forEach((foodItem) => {
      expect(foodItem.idMeal).toBeDefined();
      expect(foodItem.strMeal).toBeDefined();
    });
  });
});
