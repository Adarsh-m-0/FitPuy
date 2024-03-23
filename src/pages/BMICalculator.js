import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male'); // Default gender
  const [workoutLevel, setWorkoutLevel] = useState('sedentary'); // Default workout level
  const [bmiResult, setBmiResult] = useState(null); // State variable for BMI result
  const [bmrResult, setBmrResult] = useState(null); // State variable for BMR result
  const [calorieIntake, setCalorieIntake] = useState(null); // State variable for calorie intake result

  // Constants for calculation
  const BMR_CONST = gender === "male" ? 5 : -161;
  const WORKOUT_LEVEL_CONST = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extraActive: 1.9,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate BMI
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Calculate BMR
    const bmr = (BMR_CONST + 10 * weight + 6.25 * height - 5 * age).toFixed(2);

    // Calculate Calorie Intake
    const calorieIntake = (bmr * WORKOUT_LEVEL_CONST[workoutLevel]).toFixed(2);

    // Update state with calculated values
    setBmiResult(bmi);
    setBmrResult(bmr);
    setCalorieIntake(calorieIntake);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Input Section */}
        <div className="col-md-5 main_box">
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="ageInput" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ageInput"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="heightInput" className="form-label">
                  Height (cm)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="heightInput"
                  placeholder="Enter your height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weightInput" className="form-label">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weightInput"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genderInput" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="genderInput"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="workoutLevelInput" className="form-label">
                  Workout Level
                </label>
                <select
                  className="form-select"
                  id="workoutLevelInput"
                  value={workoutLevel}
                  onChange={(e) => setWorkoutLevel(e.target.value)}
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="lightlyActive">Lightly Active</option>
                  <option value="moderatelyActive">Moderately Active</option>
                  <option value="veryActive">Very Active</option>
                  <option value="extraActive">Extra Active</option>
                </select>
              </div>
              <button type="submit" className="btn btn-outline-dark">
                Calculate
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-1"></div>

        {/* Result Section */}
        <div className="col-md-6 main_box">
          <div className="result-box">
            <div id="result">
              <p>
                <strong>BMI:</strong> <span id="bmiResult">{bmiResult}</span>
              </p>
              <p>
                <strong>BMR:</strong>{" "}
                <span id="bmrResult">{bmrResult} kcal/day</span>
              </p>
              <p>
                <strong>Calorie Intake:</strong>{" "}
                <span id="calorieIntake">{calorieIntake} kcal/day</span>
              </p>
              <p>
                <strong>Suggested Diet:</strong>
              </p>
              <ul>
                <li>
                  Focus on balanced meals with a mix of carbohydrates, proteins,
                  and healthy fats.
                </li>
                <li>
                  Incorporate plenty of fruits and vegetables for essential
                  vitamins and minerals.
                </li>
                <li>
                  Include lean protein sources such as chicken, fish, tofu, or
                  legumes in every meal.
                </li>
                <li>
                  Avoid processed foods, sugary drinks, and excessive amounts of
                  added sugars.
                </li>
                <li>
                  Drink plenty of water throughout the day to stay hydrated.
                </li>
                <li>
                  Consider consulting a nutritionist for personalized dietary
                  recommendations.
                </li>
              </ul>
              <p>
                <strong>Additional Recommendations:</strong>
              </p>
              <ul>
                <li>
                  Regular exercise is essential for overall health and fitness.
                </li>
                <li>
                  Get enough sleep each night to support recovery and muscle
                  growth.
                </li>
                <li>
                  Monitor your progress and adjust your diet and exercise
                  routine as needed.
                </li>
                <li>
                  Stay consistent with your healthy habits for long-term
                  success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
