# Firebase Web Codelab - Start code
This is a chat application built using Firebase. It allows users to communicate with each other in real-time using Firebase's real-time database and authentication features.

https://friendlychat-79704.firebaseapp.com/



https://github.com/shagunZ/FriendlyChatfirebase/assets/100477248/c6cf2d9a-902b-42f6-89a4-ce53de121679


# Features
-Real-time messaging: Users can send and receive messages in real-time. \
-User authentication: Users can sign up and log in to the chat app securely using Firebase Authentication. \
-Message history: Chat history is stored in the Firebase real-time database, allowing users to view previous messages when they log in.

# Installation
Clone this repository to your local machine or download the source code as a ZIP file.
Open the project directory in your preferred text editor or IDE.


# Firebase Configuration
To use Firebase in your project, you need to configure it with your Firebase project credentials. Follow these steps:

-Go to the Firebase Console and create a new project (if you haven't already). \
-In the Firebase console, click on the "Add app" button and select the web platform (</>). \
-Provide a nickname for your app (e.g., "Chat App") and register it. \
-Firebase will generate a configuration object. Copy the configuration code snippet. \
-Open the index.html file in your project and replace the existing Firebase SDK script tags with the ones provided in your Firebase configuration. \


```
<!-- Replace with your Firebase configuration -->
<script>
  var firebaseConfig = {
    // Your Firebase configuration object
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

This folder contains the starting code for the [Firebase: Build a Real Time Web Chat App Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/).
If you'd like to jump directly to the end and see the finished code head to the [web](../web) directory.


