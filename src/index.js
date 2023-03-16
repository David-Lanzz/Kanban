import getFoodItems from './modules/getdata.js';
import populateDom from './modules/template.js';
import './style.css';

import classes from './modules/classes.js';

classes.fillDom();

window.addEventListener('click', async (e) => {
  if (e.target.id === 'commentBtn') {
    classes.popupId(e.target.parentNode.id);
    classes.populatePopup(e.target.parentNode.id);
    classes.collectId(e.target.parentNode.id);
    classes.getComments(e.target.parentNode.id);
  }
  if (e.target.id === 'comment-btn') {
    classes.populatePopup(e.target.parentNode.parentNode.parentNode.parentNode.id);
  }
  if (e.target.id === 'love') {
    await classes.addLikes(e.target.parentNode.parentNode.id)
    classes.getLikes()
    classes.fillDom();
  }
});
const mealContainer = document.querySelector('#dish_container');

const fillDom = async () => {
  const mealsArr = await getFoodItems();
  mealContainer.innerHTML = await populateDom(mealsArr);
};

fillDom();
