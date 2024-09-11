interface Conditional {
  keys: string[]
  values: any[]
}

export function conditionals<T extends object>(params: T) {
  const resp: Conditional = {
    keys: [],
    values: [],
  }

  for (const [paramKey, paramValue] of Object.entries(params)) {
    resp.keys.push(paramKey)
    resp.values.push(paramValue === 'NULL' ? null : paramValue)
  }

  return resp
}
