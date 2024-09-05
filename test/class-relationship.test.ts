describe('RelationShip', function () {
     //tidak di sarankan digunakan

     class Person {
          constructor(public name: string) {

          }
     }

     class Customer {
          constructor(public name: string) {

          }
     }

     it('should support', function () {
          const person: Person = new Customer("halo");

          console.info(person.name);
     });
})