import {  CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {  map, Observable } from 'rxjs';
import { ResSuccess } from 'src/base/models/response.model';

@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

      return next.handle().pipe(map((data) => {
        return new ResSuccess(transformBigInt(data));
      }));
  }
}

const transformBigInt = (value: any): any => {
  if (typeof value === 'bigint') {
    return Number(value);
  }

  if (Array.isArray(value)) {
    return value.map(transformBigInt);
  }

  if (value !== null && typeof value === 'object') {
    const result: any = {};
    for (const key of Object.keys(value)) {
      result[key] = transformBigInt(value[key]);
    }
    return result;
  }

  return value;
}