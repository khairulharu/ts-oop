describe('Polymorphism', function () {


     class Employee {
          constructor(public name: string) {
          }
     }

     
     class Manager extends Employee {
          
     }
     
     class VicePresident extends Manager {
          
     }

     //ini adalah contoh casting data yang salah
     function sayHelloWrong(employee: Employee): void {
          if (employee instanceof Manager) {
               const manager = employee as Manager
               console.info(`Hello wrong manager ${manager.name}`);
          } else if (employee instanceof VicePresident) {
               const vp = employee as VicePresident
               console.info(`Hello wrong vp ${vp.name}`)
          } else {
               console.info(`Hello wrong employee ${employee.name}`);
          }
     }

     //Harus di ingat jika ingin casting data ke tipe data lain
     //pengecekannya itu harus di mulai dari bawah
     //karena kalau tidak dia akan salah cek
     //dikarenaknakan ada sebuah tipe misalknan vice precident di cek
     //sebgaia instance of mnagaer itu true
     //karena vicePresident itu extends atau menggunakan
     //class managaer jadi dia di anggap true


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

     it('should wrong using parameter', function () {
          sayHelloWrong(new VicePresident("jiluan"))
          sayHelloWrong(new Manager("alok gaming"))
          sayHelloWrong(new Employee("alok jumshot"))
     });
});