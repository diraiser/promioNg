import { Component, OnInit } from '@angular/core';
import {Integration} from '../model/integration';
import { IntegrationService } from '../integration.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

      integrations: Integration[] = [];

    constructor(private integrationService: IntegrationService) { }

    ngOnInit(): void {
        this.integrationService.getIntegrations()
            .then(integrations => this.integrations = integrations);
    }
}