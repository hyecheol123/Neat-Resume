/**
 * Checks whether required fields for basic information correctly provided or not
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    name: {type: 'string'},
    position: {type: 'string'},
    address: {type: 'string'},
    email: {type: 'string'},
    sections: {
      type: 'array',
      uniqueItems: true,
      items: {type: 'string'},
      minItems: 1,
    },
    github: {type: 'string'},
    linkedin: {type: 'string'},
    slogan: {type: 'string'},
  },
  required: ['name', 'position', 'address', 'email', 'sections'],
  additionalProperties: false,
};

export const validate = new Ajv().compile(schema);
