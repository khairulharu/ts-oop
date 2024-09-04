describe('Inheritance', function () {
     class Repository {
          service: string;

          constructor(service: string) {
               this.service = service
          }

          getNameByUserId(id: number): string {
               return `We ${id} Found from ${this.service}`;
          } 
     }

     class Market extends Repository {
          getCategory(name: string): string {
               return `Your service ${this.service}, We Found this ${name} from Market`
          }
     }

     class Shipping extends Market {}

     it('should can get extend class', function () {

          const marketRepository: Market = new Market("Market");

          expect(marketRepository.getNameByUserId(3)).toBe("We 3 Found from Market");

          const shippingRepository: Shipping = new Market("Shipping");

          expect(shippingRepository.getNameByUserId(5)).toBe("We 5 Found from Shipping");

          console.info(marketRepository.service);
          console.info(marketRepository.getNameByUserId(4));

          console.info(shippingRepository.service);
          console.info(shippingRepository.getNameByUserId(7));

          console.info(shippingRepository.getCategory("shoe"));
     });
});