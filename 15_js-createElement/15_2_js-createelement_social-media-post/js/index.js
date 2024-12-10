console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// New Post
const newPost = document.createElement("article");
newPost.classList.add("post");

document.body.append(newPost);

// New Post_ Content
const newPostContent = document.createElement("p");
newPostContent.textContent = "Ich bin ein neuer Post. Juhuuu!";
newPostContent.classList.add("post__content");

newPost.append(newPostContent);

// New Post_ Footer
const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

newPost.append(newPostFooter);

// New Post_ Footer_ User Name
const newUserName = document.createElement("span");
newUserName.textContent = "@denoers";
newUserName.classList.add("post__username");

newPostFooter.append(newUserName);

// New Post_ Footer_ Like Button
const newLikeButton = document.createElement("button");
newLikeButton.addEventListener("click", handleLikeButtonClick);
newLikeButton.textContent = " ♥ Like";

newLikeButton.classList.add("post__button"); // set class
newLikeButton.setAttribute("type", "button"); // set attribute "type"
newLikeButton.setAttribute("data-js", "like-button"); // set attribute "data-js"

newPostFooter.append(newLikeButton);
