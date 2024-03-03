// components/ActivityList.js
"use client";
import React from 'react';


const activitiesList = [
  { id: 1, name: 'Running', duration: '30 minutes', description: 'Go for a run around the park.' },
  { id: 2, name: 'Cycling', duration: '45 minutes', description: 'Enjoy a bike ride along your favorite route.' },
  { id: 3, name: 'Yoga', duration: '1 hour', description: 'Relax and stretch with a calming yoga session.' },
  { id: 4, name: 'Strength Training', duration: '45 minutes', description: 'Hit the gym for a full-body strength workout.' },
  { id: 5, name: 'Swimming', duration: '1 hour', description: 'Take a dip in the pool and swim some laps.' }
];

const ActivityList = ({ onActivitySelect }) => {
  const handleActivitySelect = (activity) => {
    if (onActivitySelect) {
      onActivitySelect(activity);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Choose an Activity</h2>
      <ul className="divide-y divide-gray-200">
        {activitiesList.map(activity => (
          <li key={activity.id} className="py-4 cursor-pointer hover:bg-blue-900" onClick={() => handleActivitySelect(activity)}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{activity.name}</h3>
              <p className="text-gray-200">{activity.duration}</p>
            </div>
            <p className="text-gray-400">{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;


