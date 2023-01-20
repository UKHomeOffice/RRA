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
  login: {
    tokenExpiry: 1800,
    appPath: '/rra/start',
    invalidTokenPath: '/rra/token-invalid',
    allowSkip: String(process.env.ALLOW_SKIP) === 'true',
    skipEmail: process.env.SKIP_EMAIL
  },
  email: {
    caseworker: process.env.CASEWORKER_EMAIL,
    notifyApiKey: process.env.NOTIFY_KEY,
    notifyTemplate: process.env.NOTIFY_TEMPLATE,
    notifyHigherTemplate: process.env.NOTIFY_HIGHER_TEMPLATE,
    userAuthTemplateId: process.env.USER_AUTHORISATION_TEMPLATE_ID,
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
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  keycloak: {
    token: process.env.KEYCLOAK_TOKEN_URL,
    username: process.env.KEYCLOAK_USERNAME,
    password: process.env.KEYCLOAK_PASSWORD,
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    secret: process.env.KEYCLOAK_SECRET
  },
  audit: {
    enabled: String(process.env.AUDIT_DATA) === 'true',
    host: process.env.AUDIT_DB_HOST,
    user: process.env.AUDIT_DB_USER,
    password: process.env.AUDIT_DB_PASS,
    database: process.env.AUDIT_DB_NAME,
    pg: { version: '8.8.0' }
  },
  saveService: {
    port: process.env.DATASERVICE_SERVICE_PORT_HTTPS || '3000',
    host: process.env.DATASERVICE_SERVICE_HOST &&
      `https://${process.env.DATASERVICE_SERVICE_HOST}` || 'http://127.0.0.1'
  },
  reports: {
    deletionTimeout: +process.env.DELETION_TIMEOUT || 30,
    submitTimeout: +process.env.SUBMIT_TIMEOUT || 7
  }
};
