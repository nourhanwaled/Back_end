import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) {}
  create(createContactDto: CreateContactDto) {
    const contact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(contact);
  }

  async findAll() {
    return await this.contactRepository.find();
  }

  async findOne(id: number) {
    return await this.contactRepository.findOneBy({ id });
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.findOne(id);
    return this.contactRepository.save({ ...contact, ...updateContactDto });
  }
  async remove(id: number) {
    const contact = await this.findOne(id);
    return this.contactRepository.remove(contact);
  }
}
