import { ServeSpaMiddleware } from './serve-spa.middleware';

describe('ServeSpaMiddleware', () => {
  it('should be defined', () => {
    expect(new ServeSpaMiddleware()).toBeDefined();
  });
});
