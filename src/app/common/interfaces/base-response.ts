import { Character } from '../classes/character';
import { Info } from '../classes/info';

export interface BaseResponse {
  info: Info;
  results: Character[];
}
