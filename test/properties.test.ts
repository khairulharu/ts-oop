describe('Properties', function () {

     class Senjata {
          readonly id: number;
          name: string;
          magazine: string;
          safetyOn?: boolean = false;

          constructor(id: number, name: string, magazine: string) {
               this.id = id;
               this.name = name;
               this.magazine = magazine;
          }

          info(name: string): void {
               console.info(`info Untuk ${name} Ini adalah Senjata ${this.name} dengan id ${this.id} dengan kapasitas magazine; ${this.magazine} dan fitur Safety on nya ${this.safetyOn ? 'ada': 'tidak punya'}`);
          }
     };

     it('should can have properties', function () {

          const Emfor = new Senjata(2345, 'emforSixtenn', "12");
          Emfor.info("khairul")
          Emfor.safetyOn = true;
          Emfor.info("aswad")
     });
})