# WeChat Mini-Program Chat

WeChat Mini-Program Chat is an innovative WeChat mini-program that offers users a range of psychological and common sense tests, culminating in a shareable, image-based final report. This report can be shared across social media platforms, fostering a social and interactive user experience.

## Features

- **Interactive Tests**: Users can engage in a variety of tests, including psychological assessments and quizzes on common sense topics.
- **Social Media Integration**: Seamlessly share final reports and test results on popular social media platforms directly from the mini-program.
- **Personalized Reports**: Generate personalized, image-formatted reports summarizing test outcomes that are ready for sharing.
- **Single Page Application (SPA)**: Provides a fluid, app-like user experience without the need for page reloads.
- **User Authentication**: Secure login system to ensure user data privacy and personalization.

## Project Structure

The project is divided into two main directories:

- `cloudfunctions`: Contains serverless functions for backend operations like `changeName`, `incCount`, `login`, `qrcode`, and `updateUserInfo`.
- `miniprogram`: Hosts the client-side logic, UI components, and pages.

### Cloud Functions

- `changeName`: Handles user requests to update their display names.
- `incCount`: Manages the incrementation of user interaction counts, such as test attempts.
- `login`: Responsible for user authentication and session management.
- `qrcode`: Generates QR codes for sharing results on social media.
- `updateUserInfo`: Updates and maintains user profile information.

### Mini-Program Client

- `Components/canvas-share`: Renders the final report in a canvas element for sharing.
- `UI`: Contains the styling files for custom UI components.
- `pages`: Houses the individual pages of the SPA, including `home`, `result`, and `user` for user profiles.

## Getting Started

To run the WeChat Mini-Program Chat:

1. Clone the repository to your local environment.
2. Ensure you have the WeChat developer tools installed.
3. Open the project in the WeChat developer tools.
4. Install dependencies and run the program.

## Technologies Used

- **React Native**: Utilized for building a cross-platform mini-program experience.
- **Serverless Cloud Functions**: Offers a scalable backend without the need to manage servers.
- **Canvas API**: Used for generating the shareable image-based reports.
- **WeUI**: WeChat's official UI library for a consistent and native user interface feel.
- **AsyncStorage**: Implements local storage for user session management and data persistence.

## Contributing

Contributors are welcome to enhance the functionality and performance of the WeChat Mini-Program Chat. Please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository for more details.

## Acknowledgements

We express our gratitude to the WeChat Mini-Program development community and all the contributors who have made this project possible.
