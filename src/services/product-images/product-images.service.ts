// Initializes the `productImages` service on path `/product-images`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ProductImages } from './product-images.class';
import createModel from '../../models/product-images.model';
import hooks from './product-images.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'product-images': ProductImages & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product-images', new ProductImages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product-images');

  service.hooks(hooks);
}
