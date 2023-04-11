import { UserAddressPipe } from './user-address.pipe';

describe('UserAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new UserAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
