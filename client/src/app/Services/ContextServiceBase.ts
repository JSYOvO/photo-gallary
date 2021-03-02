import { BehaviorSubject } from 'rxjs';
import { IPictureModel, PictureModel } from '../type';
export class ContextServiceBase {
  private source = new BehaviorSubject(new PictureModel());
  constructor() {}
  context = this.source.asObservable();
  public add(image: IPictureModel): void {
    this.source.next(image);
  }
}
