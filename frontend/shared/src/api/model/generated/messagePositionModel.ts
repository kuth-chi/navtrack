/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Navtrack.Api
 * OpenAPI spec version: 1.0.0
 */
import type { LatLongModel } from "./latLongModel";

export interface MessagePositionModel {
  altitude?: number;
  coordinates: LatLongModel;
  date: string;
  hdop?: number;
  heading?: number;
  pdop?: number | null;
  satellites?: number;
  speed?: number;
  valid?: boolean;
}
