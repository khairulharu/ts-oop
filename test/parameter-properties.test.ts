describe('Parameter Properties', function () {
     class Person {
          constructor(public name: string) {}
     }

     it('should support properties parameter', function () {
          const person = new Person("Aswad");

          console.info(person.name)
     });
});