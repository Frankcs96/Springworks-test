import waypoints from '../data/waypoints.json';
import { Waypoint } from '@/domain/Waypoint';
import { isSpeeding } from './helper';

export const data: Waypoint[] = waypoints;


export function calculateDistanceSpeeding(data: Waypoint[]): number {
  let distanceSpeeding = 0;

  data.reduce((pre, curr) => {
    const timeBetweenWaypoints = (new Date(curr.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
    if (isSpeeding(curr.speed , curr.speed_limit)) {
      distanceSpeeding += curr.speed * timeBetweenWaypoints;
    }
    return curr;
  });
  return distanceSpeeding;
}


export function calculateDurationSpeeding(data: Waypoint[]): number {
  let durationSpeeding = 0;
  data.reduce((pre, curr) => {
    if (isSpeeding(curr.speed, curr.speed_limit)) {
      durationSpeeding += (new Date(curr.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
    }

    return curr;
  });

  return durationSpeeding;
}

export function calculateTotalDistance(data: Waypoint[]): number {
  let totalDistance = 0;
  data.reduce((pre, curr) => {
    const timeBetweenWaypoints = (new Date(curr.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
    totalDistance += timeBetweenWaypoints * curr.speed;
    return curr;
  });

  return totalDistance;
}


export function calculateTotalDrivingTime(data: Waypoint[]): number {
  let totalDrivingTime = 0;
  data.reduce((pre, curr) => {
    totalDrivingTime += (new Date(curr.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
    return curr;
  });

  return totalDrivingTime;
}
