describe('Error', function () {
     
     class ValidationError extends Error {
          constructor(public message: string) {
               super(message)
          }
     }

     function doubleIt(value: number): number {
          if (value < 5 ) {
               throw new ValidationError("error in number out of validatiom");
          }

          return value * 2;
     }

     it('should support error catch', function () {
          try {
               const result = doubleIt(3)
               console.info(result)
          } catch (error) {
               if (error instanceof ValidationError) {
                    console.info(error.message)
               }
          }
     });
});