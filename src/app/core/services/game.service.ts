import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiConfig from '../../../environments/apiConfig';
import { ResponseModel } from './common.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAllCharacter(): Observable<ResponseModel<CharacterDto[]>> {
        return this.http.get<ResponseModel<CharacterDto[]>>(apiConfig.baseUrl + '/character').pipe();
    }

    // getAllActivitiesByProfileId(profile: {
    //     contactId?: string,
    //     companyId?: string
    // }): Observable<ResponseModel<ActivityDto>> {
    //     return this.http.post<ResponseModel<ActivityDto>>(apiConfig.baseUrl + '/activity/getActivitiesByProfileId', { profile }).pipe();
    // }

    createRoom(): Observable<ResponseModel<RoomDto>> {
        return this.http.post<ResponseModel<RoomDto>>(apiConfig.baseUrl + '/room', null).pipe();
    }

    createPlayer(player: CreatePlayerDto): Observable<ResponseModel<PlayerDto>> {
        return this.http.post<ResponseModel<PlayerDto>>(apiConfig.baseUrl + '/player', { player }).pipe();
    }
}

export class CharacterDto {
    characterId: string;
    characterOrder: number;
    characterDescription: string;
    characterName: string;
    characterSide: '神' | '狼' | '民';
    statusId: number;
}

export class RoomDto {
    roomId: string;
    statusId: number;
    playerList: PlayerDto[];
    gameStarted: boolean;
}

export class PlayerDto {
    playerId: string;
    playerName: string;
    statusId: number;
    characterId: string;
    isOut: boolean;
}

export class CreatePlayerDto {
    playerName: string;
    statusId: number;
    isOut: boolean;
}