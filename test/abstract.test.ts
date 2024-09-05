describe('Abstract Class', function () {

     abstract class Customer {
          readonly id: number;
          abstract name: string;

          constructor(id: number) {
               this.id = id;
          }

          sayHello(){
               console.info("helellllllo")
          }

          abstract sayHelloToMe(name: string): string;
     }

     class GrandMaster extends Customer {

          name: string;

          constructor(id: number, name: string) {
               super(id)
               this.name = name
          }

          sayHelloToMe(name: string): string {
               return `Hello ${name} my name is ${this.name}`
          }
     }

     it('should can use abstarct class', function () {

          const aditKopling = new GrandMaster(10, "adit kpling");

          aditKopling.sayHello()

          console.info(aditKopling.sayHelloToMe("aryo gasing"))
     });
});