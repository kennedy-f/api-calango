// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';



export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    price : {
      type : DataTypes.DOUBLE,
      allowNull: false
    },
    category : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    categories : {
      type:DataTypes.JSON,
      allowNull: false
    },
    shopId : {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: 'shop',
        key : 'id'
      }
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (products as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    models.products.hasMany(models.product_images);
  };

  return products;
}
