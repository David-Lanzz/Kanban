const populateDom = async (mealsArr) => {
  let output = '';
  mealsArr.forEach((element) => {
    output += `  <div class="dish_wrapper">
              <div class="dish_image">
                  <img src="${element.strMealThumb}" alt="image"> 
              </div>
              <div class="dish_name">
                  <h2>${element.strMeal}</h2>
                  <i id="love" class="fa-regular fa-heart"></i>
                  <div class="likes">
                  <h4 class="likes_wrap">likes</h4>
              </div>
              </div>
              
              <button class="commentBtn">comments</button>
           </div>`;
  });
  return output;
};

export default populateDom;