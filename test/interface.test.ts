describe('Interface', function () {
     interface HasName {
          name: string;
     }

     interface CanSayHello {
          sayHello(name: string): void;
     }

     class Person implements HasName, CanSayHello {
          name: string;

          constructor (name: string) {
               this.name = name
          }

          sayHello(name: string): void {
               console.info(`Hallo ${name}, my Name is ${this.name}`)
          }
     }

     it('should can implements another interface', function () {

          const haru: Person = new Person("haru");

          console.info(haru.name);

          haru.sayHello("kylian")
     });
});