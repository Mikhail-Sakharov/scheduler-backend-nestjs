import {CRUDRepository} from 'src/types/crud-repository.interface';
import {List} from 'src/types/list.interface';
import {ListEntity} from './list.entity';
import {ListModel} from './list.model';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

export class ListsRepository implements CRUDRepository<ListEntity, string, List> {
  constructor(
    @InjectModel(ListModel.name) private readonly listModel: Model<ListModel>
  ) {}

  public async create(item: ListEntity): Promise<List> {
    return await this.listModel.create(item.toObject());
  }

  public async find() {
    return await this.listModel.find();
  }

  public async findById(id: string): Promise<List> {
    return await this.listModel.findById(id);
  }

  public async update(id: string, item: ListEntity): Promise<List> {
    return await this.listModel.findByIdAndUpdate(id, item.toObject(), {new: true});
  }

  public async destroy(id: string): Promise<void> {
    return await this.listModel.findByIdAndDelete(id);
  }
}
