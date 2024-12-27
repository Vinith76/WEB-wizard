// JavaScript for handling comments
function addComment(event) {
    event.preventDefault(); // Prevent form submission
  
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");
  
    // Create a new comment element
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerHTML = <p>${commentInput.value}</p>;
  
    // Append the comment to the list
    commentsList.appendChild(comment);
  
    // Clear the textarea
    commentInput.value = "";
  }