import { randomUUID } from "crypto"
import { RANDOM_TYPE, RandomType } from "../constants/random"

export function generateRandomId(random_type: RandomType = RANDOM_TYPE.UUID) {
  const id = randomUUID()

  if (random_type === RANDOM_TYPE.SHORT) return id.substring(0, 7).toUpperCase()
  return id
}