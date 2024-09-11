import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;  // Current progress (calories burned)
    this.goal = 1000;   // Fitness goal (total calories to burn)
  }

  addExercise(exercise) {
    // Update the progress with calories burned from the exercise
    this.progress += exercise.caloriesBurned;
    console.log(`${exercise.name} added. Calories burned: ${exercise.caloriesBurned}`);
    console.log(`Total progress: ${this.progress} / ${this.goal}`);

    // Emit the 'goalReached' event if the goal is reached or exceeded
    if (this.progress >= this.goal) {
      this.emit("goalReached");
    }
  }
}

const Solution = () => {
  // Create an instance of the FitnessTracker class
  const tracker = new FitnessTracker();

  // Set up a listener for the 'goalReached' event
  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal!");
  });

  // Simulate adding exercises
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
