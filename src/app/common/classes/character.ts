import { ObjectUrl } from './object-url';

export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ObjectUrl;
  location: ObjectUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
