import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { Message } from 'primeng/api';
import { CasesDto } from '../model/cases';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class SupervisorComponent implements OnInit {
  cases: CasesDto[] = [];

  // selectedCustomers: Customer[];

  loading: boolean = true;

  // activityValues: number[] = [0, 100];

  // @ViewChild('dt') table: Table;

  msgs: Message[] = [];

  displayModal: boolean = false;
  displayModal2: boolean = false;

  caseSubject: string = '';
  caseType: string = '';
  casePriority: string = '';
  caseDescription: string = '';
  candidateName: string = '';
  email: string = '';
  phone: string = '';
  gender: string = '';

  selectedStatus: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cases = [
      {
        id: 1,
        cso: 'Bello Akinwumi',
        type: 'Case 1',
        subject: 'Consectetur',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        priority: 'High',
        status: 'Pending',
        candidateName: 'John Doe',
        candidateEmail: 'john@astract.com',
        candidatePhone: '08145342746',
        candidateGender: 'Male',
      },
      {
        id: 2,
        cso: 'Dauda Jones',
        type: 'Case 2',
        subject: 'Explicabo',
        description:
          'Quia enim doloribus explicabo qui totam, neque nobis veniam earum nemo delectus!',
        priority: 'Medium',
        status: 'Approved',
        candidateName: 'Katy Pate',
        candidateEmail: 'katy@astract.com',
        candidatePhone: '08045634976',
        candidateGender: 'Female',
      },
      {
        id: 3,
        cso: 'Tope Salako',
        type: 'Case 3',
        subject: 'Reprehenderit',
        description:
          'Non quas ipsam delectus et? Totam maxime atque ipsa incidunt est reprehenderit accusamus iure corrupti',
        priority: 'Low',
        status: 'Rejected',
        candidateName: 'Peter Umoh',
        candidateEmail: 'peter@astract.com',
        candidatePhone: '09087534523',
        candidateGender: 'Male',
      },
    ];

    this.primengConfig.ripple = true;
    this.loading = false;
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showModalDialog2() {
    this.displayModal2 = true;
  }

  onSelectedStatus(val: string) {
    this.ngOnInit();

    const k = val + ' ' + 'Selected';

    this.selectedStatus = val;
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: k,
    });
    // this.notify.success(this.l(k.toString()));

    this.getAllCasesByStatus();
  }

  getAllCasesByStatus() {
    // if (this.selectedStatus == 'All') {
    //   this.ngOnInit();
    // }

    this.cases = this.cases.filter((x) => x.status === this.selectedStatus);
    // this.selectedStatus = '';
    // return newCases;
    // this.ngOnInit();
  }

  submit(form: NgForm): void {
    // alert('Case Submitted Successfully');
    // alert(form.value);
    this.displayModal = false;
    form.reset();

    this.showModalDialog2();
  }

  validate() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Case validated',
        });
      },
      reject: (type: any) => {
        switch (
          type
          // case ConfirmEventType.REJECT:
          //   this.messageService.add({
          //     severity: 'error',
          //     summary: 'Rejected',
          //     detail: 'You have rejected',
          //   });
          //   break;
          // case ConfirmEventType.CANCEL:
          //   this.messageService.add({
          //     severity: 'warn',
          //     summary: 'Cancelled',
          //     detail: 'You have cancelled',
          //   });
          //   break;
        ) {
        }
      },
    });
  }

  reject() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Case rejected',
        });
      },
      reject: (type: any) => {
        switch (
          type
          // case ConfirmEventType.REJECT:
          //   this.messageService.add({
          //     severity: 'error',
          //     summary: 'Rejected',
          //     detail: 'You have rejected',
          //   });
          //   break;
          // case ConfirmEventType.CANCEL:
          //   this.messageService.add({
          //     severity: 'warn',
          //     summary: 'Cancelled',
          //     detail: 'You have cancelled',
          //   });
          //   break;
        ) {
        }
      },
    });
  }
}
