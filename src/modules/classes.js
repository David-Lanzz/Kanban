// all methods
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
export default class classes {
    static popupWindow = document.querySelector('#popup-window')

  static baseurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WcPR52P9C9b3ZbPg6GHe'

    static getInvolvementApi = async () => {
      const apiUrl = `${this.baseurl}/likes`;
      const getUrl = fetch(apiUrl, {
        method: 'GET',
      });
      const getItems = await getUrl;
      const test = await getItems.json();
      return test;
    }

      static popupId = async (e) => {
        let id = '';
        const arrayItem = await this.getFoodItems();
        arrayItem.forEach((element) => {
          if (element.idMeal === e) {
            id = element.idMeal;
          }
        });
        return id;
      }

    static populatePopup = async (e) => {
      const arrayItem = await this.getFoodItems();
      let output = '';
      const comments = await this.collectId(e);
      arrayItem.forEach((element) => {
        if (element.idMeal === e) {
          this.popupWindow.id = e;
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
  </ul><h4>Comments (<span id="number-of-comments">${comments.length}
  
  </span>)</h4>
  <ul class="comments-section" id='comments-section'>
  
  </ul>
  <h4>Add a comment</h4>
  <ul class="add-comment">
  <li><input type="text" placeholder="Your name" name="user-name" id="nameInput"></li>
  <li><textarea name="new comment" id="new-comment" maxlength="30" cols="30" rows="10" placeholder="your insights"></textarea></li>
  <li><button id="comment-btn">Comment</button></li>
  </ul>
  </section>`;
        }
      });
      return output;
    }

  static getComments = async (e) => {
    const comments = await this.collectId(e);
    const filteredComments = comments.filter((element) => element.comment !== '');
    let output = '';
    let i = 0;
    filteredComments.forEach((element) => {
      i += 1;
      element.index = i;
      if (element.index % 2 === 0) {
        element.background = '#cfba9a';
        element.color = '#333';
      } else {
        element.background = 'rgb(126, 49, 49)';
      }
      output += `<li style="background-color: ${element.background};color:${element.color}"><span id="date">${element.creation_date}</span><span id="name">${element.username}</span><span id="comment">${element.comment}</span></li>`;
    });
    return output;
  }

  static mealContainer = document.querySelector('#dish_container');

  static getFoodItems = async () => {
    const Url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
    const getUrl = fetch(Url, {
      method: 'GET',
    });
    const testUrl = await getUrl;
    const foodItems = await testUrl.json();
    return (foodItems.meals);
  };

  static getMealsId = async () => {
    const idArray = await this.getFoodItems();
    const array = [];
    idArray.forEach((element) => {
      array.push(element.idMeal);
    });
    return array;
  }

  static postLikes = async () => {
    const array = await this.getMealsId();
    let getToApi = '';
    for (let i = 0; i < array.length; i += 1) {
      setInterval(() => {
        getToApi = fetch(`${this.baseurl}/likes`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            item_id: `${array[i]}`,
          }),
        });
        getToApi.then((res) => res.text());
      }, 100);
    }
  }

    static collectId = async (e) => {
      const test = await this.popupId(e);
      const apiUrl = `${this.baseurl}/comments?item_id=${test}`;
      const result1 = fetch(apiUrl).then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      });
      return result1;
    }

  static addCommentToApi = async (e) => {
    const test = await this.popupId(e);
    const apiUrl = `${this.baseurl}/comments`;
    const getToApi = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: `${test}`,
        username: `${document.querySelector('#nameInput').value}`,
        comment: `${document.querySelector('#new-comment').value}`,
      }),
    });
    const test2 = getToApi;
    const likesArr = await test2.text();
    document.querySelector('#nameInput').value = '';
    document.querySelector('#new-comment').value = '';
    return likesArr;
  }

  static getLikes = async () => {
    const apiUrl = `${this.baseurl}/likes`;
    const getToApi = await fetch(apiUrl, {
      method: 'GET',
    });
    const test = getToApi;
    const likesArr = await test.json();
    return likesArr;
  }

  static addLikes = async (e) => {
    const apiUrl = `${this.baseurl}/likes`;
    const likes = await this.getLikes();
    let likesCount = '';
    likes.forEach((like) => {
      if (e === like.item_id) {
        likesCount = like.likes;
      }
    });
    const id = e;

    const getToApi = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${id}`,
        likes: `${likesCount + 1}`,
      }),
    });
    const test = getToApi;
    const likesArr = await test.text();
    return likesArr;
  }

  static populateDom = async () => {
    let output = '';
    const mealsArr = await this.getFoodItems();
    const likes = await this.getLikes();
    mealsArr.forEach((element) => {
      likes.forEach((elementLikes) => {
        if (element.idMeal === elementLikes.item_id) {
          element.likesCount = elementLikes.likes;
        }
      });
      output += `  <div class="dish_wrapper" id=${element.idMeal}>
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
  };

  static fillDom = async () => {
    this.mealContainer.innerHTML = await this.populateDom();
  };
}