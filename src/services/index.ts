import { Application } from '../declarations';
import clients from './clients/clients.service';
import products from './products/products.service';
import shop from './shop/shop.service';
import users from './users/users.service';
import productImages from './product-images/product-images.service';
import categories from './categories/categories.service';
import productCategory from './product-category/product-category.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(clients);
  app.configure(products);
  app.configure(shop);
  app.configure(users);
  app.configure(productImages);
  app.configure(categories);
  app.configure(productCategory);
}
