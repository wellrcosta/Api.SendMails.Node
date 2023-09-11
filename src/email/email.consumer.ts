import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
@Processor('email')
export class EmailConsumer {
  constructor(private readonly mailerService: MailerService) {}

  @Process('send-email')
  async sendEmail(job: Job<SendEmailDto>): Promise<void> {
    const { data } = job;

    await this.mailerService.sendMail({
      to: data.to,
      subject: data.subject,
      text: data.text,
    });
  }
}
