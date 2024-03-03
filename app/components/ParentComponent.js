// components/ParentComponent.js
"use client";


import { useState } from 'react';
import ActivityList from './ActivityList';
import recommendation from './recommendation';

const ParentComponent = () => {
  const [trackedActivities, setTrackedActivities] = useState([]);

  const trackActivity = (activity) => {
    setTrackedActivities([...trackedActivities, activity]);
  };

  const removeActivity = (index) => {
    const updatedActivities = [...trackedActivities];
    updatedActivities.splice(index, 1);
    setTrackedActivities(updatedActivities);
  };

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-4">Track Your Fitness Activities</h1> */}
      <ActivityList onActivitySelect={trackActivity} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Tracked Activities</h2>
        <ul>
          {trackedActivities.map((activity, index) => (
            <li key={index} className="flex items-center justify-between font-bold py-2 border-b">
              <span className='text-lg'>{activity.name}</span>
              <button onClick={() => removeActivity(index)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12"></div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Workout Recommendations</h2>
        <ul className="list-disc pl-5">
          {recommendation(trackedActivities).map((recommendation, index) => (
            <li key={index} className="text-yellow-200 text-xl mb-2">{recommendation}</li>
          ))}
        </ul>
      </div>
      <div className="mt-24"></div> 
    </div>
  );
};

export default ParentComponent;

