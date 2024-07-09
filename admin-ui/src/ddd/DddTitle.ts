import { Ddd as TDdd } from "../api/ddd/Ddd";

export const DDD_TITLE_FIELD = "id";

export const DddTitle = (record: TDdd): string => {
  return record.id?.toString() || String(record.id);
};
