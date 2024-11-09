import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketioService } from '../../core/services/socketIo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  roomIdFormControl: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private socketIoService: SocketioService,
  ) { }

  ngOnInit() {
  }

  createGame() {
    this.router.navigate(['/room', '1234567890']);
  }

  enterRoom() {
    this.socketIoService.startGame(this.roomIdFormControl.value);
    this.router.navigate(['/room', this.roomIdFormControl.value]);
  }
}
