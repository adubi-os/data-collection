import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CasesDto } from '../model/cases';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService],
})
export class AdminComponent implements OnInit {
  cases: CasesDto[] = [];

  cases2: CasesDto[] = [];

  // selectedCustomers: Customer[];

  loading: boolean = true;

  // activityValues: number[] = [0, 100];

  @ViewChild('dt') table!: Table;
  @ViewChild('dt2') table2!: Table;

  displayModal: boolean = false;
  displayModal2: boolean = false;
  displayModal3: boolean = false;
  displayModal4: boolean = false;

  fullName: string = '';
  supervisorName: string = '';
  email: string = '';
  phone: string = '';

  supervisorFullName: string = '';
  supervisorEmail: string = '';
  supervisorPhone: string = '';

  selectedStatus: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
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

    this.cases2 = [
      {
        id: 1,
        supervisor: 'Johnson Cutris',
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
        supervisor: 'Saka Dayo',
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
        supervisor: 'Raphael Bill',
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

  showModalDialog3() {
    this.displayModal3 = true;
  }

  showModalDialog4() {
    this.displayModal4 = true;
  }

  // onSelectedStatus(val: string) {
  //   this.ngOnInit();

  //   const k = val + ' ' + 'Selected';

  //   this.selectedStatus = val;
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: k,
  //   });
  //   // this.notify.success(this.l(k.toString()));

  //   this.getAllCasesByStatus();
  // }

  // getAllCasesByStatus() {
  //   // if (this.selectedStatus == 'All') {
  //   //   this.ngOnInit();
  //   // }

  //   this.cases = this.cases.filter((x) => x.status === this.selectedStatus);
  //   // this.selectedStatus = '';
  //   // return newCases;
  //   // this.ngOnInit();
  // }

  submit(form: NgForm): void {
    // alert('Case Submitted Successfully');
    // alert(form.value);
    this.displayModal = false;
    form.reset();

    this.showModalDialog2();
  }

  submit2(form: NgForm): void {
    // alert('Case Submitted Successfully');
    // alert(form.value);
    this.displayModal3 = false;
    form.reset();

    this.showModalDialog4();
  }
}
