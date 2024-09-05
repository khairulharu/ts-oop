describe('Polymorphism', function () {


     class Employee {
          constructor(public name: string) {
          }
     }

     
     class Manager extends Employee {
          
     }
     
     class VicePresident extends Manager {
          
     }
     
     function sayHello(employee: Employee): void {
          if (employee instanceof VicePresident) {
               const vp = employee as VicePresident
               console.info(`Hello vp ${vp.name}`);
          } else if (employee instanceof Manager) {
               const manager = employee as Manager
               console.info(`Hello manager ${manager.name}`)
          } else {
               console.info(`Hello employee ${employee.name}`);
          }
     }


     it('should support', function () {
          let employee: Employee = new Employee("Alok");
          console.info(employee);
          
          employee = new Manager("Alok");
          console.info(employee);

          employee = new VicePresident("Alok");
          console.info(employee);
     });

     it('should support parameter using polymorphism', function () {

          const alok: Manager = new Manager("alok");

          const layla: VicePresident = new VicePresident("layla");

          const gusion: Employee = new Employee("gusion");

          sayHello(alok);
          sayHello(layla);
          sayHello(gusion);
     });
});