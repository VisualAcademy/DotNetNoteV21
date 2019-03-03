import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event1 = { id: 1, name: '홍길동' };

    handleEventClicked(data: any) {
        console.log(data);
    }
}

