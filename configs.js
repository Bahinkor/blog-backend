const envConfig = {
  db: {
    uri: process.env.DB_URI,
    poolSize: parseInt(process.env.DB_POOL_SIZE, 10) || 10
  },

  port: parseInt(process.env.PORT, 10) || 8000,

  auth: {
    accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
    refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY,
    accessTokenExpiresInSeconds: process.env.ACCESS_TOKEN_EXPIRES_IN_SECONDS,
    refreshTokenExpiresInSeconds: process.env.REFRESH_TOKEN_EXPIRES_IN_SECONDS
  }
};

export default envConfig;