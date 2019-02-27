# Arsenal "Twitter" Backend

## Description
This is the back end repository fullstack web application that I'm calling Arsenal "Twitter". The app mimics Twitter or Reddit, and is specifically geared towards fans of the London-based soccer team, Arsenal. Users can log in/sign up and create posts. Posts are displayed on the homepage where users can upvote or downvote posts.

## Technology Used
Back end tech:
- Node.js
- Express
- Mongoose
- MongoDB
- Passport
- JWTs

## Issues/Plans for the Future
Issue: Currently the app is not very secure. Passwords are not encrypted in the database, so it is not recommended to use a password that you use anywhere else.
Plan: Utilize bcrypt to encrypt the passwords before storing them in the database.

Issue: Only the correct user is able to delete a post, but the 'delete' button displays on the webpage, regardless of whether the current user matches the author of the post.
Plan: Impliment logic to hide the 'delete' button unless the correct user is logged in.

Issue: Users can upvote and downvote their own posts.
Plan: Impliment logic to hide the 'upvote' and 'downvote' buttons if the current user is the author of the post.