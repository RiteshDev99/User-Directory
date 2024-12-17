# React Native User Directory App

## Project Overview
This project is a React Native User Directory App, bootstrapped using the [React Native CLI](https://reactnative.dev/docs/environment-setup) with npx react-native commands. The CLI provides a streamlined approach to creating and managing React Native projects.

## Features
- User List Screen: Displays a list of users with their name and email.
- User Details Screen: Shows detailed information about a selected user.
- Search Functionality: Allows users to filter the user list dynamically by name.

## Screenshots
| User List Screen | User Details Screen |
|-----------------------|--------------------------|
| ![User List Screen](https://github.com/user-attachments/assets/5bb19162-bcf2-48d0-b174-0291ec7ec7cf) | ![User Details Screen](https://github.com/user-attachments/assets/b3cba4be-4dec-4d70-851d-265da147f4b7) |
| ![User List Filtering](https://github.com/user-attachments/assets/19c54cfb-9d52-4c7d-aa91-dcb96e49bef0) |

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- npm or yarn package manager
- [Android Studio](https://developer.android.com/studio) (for Android development)
- Xcode (for iOS development, macOS only)

### Project Setup
1. Create a new project or clone the repository:
      npx react-native init <ProjectName>
   cd <ProjectName>
   
2. Install dependencies:
      npm install
   # or
   yarn install
   

---

### Running the App

#### 1. Start the Metro Bundler
Metro is the JavaScript bundler used by React Native. Start it using one of the following commands:
      npm start
   # or
   yarn start
   

#### 2. Launch the App
- Android:
    npx react-native run-android
  
  > Ensure that an Android emulator is running or a physical device is connected.

- iOS: (macOS only)
    npx react-native run-ios
  
  > Ensure that Xcode is properly configured and an iOS simulator is running.

---

## Challenges Faced

### 1. Navigation Issues
- Problem: Initial navigation between screens was not smooth, with issues in passing data (props) correctly.
- Solution:
  - Reviewed the navigation logic.
  - Ensured structured and consistent data passing between screens.
  - This resulted in smoother transitions between the User List and User Details screens.

---

## App UI Overview

### 1. User List Screen
- Displays a list of users showing their name and email.
- Includes a search bar to filter the list by name dynamically.
- Tapping on a user navigates to the User Details Screen.

### 2. Filtering Functionality
- Type in the search bar to filter users by name.
- The list updates dynamically, showing only matching users, enhancing usability for large datasets.

### 3. User Details Screen
- Displays in-depth information about a selected user.
- Accessed by tapping on a user in the User List Screen.
