// components/Recommendations.js
"use client";
import React from 'react';


const recommendation = (trackedActivities) => {
  const recommendations = [];

  // Sample recommendations based on tracked activities
  if (trackedActivities.some(activity => activity.name === 'Running')) {
    recommendations.push('Include some interval sprints in your next workout.');
  }
  if (trackedActivities.some(activity => activity.name === 'Cycling')) {
    recommendations.push('Try adding hill climbs to your cycling route for added intensity.');
  }
  if (trackedActivities.some(activity => activity.name === 'Yoga')) {
    recommendations.push('Consider incorporating some dynamic yoga flows for a more active practice.');
  }
  if (trackedActivities.some(activity => activity.name === 'Strength Training')) {
    recommendations.push('Focus on compound movements like squats,bench presses for full-body strength.');
  }
  if (trackedActivities.some(activity => activity.name === 'Swimming')) {
    recommendations.push('Try different strokes to target different muscle groups.');
  }

  return recommendations;
};

export default recommendation;
