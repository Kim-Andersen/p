import { DataTypes } from 'sequelize/types';

export interface CustomGeometryDataType extends DataTypes.GeometryDataType {
  coordinates: number[];
}
