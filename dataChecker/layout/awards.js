/**
 * Checks whether required fields for awards correctly provided or not
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    layout: {type: 'string'},
    section: {type: 'string'},
    entries: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          international: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                award: {type: 'string'},
                event: {type: 'string'},
                location: {type: 'string'},
                date: {type: 'string'},
              },
              required: ['award', 'event', 'location', 'date'],
              additionalProperties: false,
            },
            minItems: 1,
          },
          domestic: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                award: {type: 'string'},
                event: {type: 'string'},
                location: {type: 'string'},
                date: {type: 'string'},
              },
              required: ['award', 'event', 'location', 'date'],
              additionalProperties: false,
            },
            minItems: 1,
          },
        },
        minItems: 1,
      },
      minItems: 1,
    },
  },
  required: ['layout', 'section', 'entries'],
  additionalProperties: false,
};

// noinspection JSUnusedGlobalSymbols
export const validate = new Ajv().compile(schema);
