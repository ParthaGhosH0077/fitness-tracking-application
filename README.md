# fitness-tracking-application
Overview
This is a simple fitness tracking application that helps users track their exercise progress, including calories burned. When a user reaches their fitness goal, an event is emitted, and the application sends a congratulatory message. This project demonstrates progress tracking, event emission, and handling user notifications based on goals.

Features
Add Exercise: Track the calories burned through various exercises.
Event Emission: Emits a goalReached event when the user's total calories burned reaches or exceeds their fitness goal.
Congratulatory Message: Sends a congratulatory message when the user hits their fitness goal.
Project Structure
index.js: The main file that contains the FitnessTracker class and a Solution function to simulate the addition of exercises and handle the goal tracking.
How It Works
Track Progress: Users can log exercises along with the calories burned, and the app will update the user's progress toward a fitness goal.
Emit Events: When the user’s progress reaches or exceeds the fitness goal, the app emits a goalReached event.
Send Notifications: Upon reaching the goal, a listener sends a congratulatory message.
Installation
Clone the repository:

bash
git clone https://github.com/your-repo/fitness-tracking-app.git
cd fitness-tracking-app
Install the necessary dependencies:

bash

npm install
Usage
Run the application:

bash

node index.js
The program will simulate adding two exercises (Running and Weightlifting), update the progress, and send a congratulatory message when the goal is reached.

Code Explanation
FitnessTracker Class
progress: Tracks the number of calories burned.
goal: Represents the target number of calories to be burned.
addExercise(exercise): Takes an exercise object (name and calories burned), updates the total calories burned, and checks if the goal is reached. If the goal is reached, the goalReached event is emitted.
Event Listener
A listener is set up to listen for the goalReached event and prints a congratulatory message when the event is triggered.

Example Output


Running added. Calories burned: 500
Total progress: 500 / 1000
Weightlifting added. Calories burned: 600
Total progress: 1100 / 1000
Congratulations! You have reached your fitness goal!
License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Please submit a pull request or open an issue to contribute.

