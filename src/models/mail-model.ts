export class Mail {
  from: string;
  to: string;
  subject: string;
  html: string;

  constructor(from: string, to: string, subject: string, html: string) {
    this.subject = subject;
    this.from = from;
    this.to = to;
    this.html = html;
  }
}
