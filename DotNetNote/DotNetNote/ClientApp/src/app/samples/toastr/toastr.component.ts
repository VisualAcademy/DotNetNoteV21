import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../../common/toastr.service';

@Component({
    selector: 'app-toastr',
    templateUrl: './toastr.component.html',
    styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private toastr: ToastrService) {

    }

    btnClick() {
        this.toastr.success('click');
    }

}
