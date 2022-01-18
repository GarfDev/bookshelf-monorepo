import {} from 'jose';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async generateLoginToken() {
    return "This should be login token"
  }
}
