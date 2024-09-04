describe('Inheritance', function () {
     class Repository {
          service: string;

          constructor(service: string) {
               this.service = service
          }

          getServiceName(): string {
               return this.service
          } 
     }

     class CategoryOnMarket extends Repository {
          category: string;

          constructor(service: string, category: string) {
               super(service);
               this.category = category;
          }

          getIfValidateCategoryName(): string {
               if (this.service == this.category) {
                    return this.category
               } else {
                    return "not Found"
               }
          }
     }

     class Shipping extends CategoryOnMarket {
          validateShippingOrder(): boolean {
               if (this.service === this.category) {
                    return true
               } else {
                    return false
               }
          }
     }

     it('should can get extend class', function () {
          const foodRepository = new Repository("food");

          const foodCategory = new CategoryOnMarket(foodRepository.getServiceName(), "food")

          const shippingProduct = new Shipping(foodRepository.service, foodCategory.category)

          expect(shippingProduct.validateShippingOrder()).toBe(true)

          console.info(shippingProduct.validateShippingOrder())
     });
});