export interface Waypoint {
  timestamp: string;
  position: Position
  speed: number
  speed_limit: number
}


interface Position {
  latitude: number
  longitude: number
}
