describe('InstanceOf', function () {
     class Employee {}

     class Manager {}


     const budi = new Employee();

     const riki = new Manager();

     it('should have problem using typeof', function () {
          console.info(typeof budi)
          console.info(typeof riki)
     });

     it('should suport instanceof', function () {
          expect(budi instanceof Manager).toBe(false)
          expect(budi instanceof Employee).toBe(true)

          expect(riki instanceof Employee).toBe(false)
          expect(riki instanceof Manager).toBe(true)
     });

});