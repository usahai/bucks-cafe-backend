import { ValuesOf } from "../utils/values-of"

export const RANDOM_TYPE = {
  UUID: 'uuid',
  SHORT: 'short'
}
export type RandomType = ValuesOf<typeof RANDOM_TYPE>
