import getFoodItems from './modules/getdata.js';
import populateDom from './modules/template.js';
import './style.css';

const mealContainer = document.querySelector('#dish_container');

const fillDom = async () => {
  const mealsArr = await getFoodItems();
  mealContainer.innerHTML = await populateDom(mealsArr);
};

fillDom();
