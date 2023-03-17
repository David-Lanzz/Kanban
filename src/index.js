import getFoodItems from './modules/getdata.js';
import populateDom from './modules/template.js';
import './style.css';

import classes from './modules/classes.js';

classes.fillDom();
let overflowing = false;
const body = document.querySelector('body');
window.addEventListener('click', async (e) => {
  if (e.target.id === 'x') {
    document.querySelector('.popup-window').classList.remove('show-popup');
    body.style.overflowY = 'scroll';
    classes.mealContainer.style.filter = 'blur(0)';
    overflowing = false;
  }
  if (e.target.id === 'commentBtn' && overflowing === false) {
    classes.popupId(e.target.parentNode.id);
    classes.popupWindow.innerHTML = await classes.populatePopup(e.target.parentNode.id);
    classes.collectId(e.target.parentNode.id);
    classes.getComments(e.target.parentNode.id);
    document.querySelector('.popup-window').classList.add('show-popup');
    body.style.overflowY = 'hidden';
    classes.mealContainer.style.filter = 'blur(6px)';
    overflowing = true;
  } else if (e.target.id === 'comment-btn') {
    await classes.addCommentToApi(e.target.parentNode.parentNode.parentNode.parentNode.id);
    classes.collectId(e.target.parentNode.parentNode.parentNode.parentNode.id);
    classes.getComments(e.target.parentNode.parentNode.parentNode.parentNode.id);
  } else if (e.target.id === 'love') {
    await classes.addLikes(e.target.parentNode.parentNode.id);
    classes.getLikes();
    classes.fillDom();
  }
  
});
const mealContainer = document.querySelector('#dish_container');

const fillDom = async () => {
  const mealsArr = await getFoodItems();
  mealContainer.innerHTML = await populateDom(mealsArr);
};

fillDom();
