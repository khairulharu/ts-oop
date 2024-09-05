describe('InstanceOf', function () {
     it('should have problem using typeof', function () {
          class Employee {}
     
          class Manager {}

          const budi = new Employee();

          const riki = new Manager();

          console.info(budi instanceof Employee)
          console.info(riki instanceof Manager)
     });


});