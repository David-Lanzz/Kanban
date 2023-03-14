import './style.css';
const popupWindow = document.querySelector('#popup-window')


let array = []
const getInvolvementApi = async()=>{
    const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CpnE9NNUbu1zv9OE8RDw/likes`
    const getUrl = fetch(apiUrl,{
    method: 'GET',
    })
    const getItems = await getUrl
    const test = await getItems.json()
   return test
    }
  const populatePopup = async()=> {
    const arrayItem = await getInvolvementApi()
    let output = ''
    arrayItem.forEach(element => {
      output =  `<div class="x">
<div class="topx"></div>
<div class="bottomx"></div>
</div>
<section class="popup-meal-image">

</section>
<section class="popup-info">
<h3>Name of Meal</h3>
<ul class="additional-information">
<li><div class="right">Fuel:</div><div>Length:</div></li>
<li><div class="right">Weight:</div><div>Power:</div></li>
</ul><h4>Comments (<span id="number-of-comments">${'lanzz'}

</span>)</h4>
<ul class="comments-section">
<li></li>
<li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
<li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
</ul>
<h4>Add a comment</h4>
<ul class="add-comment">
<li><input type="text" placeholder="Your name" name="user-name"></li>
<li><textarea name="new comment" id="new-comment" cols="30" rows="10" placeholder="your insights"></textarea></li>
<li><button id="comment-btn">Comment</button></li>
</ul>
</section>`
    });
    popupWindow.innerHTML = output
  }
  populatePopup()

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
const getMealsId = async()=> {
    const idArray = await getFoodItems()
    const array = []
    idArray.forEach(element => {
       array.push(element.idMeal)
    })
    return array
}
const postLikes = async()=>{
  const array = await getMealsId()
  console.log(array)
  let getToApi = ''
 for(let i = 0;i < array.length;i+=1)
  setInterval(()=> {
    getToApi = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nvwt41EYsSFQ5YyQ8wBC/likes',{
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({
        item_id: `${array[i]}`
      }),
  })
  getToApi.then(res => console.log(res.text()))
   },100)
 }


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
