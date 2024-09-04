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

     class UserRepository {
          serviceName: string;

          constructor(serviceName: string) {
               this.serviceName = serviceName
          }
     }

     class CategoryRepository extends UserRepository {
          categoryName: string;

          constructor(serviceName: string, categoryName: string) {
               super(serviceName)
               this.categoryName = categoryName;
          }
     }

     it('should support super constructor', function () {

          const alok: Person = new Person("alok");
          
          console.info(alok.name);

          const layla: Employee = new Employee("layla", "constrctor");

          console.info(layla.name);
          console.info(layla.departement);


          const foodReposiory: UserRepository = new UserRepository("food");

          const shippingRepository: CategoryRepository = new CategoryRepository("shipping", "food" );

          console.info(shippingRepository.categoryName)
          console.info(shippingRepository.serviceName)
          console.info(foodReposiory.serviceName)
     });
});