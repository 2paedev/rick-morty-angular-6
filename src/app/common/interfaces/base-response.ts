import { Character } from '../../character/common/character';
import { Info } from '../classes/info';

export interface BaseResponse {
  info: Info;
  results: Character[];
}
