/**
 * Checks whether required fields for default resume entry information
 * correctly provided or not
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    layout: {type: 'string'},
    section: {type: 'string'},
    alias: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          organization: {type: 'string'},
        },
        additionalProperties: false,
        minProperties: 1,
        maxProperties: 1,
      },
      minItems: 1,
      uniqueItems: true,
    },
    entries: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          organization: {type: 'string'},
          location: {type: 'string'},
          date: {type: 'string'},
          details: {type: 'array', items: {type: 'string'}, minItems: 1},
        },
        required: ['title', 'organization', 'location', 'date'],
      },
      minItems: 1,
    },
  },
  required: ['layout', 'section', 'entries'],
  additionalProperties: false,
};

// noinspection JSUnusedGlobalSymbols
export const validate = new Ajv().compile(schema);
