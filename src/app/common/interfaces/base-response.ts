import { Character } from '../../character/common/character';

export interface BaseResponse {
  info: Info;
  results: Character[];
}

class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
