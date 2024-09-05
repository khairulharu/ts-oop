describe('Visibility', function () {

     class Counter {
          //private
          //semua atribut yang ada privatenya hanya 
          //bisa di aksek di dalam class nya sendrir
          //jika ingin mengakses di extended class nya
          //atau child classnya maka harus menggunakan protected



          // private counter: number = 0;


          //protected
          //bisa di akses di child classnya dan juga di classnya sednrir
          //jadi ketika terdapt incerement di extends classnya dia tetap bisa

          protected counter: number = 0;

          //jik sebuah method tidak di sebutkan
          //visibilutynya maka defaultnya adalah public
          increment(): void {
               this.counter++;
          }

          public getCounter(): number {
               return this.counter;
          }
     }

     class DoubleCounter extends Counter {

          increment(): void {
               this.counter += 2;
          }
     }

     it('should suppport private', function () {
          const counter = new Counter();

          counter.increment();
          counter.increment();
          console.info(counter.getCounter());
     });

     it('should can use protected', function () {

          const counterWithDoule = new DoubleCounter();

          counterWithDoule.increment();

          console.info(counterWithDoule.getCounter());
     });
});