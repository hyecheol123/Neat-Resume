/**
 * Checks whether required fields for certificates correctly provided or not
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
          issuer: {type: 'string'},
          certificateList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {title: {type: 'string'}, date: {type: 'string'}},
              required: ['title', 'date'],
              additionalProperties: false,
            },
            minItems: 1,
          },
        },
        required: ['issuer', 'certificateList'],
      },
      minItems: 1,
    },
  },
  required: ['layout', 'section', 'entries'],
  additionalProperties: false,
};

// noinspection JSUnusedGlobalSymbols
export const validate = new Ajv().compile(schema);
