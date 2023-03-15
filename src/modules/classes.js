// all methods
export default class classes {
    static popupWindow = document.querySelector('#popup-window')
  static baseurl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`
    static getInvolvementApi = async()=>{
      const apiUrl = `${this.baseurl}CpnE9NNUbu1zv9OE8RDw/likes`
      const getUrl = fetch(apiUrl,{
      method: 'GET',
      })
      const getItems = await getUrl
      const test = await getItems.json()
     return test
      }
      static popupId = async(e)=>{
        let id = ''
        const arrayItem = await this.getFoodItems()
        arrayItem.forEach((element)=> {
  if(element.idMeal === e){
  id = element.idMeal
  }
        })
       return id
        }
         static commentSection = async(element,e)=> {
           await this.populatePopup(e)
           console.log(element)
 return element
         }
    static populatePopup = async(e)=> {
      const arrayItem = await this.getFoodItems()
      let output = ''
      const comments = await this.collectId(e)
      const filteredComments = comments.filter(element => element.comment !== '')
      arrayItem.forEach((element) => {
        filteredComments.forEach((comment)=> {
          if(element.idMeal === e){
            this.popupWindow.id = e
        output =  `<div class="x">
  <div class="topx"></div>
  <div class="bottomx"></div>
  </div>
  <section class="popup-meal-image" style='background: url('${element.strMealThumb}')>
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
  </section>`
          }
        })
      });
      this.popupWindow.innerHTML = output
    this.commentSection(await document.querySelector('#comments-section'),e)
    }
  static getComments = async(e)=> {
 const commentSection = await this.commentSection(await document.querySelector('#comments-section'),e)
const comments = await this.collectId(e)
const filteredComments = comments.filter(element => element.comment !== '')
let output = ''
filteredComments.forEach(element=> {
output += `<li><span id="date">${element.creation_date}</span><span id="name">${element.username}</span><span id="comment">${element.comment}</span></li>`
})
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
  static getMealsId = async()=> {
      const idArray = await this.getFoodItems()
      const array = []
      idArray.forEach(element => {
         array.push(element.idMeal)
      })
      return array
  }
  static postLikes = async()=>{
    const array = await this.getMealsId()
    let getToApi = ''
   for(let i = 0;i < array.length;i+=1)
    setInterval(()=> {
      getToApi = fetch(`${this.baseurl}Nvwt41EYsSFQ5YyQ8wBC/likes`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
          item_id: `${array[i]}`
        }),
    }) 
    
    getToApi.then(res => res.text())
     },100)
   }
  
   static postComments = async()=> {
    const array = await this.getMealsId()
    let getToApi = ''
   for(let i = 0;i < array.length;i+=1)
    setInterval(()=> {
      getToApi = fetch(`${this.baseurl}Nvwt41EYsSFQ5YyQ8wBC/comments`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
          item_id: `${array[i]}`,
           username: ``,
           comment: ``
        }),
    }) 
    getToApi.then(res => (res.text()))
     },100)
  }
  static collectId = async(e)=> {
    const test = await this.popupId(e)
     const apiUrl = `${this.baseurl}Nvwt41EYsSFQ5YyQ8wBC/comments?item_id=${test}`
    const getToApi = await fetch(apiUrl,{
      method: 'GET'
    })
    const test2 = getToApi
    const likesArr = await test2.json()
   return likesArr
  }
  
  static getLikes = async()=> {
    const apiUrl = `${this.baseurl}Nvwt41EYsSFQ5YyQ8wBC/likes`
    const getToApi = await fetch(apiUrl,{
      method: 'GET'
    })
    const test = getToApi
    const likesArr = await test.json()
   return likesArr
  }
  static populateDom = async () => {
    let output = '';
    const mealsArr = await this.getFoodItems();
    const likes = await this.getLikes()
    mealsArr.forEach((element) => {
      likes.forEach(elementLikes => {
        if(element.idMeal === elementLikes.item_id){
          element.likesCount = elementLikes.likes
        }
      })
      output += `  <div class="dish_wrapper" id=${element.idMeal}>
              <div class="dish_image">
                  <img src="${element.strMealThumb}" alt="image"> 
              </div>
              <div class="dish_name">
                  <h2>${element.strMeal}</h2>
                  <i class="fa-regular fa-heart"></i>
              </div>
              <div class="likes">
                  <h4>${element.likesCount}</h4>
              </div>
              <button class="commentBtn" id="commentBtn">comments</button>
           </div>`;
    });
    return output;
  };
  
  static fillDom = async () => {
    this.mealContainer.innerHTML = await this.populateDom();
  };
  
  
  
  
  static addComment = (funct)=>{
   
  }
  }