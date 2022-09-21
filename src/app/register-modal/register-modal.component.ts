import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})
export class RegisterModalComponent implements OnInit {
  constructor() {}

  @Input() displayModal = '';
  @Output() closeMod = new EventEmitter();

  closeModal() {
    this.closeMod.emit('close');
  }
  ngOnInit(): void {}
}
