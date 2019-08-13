import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class CardService {
    cards: Array<Card>;
}
