describe('Super Constructor', function () {
     class Person {
          name: string;

          constructor(name: string) {
               this.name = name;
          }
     }

     class Employee extends Person {
          departement: string;

          constructor(name: string, departement: string) {
               super(name);
               this.departement = departement;
          }
     }

     it('should support super constructor', function () {

          const alok: Person = new Person("alok");
          
          console.info(alok.name);

          const layla: Employee = new Employee("layla", "constrctor");

          console.info(layla.name);
          console.info(layla.departement);
     });
});