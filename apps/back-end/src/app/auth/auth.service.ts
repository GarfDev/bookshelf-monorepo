import {} from 'jose';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async generate() {}
}
