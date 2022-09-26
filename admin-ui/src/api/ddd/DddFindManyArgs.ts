import { DddWhereInput } from "./DddWhereInput";
import { DddOrderByInput } from "./DddOrderByInput";

export type DddFindManyArgs = {
  where?: DddWhereInput;
  orderBy?: Array<DddOrderByInput>;
  skip?: number;
  take?: number;
};
