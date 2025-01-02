import {Coordinates} from '../types';

export interface DistanceCalculator {
  calculate(point1: Coordinates, point2: Coordinates): number;
}

export class HaversineDistanceCalculator implements DistanceCalculator {
  private readonly EARTH_RADIUS_KM = 6371;

  calculate(point1: Coordinates, point2: Coordinates): number {
    const lat1Rad = this.toRadians(parseFloat(point1.lat));
    const lon1Rad = this.toRadians(parseFloat(point1.lng));
    const lat2Rad = this.toRadians(parseFloat(point2.lat));
    const lon2Rad = this.toRadians(parseFloat(point2.lng));

    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.EARTH_RADIUS_KM * c;
  }

  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
