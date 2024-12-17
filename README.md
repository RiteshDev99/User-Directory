Here is the updated **React Native User Directory App** documentation with the **four images** organized in a clean grid layout.

---

# React Native User Directory App

## Project Overview
This project is a React Native User Directory App, bootstrapped using the [React Native CLI](https://reactnative.dev/docs/environment-setup) with `npx react-native` commands. The CLI provides a streamlined approach to creating and managing React Native projects.

---

## Features
- **User List Screen**: Displays a list of users with their name and email.
- **User Details Screen**: Shows detailed information about a selected user.
- **Search Functionality**: Allows users to dynamically filter the user list by name.

---

## Screenshots

### App UI Screens

| **User List Screen**                                                                 | **User Search Filtering**                                                             |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <img width="401" alt="User List Screen" src="https://github.com/user-attachments/assets/0f4ae57e-1bc1-43b5-a5de-9359cd68d814" /> | <img width="401" alt="User List Filtering" src="https://github.com/user-attachments/assets/8c935efa-1b37-4695-b50c-2b31360de1c8" /> |

| **User Details Screen**                                                             | **User Data Loading**                                                           |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <img width="401" alt="User Details Screen" src="https://github.com/user-attachments/assets/2e2e43d4-ec86-42b3-8522-e0a20ddbd189" /> | <img width="401" alt="Search Bar Filtering" src="https://github.com/user-attachments/assets/6727264b-f325-4996-8f46-89a9e390c3f7" /> |

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- npm or yarn package manager
- [Android Studio](https://developer.android.com/studio) (for Android development)
- Xcode (for iOS development, macOS only)

---

### Project Setup
1. **Create a new project** or clone the repository:
   ```bash
   npx react-native init <ProjectName>
   cd <ProjectName>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

---

### Running the App

#### 1. Start the Metro Bundler
Metro is the JavaScript bundler used by React Native. Start it using one of the following commands:
```bash
npm start
# or
yarn start
```

#### 2. Launch the App

- **Android**:
   ```bash
   npx react-native run-android
   ```
   > Ensure that an Android emulator is running or a physical device is connected.

- **iOS** (macOS only):
   ```bash
   npx react-native run-ios
   ```
   > Ensure that Xcode is properly configured and an iOS simulator is running.

---

## Challenges Faced

### 1. Navigation Issues
- **Problem**: Initial navigation between screens was not smooth, with issues in passing data (props) correctly.
- **Solution**:
   - Reviewed the navigation logic.
   - Ensured structured and consistent data passing between screens.
   - This resulted in smoother transitions between the **User List** and **User Details** screens.

---

## App UI Overview

### 1. User List Screen
- Displays a list of users showing their name and email.
- Includes a search bar to dynamically filter the list by name.
- Tapping on a user navigates to the **User Details Screen**.

### 2. Filtering Functionality
- Type in the search bar to filter users by name.
- The list updates dynamically, showing only matching users, enhancing usability for large datasets.

### 3. User Details Screen
- Displays in-depth information about a selected user.
- Accessed by tapping on a user in the **User List Screen**.

---

This version neatly organizes **all four images** into a **2x2 grid layout**, improving visual clarity and structure. Let me know if there’s anything else you’d like me to tweak! 🚀
