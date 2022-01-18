import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { EmailService } from './email.service'

@Module({
  providers: [CommonService, EmailService],
  exports: [CommonService, EmailService],
})
export class CommonModule {}
