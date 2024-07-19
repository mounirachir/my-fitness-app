const workoutPlans = [
  {
    name: "muscle/home/short",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Nordic Curls",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "Bodyweight",
      },
    ],
  },
  {
    name: "muscle/home/normal",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      {
        name: "Pike Push-Ups",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Squats",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Nordic Curls",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "muscle/gym/short",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldowns",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      { name: "Squats", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      { name: "Deadlifts", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
    ],
  },
  {
    name: "muscle/gym/normal",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldowns",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      { name: "Squats", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      { name: "Deadlifts", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Light",
      },
      {
        name: "Bicep Curls",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Moderate",
      },
      {
        name: "Tricep Extensions",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Moderate",
      },
      { name: "Leg Curls", sets: 3, reps: 12, rest: "60s", weight: "70% 1RM" },
    ],
  },
  {
    name: "fat/home/short",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "fat/home/normal",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Pike Push-Ups",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Squats",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "fat/gym/short",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldowns",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "fat/gym/normal",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldowns",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Squats",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "both/home/short",
    exercises: [
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Nordic Curls",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "both/home/normal",
    exercises: [
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      {
        name: "Push-Ups",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Pike Push-Ups",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "both/gym/short",
    exercises: [
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      { name: "Squats", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      { name: "Deadlifts", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
    ],
  },
  {
    name: "both/gym/normal",
    exercises: [
      { name: "Dips", sets: 3, reps: 10, rest: "60s", weight: "Bodyweight" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 10,
        rest: "90s",
        weight: "70% 1RM",
      },
      { name: "Squats", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      { name: "Deadlifts", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      { name: "Burpees", sets: 3, reps: 12, rest: "60s", weight: "Bodyweight" },
    ],
  },
  {
    name: "muscle/hybrid/short",
    exercises: [
      { name: "Dips", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      { name: "Pull-Ups", sets: 3, reps: 8, rest: "60s", weight: "Bodyweight" },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Squats",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Deadlifts",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
    ],
  },
  {
    name: "muscle/hybrid/normal",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 8, rest: "90s", weight: "70% 1RM" },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Pull-Ups",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Bent Over Rows",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Squats",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Deadlifts",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Bicep Curls",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Moderate",
      },
      {
        name: "Tricep Extensions",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Moderate",
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 15,
        rest: "30s",
        weight: "Light",
      },
    ],
  },
  {
    name: "fat/hybrid/short",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "Bodyweight",
      },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldown",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Burpees",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
    ],
  },
  {
    name: "fat/hybrid/normal",
    exercises: [
      {
        name: "Push-Ups",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "Bodyweight",
      },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Lat Pulldown",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jumping Lunges",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Burpees",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Jump Rope",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Leg Curls",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
    ],
  },
  {
    name: "both/hybrid/short",
    exercises: [
      {
        name: "Bench Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Pull-Ups",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Squats",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Burpees",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
    ],
  },
  {
    name: "both/hybrid/normal",
    exercises: [
      {
        name: "Bench Press",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Shoulder Press",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Pull-Ups",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Inverted Rows",
        sets: 3,
        reps: 15,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Squats",
        sets: 3,
        reps: 8,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Leg Curls",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "70% 1RM",
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 10,
        rest: "60s",
        weight: "Bodyweight",
      },
      {
        name: "Deadlifts",
        sets: 3,
        reps: 8,
        rest: "90s",
        weight: "70% 1RM",
      },
      {
        name: "Shadow Boxing",
        sets: 3,
        reps: "60s",
        rest: "30s",
        weight: "Bodyweight",
      },
      {
        name: "Burpees",
        sets: 3,
        reps: 12,
        rest: "60s",
        weight: "Bodyweight",
      },
    ],
  },
];
export default workoutPlans;
