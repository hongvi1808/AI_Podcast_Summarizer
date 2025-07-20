import {  CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {  map, Observable } from 'rxjs';
import { ResSuccess } from 'src/base/models/response.model';

@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

      return next.handle().pipe(map((data) => {
        return new ResSuccess(data);
      }));
  }
}
