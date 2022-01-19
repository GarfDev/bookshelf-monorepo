import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [CommonService],
  exports: [MailModule],
})
export class CommonModule {}
