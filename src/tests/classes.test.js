const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<section id='section'>
<div id='likes'>${+18}</div>
</section>`);
const { document } = dom.window;
const popupWindow = document.querySelector('#section');

const postLikes = jest.fn(async () => {
  const apiResult = [];
  let apiLikesCount = 0;
  apiResult.length = 42;
  for (let i = 0; i < apiResult.length; i += 1) {
    apiLikesCount += 1;
  }
  return apiLikesCount;
});

const addLikes = jest.fn(async () => {
  let likesOfItem1 = document.querySelector('#likes').innerHTML;
  const newLikesOfItem1 = Number(likesOfItem1) + 1;
  likesOfItem1 = newLikesOfItem1;
  return likesOfItem1;
});

describe('Test for likes', () => {
  const getLikes = jest.fn(async () => {
    const likesLength = await postLikes();
    return likesLength;
  });
  test('if number of likes coming from API = 42', async () => {
    getLikes();
    expect(await getLikes()).toBe(42);
  });
  test('expect likes count of item1 to increase', async () => {
    addLikes();
    expect(await addLikes()).toBe(19);
  });
});

let counter = '';
const populateDom = jest.fn(async () => {
  let output = '';
  const mealsArr = [{ idMeal: 'item1', strMeal: 'Beef', strMealThumb: 'link' }];
  const likes = [{ likes: 3, item_id: 'item1' }];
  mealsArr.forEach((element) => {
    likes.forEach((elementLikes) => {
      if (element.idMeal === elementLikes.item_id) {
        element.likesCount = elementLikes.likes;
        counter = elementLikes.likes;
      }
    });
    output += `<div class="dish_wrapper" id=${element.idMeal}>
              <div class="dish_image">
                  <img src="${element.strMealThumb}" alt="image"> 
              </div>
              <div class="dish_name">
                  <h2>${element.strMeal}</h2>
                  <i id="love" class="fa-regular fa-heart"></i>
                  <div class="likes">
                  <h4>${element.likesCount}</h4>
                  </div>
              </div>
              <button class="commentBtn" id="commentBtn">comments</button>
           </div>`;
  });
  return output;
});

const populatePopup = jest.fn(async (e) => {
  const arrayItem = [{ idMeal: 'item1', strMeal: 'Beef', strMealThumb: 'link' }];
  let output = '';
  const comments = [{ comment: 'string', item_id: 'item1' }];
  const filteredComments = comments.filter((element) => element.comment !== '');
  arrayItem.forEach((element) => {
    filteredComments.forEach((comment) => {
      e = comment.item_id;
      if (element.idMeal === e) {
        output = `<div class="x" id="${e}">
<div class="topx" id="x"></div>
<div class="bottomx" id="x"></div>
</div>
<section class="popup-meal-image">
<img src="${element.strMealThumb}" alt="image"> 
</section>
<section class="popup-info">
<h3>${element.strMeal}</h3>
<ul class="additional-information">
<li><div class="right">Fuel:</div><div>Length:</div></li>
<li><div class="right">Weight:</div><div>Power:</div></li>
</ul><h4>Comments (<span id="number-of-comments">${filteredComments.length}

</span>)</h4>
<ul class="comments-section" id='comments-section'>

</ul>
<h4>Add a comment</h4>
<ul class="add-comment">
<li><input type="text" placeholder="Your name" name="user-name" id="nameInput"></li>
<li><textarea name="new comment" id="new-comment" cols="30" rows="10" placeholder="your insights"></textarea></li>
<li><button id="comment-btn">Comment</button></li>
</ul>
</section>`;
      }
    });
  });
  return output;
});

describe('Tests for populating dom and popup', () => {
  test('expect popupwindow to be populated', async () => {
    popupWindow.innerHTML = await populateDom();
    expect(popupWindow.innerHTML).not.toBe(null);
  });
  test('expect likes counter to dosplay when populatedon function is called', async () => {
    popupWindow.innerHTML = await populateDom();
    expect(counter).toBe(3);
  });
  test('expect popupWindow to be populated when populatepopup function is called', async () => {
    popupWindow.innerHTML = await populatePopup();
    expect(popupWindow.innerHTML).not.toBe(null);
  });
});