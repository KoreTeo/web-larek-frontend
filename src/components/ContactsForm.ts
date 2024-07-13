import { Form } from './common/Form';
import { IEvents } from '../components/base/events';

export interface IContactsForm {
  email: string;
  phone: string;
}

export class ContactsForm extends Form<IContactsForm> {
    get phone(): string {
      return (this.container.elements.namedItem('phone') as HTMLInputElement).value;
    }
  
    set phone(value: string) {
      (this.container.elements.namedItem('phone') as HTMLInputElement).value = value;
    }
  
    get email(): string {
      return (this.container.elements.namedItem('email') as HTMLInputElement).value;
    }
  
    set email(value: string) {
      (this.container.elements.namedItem('email') as HTMLInputElement).value = value;
    }
  
    constructor(container: HTMLFormElement, events: IEvents) {
      super(container, events);
    }
  }