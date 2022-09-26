import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DddService } from "./ddd.service";
import { DddControllerBase } from "./base/ddd.controller.base";

@swagger.ApiTags("ddds")
@common.Controller("ddds")
export class DddController extends DddControllerBase {
  constructor(
    protected readonly service: DddService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
