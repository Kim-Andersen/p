import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { CustomGeometryDataType } from './types';

interface PlaceAttributes {
  id: number;
  ownerId: number;
  name: string;
  point: DataTypes.GeometryDataType;
}

type PlaceCreationAttributes = Optional<PlaceAttributes, 'id'>;

class Place extends Model<PlaceAttributes, PlaceCreationAttributes> implements PlaceAttributes {
  public id!: number;
  public ownerId!: number;
  public name!: string;
  public point!: CustomGeometryDataType;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize): void {
    Place.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        ownerId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false
        },
        point: {
          type: DataTypes.GEOMETRY('POINT'),
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'places'
      }
    );
  }
}

export default Place;
