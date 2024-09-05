describe('Static Class', function () {

     class DatabaseConfiguration {
          static DB: string = "mysql";
          static DB_HOST: string = "localhost";
          static DB_PORT: number = 3306;
          static DB_USERNAME: string = "root";
          static DB_PASSWORD: string = "root"
          static DB_NAME: string = "tslook";
     }

     class MathUtil {
          
          static sum(...values: number[]): number {
               let total = 0;

               for (const value of values) {
                    total += value;
               }

               return total;
          }
     }

     it('should can support static method', function () {

          console.info(DatabaseConfiguration.DB);
          console.info(DatabaseConfiguration.DB_HOST);
          console.info(DatabaseConfiguration.DB_PORT)
          console.info(DatabaseConfiguration.DB_USERNAME);
          console.info(DatabaseConfiguration.DB_PASSWORD);
          console.info(DatabaseConfiguration.DB_NAME);
     });

     it('should support static function', function () {
          console.info(MathUtil.sum(0, 1, 2, 3))
     });
});