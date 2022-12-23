module.exports = {
  apps: [
    {
      name: "metaversity-technologies-backend", // Your project name
      cwd: "/home/ec2-user/metaversity-technologies/backend", // Path to your project
      script: "npm", // For this example we're using npm, could also be yarn
      args: "start", // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS:"AYtXPzI/8Tct4TWwF6WDQQ==,qiCm9vNc1kCfl1g/4i52BQ==,CQ+AS8v3Ln3Lrgh2xneDPg==,cmbxlXz4ZIei2j3Pe0s86A==", // you can find it in your project .env file.
        API_TOKEN_SALT: "Q2Nfd3STaOlyjz6ZVPNUOQ==",
        ADMIN_JWT_SECRET: "eEh/yP+S//NiwkTyG0NvMw==",
        JWT_SECRET: "1dGRCVwa91gi5avPlSyzsw==",
        NODE_ENV: "production",

        EMAIL_PRIVATE_KEY: "eb74ae32eebe6e47af556bd8fadcd0841bce12e6",
        EMAIL_CLIENT_ID: "105237609808209972630",
        SMTP_PORT: 587,
        SMTP_HOST: "smtp.gmail.com",
        SMTP_USERNAME: "sushant@metaversitytechnologies.com",
        SMTP_PASSWORD: "Z6&LEl8E9bfm",

        EMAIL_ADDRESS_FROM: "sushant@metaversitytechnologies.com",
        EMAIL_ADDRESS_REPLY: "jitendra@metaversitytechnologies.com",

        DATABASE_HOST:"metaversity-db.cffatiqrgs2l.ap-south-1.rds.amazonaws.com", // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: "3306",
        DATABASE_NAME: "MetaversityTechnologiesDB", // DB name under 'Configuration' tab
        DATABASE_USERNAME: "MetaversityTechnologies", // default username
        DATABASE_PASSWORD: "mCa@455hr!tJ",
        DATABASE_SSL: false,

        AWS_ACCESS_KEY_ID: "AKIA4SLIDRBCVEFEJZEZ",
        AWS_ACCESS_SECRET: "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", // Find it in Amazon S3 Dashboard
        AWS_REGION: "ap-south-1",
        AWS_BUCKET_NAME: "metaversity-technologies",
      },
    },
  ],
};
