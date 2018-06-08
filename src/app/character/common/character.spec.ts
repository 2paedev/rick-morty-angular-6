import { Character } from './character';

describe('Character', () => {
  it('should create an instance of Character', () => {
    expect(new Character()).toBeTruthy();
  });

  it('should accept values', () => {
    let character = new Character();
    character = {
      id: 111,
      name: 'A name',
      status: 'A status'
    };
    expect(character.id).toEqual(111);
    expect(character.name).toEqual('A name');
    expect(character.status).toEqual('A status');
  });
});
