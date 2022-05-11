import { Component, OnInit, ViewChild } from '@angular/core';
import { CasesDto } from '../model/cases';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cso',
  templateUrl: './cso.component.html',
  styleUrls: ['./cso.component.scss'],
})
export class CsoComponent implements OnInit {
  cases: CasesDto[] = [];

  // selectedCustomers: Customer[];

  loading: boolean = true;

  // activityValues: number[] = [0, 100];

  @ViewChild('dt') table!: Table;

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

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.cases = [
      {
        id: 1,
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
        type: 'Case 2',
        subject: 'Explicabo',
        description:
          'Quia enim doloribus explicabo qui totam, neque nobis veniam earum nemo delectus!',
        priority: 'Medium',
        status: 'Validated',
        candidateName: 'Katy Pate',
        candidateEmail: 'katy@astract.com',
        candidatePhone: '08045634976',
        candidateGender: 'Female',
      },
      {
        id: 3,
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

  submit(form: NgForm): void {
    // alert('Case Submitted Successfully');
    // alert(form.value);
    this.displayModal = false;
    form.reset();

    this.showModalDialog2();
  }
}
