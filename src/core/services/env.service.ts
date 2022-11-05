export const ENV = {
  serverPort: 'SERVER_PORT',
  secret: 'SECRET',
}

let envs = {}

const setEnvs = (loadedEnvs: Record<keyof typeof ENV, string>) => {
  envs = loadedEnvs
}

export const getEnv = (name: keyof typeof ENV) => {
  if (!envs) {
    throw new Error('Missing env configuration. Please load it first')
  }

  const loadedEnvs = envs as Record<keyof typeof ENV, string>
  return loadedEnvs[name]
}

export const loadEnvs = () => {
  const names = Object.keys(ENV) as Array<keyof typeof ENV>
  const loadedEnvs = names.reduce((accEnvs, currentName) => {
    const envId = ENV[currentName]
    const env = process.env[envId]
    if (!env) {
      throw new Error(`Missing env for: ${envId}`)
    }

    return {
      ...accEnvs,
      [currentName]: env,
    }
  }, envs as Record<keyof typeof ENV, string>)
  setEnvs(loadedEnvs)
}
