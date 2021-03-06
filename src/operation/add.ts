/**
 * @author WMXPY
 * @namespace Matrix_Operation
 * @description Add
 */

import { ManipulateFunction, Matrix, MatrixSize } from "../declare";
import { getMatrixSize, initMatrix } from "../util";

export const matrixAdd = <T extends any = any>(left: Matrix<T>, right: Matrix<T>, addFunction?: ManipulateFunction<T>): Matrix<T> => {

    const leftSize: MatrixSize = getMatrixSize(left);
    const rightSize: MatrixSize = getMatrixSize(right);

    if (leftSize.x !== rightSize.x
        || leftSize.y !== rightSize.y) {
        throw new Error("[Sudoo-Matrix] Only matrixes with same size can add");
    }

    const result: Matrix<T> = initMatrix(leftSize);

    for (let i = 0; i < leftSize.x; i++) {
        for (let j = 0; j < leftSize.y; j++) {

            if (typeof addFunction === 'function') {

                result[i][j] = addFunction(left[i][j], right[i][j]);
            } else {

                const currentLeft: any = left[i][j];
                const currentRight: any = right[i][j];

                const isNumber: boolean = typeof currentLeft === 'number' && typeof currentRight === 'number';
                const isString: boolean = typeof currentLeft === 'string' && typeof currentRight === 'string';

                if (!(isNumber || isString)) {
                    throw new Error("[Sudoo-Matrix] Please provide addFunction for not-number or not-string value");
                }
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                result[i][j] = currentLeft + currentRight;
            }
        }
    }

    return result;
};
