describe('Method Overriding', function () {

     class Service {
          validateRequest(name: string, id: number): void {
               console.info(`Validate this ${name} Has benn unlocked for this ${id}`);
          }
     }

     class UserService extends Service {
          validateRequest(name: string, id: number): void {
             super.validateRequest(name, id);
             console.info("this method from another skayy");
          }
     }

     it('Should Can Use Method Overrriding', function () {

          const shippingService = new Service();
          const userService = new UserService();

          shippingService.validateRequest("aldo", 5);
          userService.validateRequest("manusi", 8);
     });
});