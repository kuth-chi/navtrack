/*
 * Generated by orval v5.5.10 🍺
 * Do not edit manually.
 * Navtrack.Api
 * OpenAPI spec version: 1.0
 */
import type { ProtocolModel } from './protocolModel';

export interface DeviceTypeModel {
  id: string;
  manufacturer: string;
  model: string;
  readonly displayName: string;
  protocol: ProtocolModel;
}
