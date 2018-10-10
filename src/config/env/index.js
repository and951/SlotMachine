const env = process.env.REACT_APP_ENV || 'develop'
// eslint-disable-line import/no-dynamic-require
const config = require(`./${env}`)

export default config.default
