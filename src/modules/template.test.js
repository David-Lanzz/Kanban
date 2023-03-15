const { populateDom } = require('./template.js');

describe('populateDom', () => {
  it('returns a string of HTML markup', async () => {
    const mealsArr = [
      {
        strMeal: 'Spaghetti Carbonara',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
      },
      {
        strMeal: 'Taco Salad',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1549542877.jpg',
      },
    ];
    const htmlOutput = await populateDom(mealsArr);
    expect(typeof htmlOutput).toBe('string');
    expect(htmlOutput).toContain('<div class="dish_wrapper">');
    expect(htmlOutput).toContain('Spaghetti Carbonara');
    expect(htmlOutput).toContain('Taco Salad');
  });
});
