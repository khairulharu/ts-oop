describe('Method Overriding', function () {

     class Service {
          validateRequest(name: string, id: number): string {
               return `Validate this ${name} Has benn unlocked for this ${id}`;
          }
     }

     class UserService extends Service {
          validateRequest(name: string, id: number): string {
               return `Validate this ${name} Has benn unlocked for this ${id} and another request`;
          }
     }

     it('Should Can Use Method Overrriding', function () {

          const shippingService = new Service();
          const userService = new UserService();

          console.log(shippingService.validateRequest("asawd", 5))
          console.log(userService.validateRequest("aswad", 5))
     });
});