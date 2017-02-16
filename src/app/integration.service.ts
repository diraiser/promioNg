import { Injectable } from '@angular/core';
import { Integration } from  './integration';
import { INTEGRATIONS } from './mock-integration';

@Injectable()
export class IntegrationService {
    getIntegrations(): Promise<Integration[]> {
        return Promise.resolve(INTEGRATIONS);
    }

    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise(resolve => {
    //         // Simulate server latency with 2 second delay
    //         setTimeout(() => resolve(this.getHeroes()), 2000);
    //     });
    // }
    //
    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id));
    // }


}
