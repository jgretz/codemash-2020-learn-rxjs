import 'whatwg-fetch';
import { Observable, of, empty } from 'rxjs';
import { take, map, flatMap, tap, filter, count, distinct } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { Dispatch, SetStateAction } from 'react';

export const subscribe = (observable: Observable<Number>, cb:Dispatch<SetStateAction<number>>) => {
}

export const takeTwo = (observable: Observable<Number>): Observable<Number> => {
    return observable;
}

export const fetch = (url: string): Observable<Response> => {
    return empty();
}

export const mapStatus = (invalidUrl: string): Observable<number> => {
    return of(1);
}

interface Logger {
    log(...args: any[]): void;
}
export const logging = (console: Logger, observable: Observable<number>): Observable<number> => {
    return empty();
}

export const createYourOwnObservable = (): Observable<number> => {
    return empty();
}

export const getTheJSON = (url: string): Observable<any> => {
    return empty();
}

export const takeFiveRows = (url: string): Observable<any> => {
    return empty();
}

export const countValidUsers = (url: string): Observable<number> => {
    return empty();
}

export const findUsersNamed = (url: string): Observable<string> => {
    return empty();
}

export const findUniqueUsersNamed = (url: string): Observable<string> => {
    return empty();
}
