// Initializes the `productCategory` service on path `/product-category`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ProductCategory } from './product-category.class';
import createModel from '../../models/product-category.model';
import hooks from './product-category.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'product-category': ProductCategory & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product-category', new ProductCategory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product-category');

  service.hooks(hooks);
}
