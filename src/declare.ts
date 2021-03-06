/**
 * @author WMXPY
 * @namespace Matrix
 * @description Declare
 */

export type Matrix<T> = T[][];

export type MatrixSize = {

    readonly x: number;
    readonly y: number;
};

export type ManipulateFunction<T> = (left: T, right: T) => T;
