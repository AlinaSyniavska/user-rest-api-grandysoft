module.exports = {
    PORT: process.env.PORT || 5001,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    CORS_WHITE_LIST:process.env.CORS_WHITE_LIST || '',
};
