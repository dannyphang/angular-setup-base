import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketioService } from '../../../core/services/socketIo.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  gameId: string;
  role = 'operative';
  words: any;

  constructor(
    private socketIoService: SocketioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id') ?? 'undeficed';
    this.socketIoService.connect(this.gameId);
    this.recieveJoinedPlayers();
    this.recieveStartGame();
    this.recieveGameUpdate();
  }

  nextGame() {
    this.socketIoService.startGame(this.gameId);
  }

  startGame() {
    this.socketIoService.startGame(this.gameId);
  }

  clickWord(word: any) {
    word.selected = true;
    this.socketIoService.sendGameUpdate(this.gameId, this.words);
  }

  recieveJoinedPlayers() {
    this.socketIoService.recieveJoinedPlayers().subscribe(message => {
      // this.snackbar.open(message, '', {
      //   duration: 3000,
      // });
    });
  }

  recieveStartGame() {
    this.socketIoService.recieveStartGame().subscribe((words: any) => {
      this.role = 'operative';
      this.words = words;
    });
  }

  recieveGameUpdate() {
    this.socketIoService.recieveGameUpdate(this.gameId).subscribe((words: any) => {
      this.words = words;
    });
  }
}
