import { MathUtil, Response } from "../src/mathUtil";

describe('Namespace', function () {
     it('should can use nameSpace', function () {
          console.info(MathUtil.PI)
          console.info(MathUtil.sum(1, 2, 1, 1))

          console.info(Response.Failed.CODE)
          console.info(Response.Succes.CODE)
     });
})