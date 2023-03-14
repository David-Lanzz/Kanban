import './style.css';

const mealContainer = document.querySelector('#dish_container');
const getFoodItems = async () => {
  const Url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
  const getUrl = fetch(Url, {
    method: 'GET',
  });
  const testUrl = await getUrl;
  const foodItems = await testUrl.json();
  return (foodItems.meals);
};

const populateDom = async () => {
  let output = '';
  const mealsArr = await getFoodItems();
  mealsArr.forEach((element) => {
    output += `  <div class="dish_wrapper">
            <div class="dish_image">
                <img src="${element.strMealThumb}" alt="image"> 
            </div>
            <div class="dish_name">
                <h2>${element.strMeal}</h2>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="likes">
                <h4>likes</h4>
            </div>
            <button class="commentBtn">comments</button>
         </div>`;
  });
  return output;
};

const fillDom = async () => {
    mealContainer.innerHTML = await populateDom();
  };
  

fillDom();
