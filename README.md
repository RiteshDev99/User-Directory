### Project Setup
The project is bootstrapped using the @react-native-community/cli, which provides a command-line interface to streamline the creation and management of React Native projects.

### Steps for Getting Started

 ## Start Metro Bundler:
You first start Metro, the bundler that compiles your JavaScript code for React Native. This is done by running npm start or yarn start from the root directory.

## Running the App:
After Metro is running, you open a new terminal and use the npm run android or yarn android command to launch the app on an Android emulator or physical device.
Similarly, to run the app on iOS, the npm run ios or yarn ios command is used.
Challenges Faced

## Navigation Issues: You encountered difficulties with smooth navigation between screens, especially in passing data (props) correctly between the screens. After troubleshooting, you realized the data passing logic needed to be reworked for the navigation to function as expected. This is a common challenge in React Native development and can be addressed by ensuring that data is passed and accessed in a structured manner across screens.
User Directory App UI Overview

## User List Screen:
This is the main screen displaying a list of users, showing their name and email. Each user is clickable, and tapping on a user navigates to a more detailed view of that user. This screen also includes a search bar that allows users to filter the list by name, providing an efficient way to find a specific user.

Filtering Functionality:
The app includes a filtering feature where users can search the list of users by typing in a name. The displayed list dynamically updates to show only those users whose names match the search query. This feature makes it easier to navigate through a large list of users.

Screenshots:
The attached screenshots show the User List Screen and User Details Screen, giving a glimpse into the user interface:

User List Screen: Displays a list of users with a search bar for filtering results.
User Details Screen: Shows in-depth information for the selected user.

Challenges Faced
One of the key challenges faced during development was ensuring smooth navigation between screens. Initially, there were issues with data passing between screens, which caused navigation problems. However, after troubleshooting, it was found that adjusting the way data was passed and accessed resolved these issues, leading to smoother navigation between the user list and user details screens.
<img width="414" alt="Screenshot 2024-12-16 at 5 21 58 PM" src="https://github.com/user-attachments/assets/5bb19162-bcf2-48d0-b174-0291ec7ec7cf" />

<img width="414" alt="Screenshot 2024-12-16 at 5 22 06 PM" src="https://github.com/user-attachments/assets/b3cba4be-4dec-4d70-851d-265da147f4b7" />

<img width="414" alt="Screenshot 2024-12-16 at 5 22 16 PM" src="https://github.com/user-attachments/assets/19c54cfb-9d52-4c7d-aa91-dcb96e49bef0" />

