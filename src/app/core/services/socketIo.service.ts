import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import apiConfig from '../../../environments/apiConfig';
import { PlayerDto, RoomDto } from './game.service';

@Injectable({
    providedIn: 'root',
})
export class SocketioService {
    socket: Socket;
    currentPlayer: PlayerDto;

    constructor() { }

    set player(player: PlayerDto) {
        this.currentPlayer = player;
    }

    get player(): PlayerDto {
        return this.currentPlayer;
    }

    connect(gameId: string) {
        this.socket = io(apiConfig.socketUrl);
        // this.socket.emit('joinRoom', { gameId: gameId });
    }

    playerJoinRoom(playerId: string, roomId: string) {
        this.socket.emit('joinRoom', { roomId: roomId, playerId: playerId });
    }

    startGame(gameId: string) {
        this.socket.emit('startGame', { gameId: gameId });
    }

    sendRoomUpdate(roomId: string, room: RoomDto) {
        this.socket.emit('roomUpdate', { roomId: roomId, room: room });
    }

    recieveJoinedPlayers() {
        return new Observable((observer) => {
            this.socket.on('joinRoom', (message) => {
                observer.next(message);
            });
        });
    }

    recieveStartGame() {
        return new Observable<RoomDto>((observer) => {
            this.socket.on('startGame', (room: RoomDto) => {
                observer.next(room);
            });
        });
    }

    recieveRoomUpdate(roomId: string) {
        return new Observable<RoomDto>((observer) => {
            this.socket.on(roomId, (room) => {
                observer.next(room);
            });
        });
    }
}