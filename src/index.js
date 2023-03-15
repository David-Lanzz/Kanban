import './style.css';

import classes from './modules/classes.js';

classes.fillDom();

window.addEventListener('click', async (e) => {
  if (e.target.id === 'commentBtn') {
    classes.popupId(e.target.parentNode.id);
    classes.populatePopup(e.target.parentNode.id);
    classes.collectId(e.target.parentNode.id);
  }
  if (e.target.id === 'comment-btn') {
    classes.populatePopup(e.target.parentNode.parentNode.parentNode.parentNode.id);
  }
});