'use strict';

/**
 * user-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-request.user-request');
