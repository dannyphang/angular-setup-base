import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketioService } from '../../../core/services/socketIo.service';
import { PlayerDto, RoomDto } from '../../../core/services/game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  roomId: string;
  role = 'operative';
  room: RoomDto;
  player: PlayerDto;

  constructor(
    private socketIoService: SocketioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id') ?? 'undeficed';
    this.player = this.socketIoService.currentPlayer;
    this.socketIoService.connect(this.roomId);
    this.socketIoService.playerJoinRoom(this.roomId, this.player.playerId);
    this.recieveJoinedPlayers();
    this.recieveStartGame();
    this.recieveGameUpdate();
  }

  nextGame() {
    this.socketIoService.startGame(this.roomId);
  }

  startGame() {
    // this.socketIoService.startGame(this.roomId);
    this.room.gameStarted = true;
    this.socketIoService.sendRoomUpdate(this.roomId, this.room);
  }

  clickWord(word: any) {
    word.selected = true;
    this.socketIoService.sendRoomUpdate(this.roomId, this.room);
  }

  recieveJoinedPlayers() {
    this.socketIoService.recieveJoinedPlayers().subscribe(message => {
      // this.snackbar.open(message, '', {
      //   duration: 3000,
      // });
    });
  }

  recieveStartGame() {
    this.socketIoService.recieveStartGame().subscribe((room) => {
      this.room = room;
    });
  }

  recieveGameUpdate() {
    this.socketIoService.recieveRoomUpdate(this.roomId).subscribe((room) => {
      this.room = room;
    });
  }

  updateRoom(event: any) {

  }
}
