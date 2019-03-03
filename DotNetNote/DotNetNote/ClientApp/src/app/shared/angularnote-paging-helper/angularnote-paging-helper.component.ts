import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'angularnote-paging-helper',
    template: `
        <div [hidden]="!isVisible">
          <ul class="pagination pagination-sm">
            <li [class.disabled]="!previousEnabled" (click)="previousNext(-1, $event)">
              <a aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li *ngFor="let page of pages" (click)="btnChangePage(page, $event)" [class.active]="currentPage === page">
              <a>{{ page }}</a>
            </li>
            <li [class.disabled]="!nextEnabled" (click)="previousNext(1, $event)">
              <a aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
    `,
    styles: [``]
})

export class AngularnotePagingHelperComponent implements OnInit {

    totalPages: number;
    pages: number[] = [];
    isVisible: boolean = false;
    previousEnabled: boolean = false;
    nextEnabled: boolean = true;

    /// <summary>
    /// ���� ������ ������ �ε���: 0, 1, 2 : PageIndex | PageNumber
    /// </summary>
    currentPage: number = 1;

    /// <summary>
    /// pageSize �Ӽ�: �� �������� ������ ��ƼŬ ����
    /// </summary>
    private _pageSize: number; // �� �������� ������ ��ƼŬ ����
    @Input()
    get pageSize(): number {
        return this._pageSize;
    }
    set pageSize(size: number) {
        this._pageSize = size;
        this.update();
    }

    /// <summary>
    /// recordCount �Ӽ�: �� ���ڵ� ��
    /// </summary>
    private _recordCount: number; // �� ���ڵ� �� 
    @Input()
    get recordCount(): number {
        return this._recordCount;
    }
    set recordCount(itemCount: number) {
        this._recordCount = itemCount;
        this.update();
    }


    // �θ� �������� pageIndexChanging �̺�Ʈ ���ε��� $event ��ü�� number �� ����
    @Output()
    pageIndexChanging: EventEmitter<number> = new EventEmitter<number>();



    constructor() { }

    ngOnInit() {

    }

    update() {
        if (this._recordCount && this._pageSize) {
            this.totalPages = Math.ceil(this._recordCount / this.pageSize);
            this.isVisible = true;
            if (this.recordCount >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }

        this.isVisible = false;
    }

    previousNext(direction: number, event?: MouseEvent) {
        let page: number = this.currentPage;
        if (direction == -1) {
            if (page > 1) page--;
        } else {
            if (page < this.totalPages) page++;
        }
        this.btnChangePage(page, event);
    }

    // ��ư Ŭ�� �̺�Ʈ 
    btnChangePage(page: number, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;

        // �θ� �������� �̺�Ʈ ����
        this.pageIndexChanging.emit(page);
    }
}
