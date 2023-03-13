import './style.css';
// popup-window
const popupWindow = document.querySelector('#popup-window');
popupWindow.innerHTML = `<div class="x">
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
</ul><h4>Comments (<span id="number-of-comments">

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
</section>`;