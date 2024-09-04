describe('Getter and Setter', function () {

     class Tembak {
          _peluru?: string;

          get peluru(): string {
               if (this._peluru) {
                    return this._peluru;
               }else{
                    return "sudah habis";
               }
          }

          set peluru(value: string) {
               if (this._peluru !== "") {
                    this._peluru = value;
               }
          }


          //seharusnya untuk set sebuah data dalam di typesxipt itu harus menggunakan getter dan setter
          //boleh juga menggunakan function tapi alangkah baiknya kita nikmati fitur bawaan
          setPeluruAda(value: string): void {
               this._peluru = value
          }
          
     }
     it('should support getter and setter', function () {

          const pistol = new Tembak();

          pistol.setPeluruAda("terdapat")

          console.info(pistol);

          console.info(pistol.peluru);

          pistol.peluru = "ada isinya";
          
          console.info(pistol.peluru)
     });
});