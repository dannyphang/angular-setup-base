import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketioService } from '../../core/services/socketIo.service';
import { GameService } from '../../core/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  roomIdFormControl: FormControl = new FormControl('');
  usernameFormControl: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private socketIoService: SocketioService,
    private gameService: GameService,
  ) { }

  ngOnInit() {
  }

  createGame() {
    // this.router.navigate(['/room', '1234567890']);
    this.gameService.createPlayer({
      playerName: this.usernameFormControl.value,
      statusId: 1,
      isOut: false,
    }).subscribe(res => {
      if (res.isSuccess) {
        this.socketIoService.player = res.data;
      }
    })


    this.gameService.createRoom().subscribe(res => {
      if (res.isSuccess) {
        console.log(res.data)
        // this.socketIoService.startGame(res.data.roomId);
        this.router.navigate(['/room', res.data.roomId]);
      }
    })
  }

  enterRoom() {
    this.socketIoService.startGame(this.roomIdFormControl.value);
    this.router.navigate(['/room', this.roomIdFormControl.value]);
  }

  character() {
    this.router.navigate(['/character']);
  }
}
