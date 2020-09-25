/**
 * @author WMXPY
 * @namespace Matrix
 * @description Util
 */

import { Matrix, MatrixSize } from "./declare";

export const validateMatrix = (matrix: Matrix<any>): boolean => {

    if (!Array.isArray(matrix)) {
        return false;
    }

    const firstRow: any[] | undefined = matrix[0];
    if (!Array.isArray(firstRow)) {
        return false;
    }

    if (firstRow.length === 0) {
        return false;
    }

    const columns: number = firstRow.length;
    for (let i = 1; i < matrix.length; i++) {

        const row: any[] | undefined = matrix[i];
        if (!Array.isArray(row)) {
            return false;
        }

        if (matrix[i].length !== columns) {
            return false;
        }
    }
    return true;
};

export const initMatrix = <T extends any = any>(size: MatrixSize, initValue?: T): Matrix<any> => {

    const rows: any[][] = new Array(size.x).fill(initValue);
    return rows.map(() => {
        return new Array(size.y).fill(initValue);
    });
};

export const getMatrixSize = (matrix: Matrix<any>): MatrixSize => {

    const firstRow: any[] | undefined = matrix[0];
    if (!Array.isArray(firstRow)) {
        return {
            x: matrix.length,
            y: 0,
        };
    }

    return {
        x: matrix.length,
        y: firstRow.length,
    };
};
