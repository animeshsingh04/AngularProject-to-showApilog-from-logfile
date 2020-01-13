import { Component, OnInit } from '@angular/core';
import { ApiLogService } from './api-log.service';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './api-log.component.html',
    styleUrls: ['./api-log.component.css']
})

export class ApiLogComponent implements OnInit {

    _listFilter: string;
    apiLogs: Observable<string[]>;


    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
    }

    constructor(private apiLogService: ApiLogService) {

    }

    ngOnInit(): void {
         this.apiLogService.getApiLogs().subscribe({
             next: apiLogs=> {
                 this.apiLogs = this.apiLogs
             }
         });
        }


}