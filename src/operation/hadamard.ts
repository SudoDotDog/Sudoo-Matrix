/**
 * @author WMXPY
 * @namespace Matrix_Operation
 * @description Hadamard
 */

import { ManipulateFunction, Matrix, MatrixSize } from "../declare";
import { getMatrixSize, initMatrix } from "../util";

export const matrixHadamardMultiply = <T extends any = any>(left: Matrix<T>, right: Matrix<T>, multiplyFunction?: ManipulateFunction<T>): Matrix<T> => {

    const leftSize: MatrixSize = getMatrixSize(left);
    const rightSize: MatrixSize = getMatrixSize(right);

    if (leftSize.x !== rightSize.x
        || leftSize.y !== rightSize.y) {
        throw new Error("[Sudoo-Matrix] Only matrixes with same size can do hadamard multiply");
    }

    const result: Matrix<T> = initMatrix(leftSize);

    for (let i = 0; i < leftSize.x; i++) {
        for (let j = 0; j < leftSize.y; j++) {

            if (typeof multiplyFunction === 'function') {

                result[i][j] = multiplyFunction(left[i][j], right[i][j]);
            } else {

                const currentLeft: any = left[i][j];
                const currentRight: any = right[i][j];

                const isNumber: boolean = typeof currentLeft === 'number' && typeof currentRight === 'number';

                if (!isNumber) {
                    throw new Error("[Sudoo-Matrix] Please provide multiplyFunction for not-number value");
                }
                result[i][j] = currentLeft - currentRight as any;
            }
        }
    }

    return result;
};
