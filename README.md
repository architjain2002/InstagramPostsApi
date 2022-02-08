# Introduction to Instagram Posts Api
Through this project I built the API for the instagram posting system. 

This a backend project meant which provides some routes to different functionality to the postinf system of instagram.

# Routes to utilize in your own application
http://127.0.0.1:3001/instPosts/findPostDetails

- This route will help you to get all the posts on instagram of all users. This is basically a GET request.

http://127.0.0.1:3001/instPosts/insertPostDetails

- This route will help you to store new data of your instagram posts on instagram. This is basically a POST request.
- ``` JSON
  {
  "InstId": "MrX",
  "ProfilePhotoUrl": "profile Photo url(http://example.com)",
  "PostDescription": "coding...",
  "PostPhotoUrl":"post Photo url(http://example.com)",
  "Location": "home",
  "PostDate": "2022-2-07"
  }
  ```

http://127.0.0.1:3001/instPosts/deletePostDetails

- This route will help you to delete data of existing instagram posts of a user on instagram. This is basically a POST request.
- ``` JSON
  {
  "InstId": "MrX",
  "PostPhotoUrl":"post Photo url(http://example.com)"
  }
  ```
  
http://127.0.0.1:3001/instPosts/insertCommentDetails

- This route will help you to store comments onto the instagram posts. This is basically a POST request.    
- ``` JSON
  {
  "InstId": "MrX",
  "PostPhotoUrl":"post Photo url(http://example.com)",
  "CommentInstId": "Mr Y",
  "CommentText": "As usual coding at home..",
  "CommentToId": "MrX"
  }
  ```

http://127.0.0.1:3001/instPosts/addNewLike

- This route will help you to know the number of likes to an instagram posts and will add new like when a user likes a post This is basically a POST request. 
- ``` JSON
  {
  "InstId": "MrX",
  "PostPhotoUrl":"post Photo url(http://example.com)"
  }
  ```

http://127.0.0.1:3001/instPosts/removeNewLike

- This route will help you to know the number of likes to an instagram posts and will remove a like when a user unlikes a liked post This is basically a POST request.
- ``` JSON
   {
  "InstId": "MrX",
  "PostPhotoUrl":"post Photo url(http://example.com)"
  }
  ```