import { Injector } from '@angular/core';
import { NavService } from './../../services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Location } from '@angular/common';

export abstract class BasePage {

    public network: NetworkService;
    public utility: UtilityService;
    public nav: NavService;
    public location: Location;
    // public storedContactsService: StoredContactsService;

    constructor(injector: Injector) {
        this.network = injector.get(NetworkService);
        this.utility = injector.get(UtilityService);
        this.location = injector.get(Location);
        this.nav = injector.get(NavService);
    }


}
