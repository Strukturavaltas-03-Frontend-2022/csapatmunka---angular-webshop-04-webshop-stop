export class Product {
  [x:string]:any
  id: number = 0;
  catId: number = 0;
  name: string = '';
  author: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id || 0;
      this.catId = properties.catId || 0;
      this.name = properties.name || '';
      this.author = properties.author || '';
      this.description = properties.description || '';
      this.image = `/assets/images${properties.image}` || '';
      this.price = properties.price || 0;
      this.stock = properties.stock || 0;
      this.featured = properties.featured || false;
      this.active = properties.active || false;
    }
  }
}
