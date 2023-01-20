'use strict';

/* eslint no-process-env: 0 */
const env = process.env.NODE_ENV || 'production';
const useMocks = process.env.USE_MOCKS === 'true' || !env;

module.exports = {
  env: env,
  csp: {
    imgSrc: ['data:']
  },
  useMocks: useMocks,
  upload: {
    maxFileSize: '100mb',
    // if mocks set use file service served up by app otherwise use filevault's port 3000
    hostname: !useMocks && process.env.FILE_VAULT_URL ?
      process.env.FILE_VAULT_URL :
      `http://localhost:${useMocks ? (process.env.PORT || 8080) : 3000}/file`
  },
  email: {
    caseworker: process.env.CASEWORKER_EMAIL,
    notifyApiKey: process.env.NOTIFY_KEY,
    notifyTemplate: process.env.NOTIFY_TEMPLATE,
    notifyHigherTemplate: process.env.NOTIFY_HIGHER_TEMPLATE,
    templateUserAuthId: process.env.USER_AUTHORISATION_TEMPLATE_ID,
    from: process.env.FROM_ADDRESS,
    replyTo: process.env.REPLY_TO,
    accessKeyId: process.env.AWS_USER,
    secretAccessKey: process.env.AWS_PASSWORD,
    transportType: 'ses',
    region: process.env.EMAIL_REGION
  },
  hosts: {
    acceptanceTests: process.env.ACCEPTANCE_HOST_NAME || `http://localhost:${process.env.PORT || 8080}`
  },
  tokenExpiry: 1800,
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  skipEmail: process.env.SKIP_EMAIL,
  keycloak: {
    token: process.env.KEYCLOAK_TOKEN_URL,
    username: process.env.KEYCLOAK_USERNAME,
    password: process.env.KEYCLOAK_PASSWORD,
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    secret: process.env.KEYCLOAK_SECRET
  }
};
