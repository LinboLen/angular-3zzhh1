import { Module } from "@nestjs/common";
import { DddModuleBase } from "./base/ddd.module.base";
import { DddService } from "./ddd.service";
import { DddController } from "./ddd.controller";
import { DddResolver } from "./ddd.resolver";

@Module({
  imports: [DddModuleBase],
  controllers: [DddController],
  providers: [DddService, DddResolver],
  exports: [DddService],
})
export class DddModule {}
