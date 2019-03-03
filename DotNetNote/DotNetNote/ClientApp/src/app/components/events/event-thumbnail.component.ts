import { Component, Input, Output, EventEmitter }
    from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
        자식 요소        
        </div>
        <div>
<button class="btn btn-primary" (click)="handleClickMe()">
    클릭
</button>
        </div>
    `
})
export class EventThumbnailComponent {
    @Input()
    public event: any;

    @Output()
    public eventClick = new EventEmitter(); 

    public handleClickMe() {
        console.log('clicked');
        this.eventClick.emit("foo");
    }
}
