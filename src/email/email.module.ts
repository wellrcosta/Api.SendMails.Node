import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailService } from './email.service';
import { EmailConsumer } from './email.consumer';
import { MailerModule } from '@nestjs-modules/mailer';
import { redis, mailer } from '../config/appsettings.json';
import { EmailController } from './email.controller';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: redis.host,
        port: redis.port,
      },
    }),
    BullModule.registerQueue({
      name: 'email',
    }),
    MailerModule.forRoot({
      transport: {
        host: mailer.hostsmtp, // Configure com as informações do seu servidor SMTP
        port: mailer.port,
        secure: mailer.secure,
        auth: {
          user: mailer.user,
          pass: mailer.pass,
        },
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailConsumer],
  exports: [EmailService],
})
export class EmailModule {}
