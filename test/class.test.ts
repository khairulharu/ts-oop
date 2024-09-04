describe('Class', function () {

     class Senjata {
          constructor() {
               console.info("tembak brooo");
          }
     }

     class Mandi {
          constructor() {
               console.info("saya sudah mandi");
          }
     }

     it('should can create class', function () {

          const alok: Mandi = new Mandi();

          const emFor = new Senjata();
     });

     it('should can create constructor', function () {
          new Senjata();
          new Senjata();
          new Mandi();
     });
})