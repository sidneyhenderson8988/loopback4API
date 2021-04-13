// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';
export class TestsidneyController {
  @get('/sidney')
  hello(): string {
    return 'Test route, Hello Sidney!';
  }
}
