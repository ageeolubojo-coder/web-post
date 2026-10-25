
/* 1. Get the HTML elements */
let postCounter = 0;
const newPostBtn = document.getElementById("new-post-btn");
const postForm = document.getElementById("post-form");
const createPostForm = document.getElementById("create-post-form");
const cancelBtn = document.getElementById("cancel-btn");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const postsList = document.getElementById("posts-list");

/* 2. Open the form when New Post is clicked */
newPostBtn.addEventListener("click", function () {
  postForm.hidden = false;
});

/* 3. Close the form when Cancel is clicked */
cancelBtn.addEventListener("click", function () {
  postForm.hidden = true;
  createPostForm.reset();
});

/* 4. Publish a new post */
createPostForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = postTitle.value.trim();
  const body = postBody.value.trim();

  if (title === "" || body === "") {
    return;
  }

  
  /* Create the post container */
  const post = document.createElement("article");
  post.classList.add("post");

  // Create post metadata
  const metadata = document.createElement("div");
  metadata.classList.add("post-metadata");

 // User ID
postCounter++;

const userId = document.createElement("span");
userId.textContent = `User ID: user_${String(postCounter).padStart(3, "0")}`;

  // Publication time
  const timeElement = document.createElement("span");
  const publishedAt = new Date();

  timeElement.textContent = "Just now";
  timeElement.classList.add("post-time");
  timeElement.dataset.publishedAt = publishedAt.toISOString();

  // Calendar icon and time
  const timeLabel = document.createElement("span");
  timeLabel.classList.add("time-label");
  timeLabel.textContent = "📅 ";

  // Assemble metadata
  metadata.appendChild(userId);
  timeLabel.appendChild(timeElement);
  metadata.appendChild(timeLabel);

  // Add metadata to the post
  post.appendChild(metadata);



  /* Create the post title */
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  /* Create the post body */
  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  /* Add the title and body to the post */
  post.appendChild(titleElement);
  post.appendChild(bodyElement);

  /* Remove the empty message */
  if (postsList.textContent.trim() === "No posts yet.") {
    postsList.textContent = "";
  }

  /* Display the post */
  postsList.prepend(post);

  /* Clear and close the form */
  createPostForm.reset();
  postForm.hidden = true;
});
