/**
 * @author WMXPY
 * @namespace Matrix
 * @description Minus
 */

import { ManipulateFunction, Matrix, MatrixSize } from "./declare";
import { getMatrixSize, initMatrix } from "./util";

export const matrixMinus = <T extends any = any>(left: Matrix<T>, right: Matrix<T>, minusFunction?: ManipulateFunction<T>): Matrix<T> => {

    const leftSize: MatrixSize = getMatrixSize(left);
    const rightSize: MatrixSize = getMatrixSize(right);

    if (leftSize.x !== rightSize.x
        || leftSize.y !== rightSize.y) {
        throw new Error("[Sudoo-Matrix] Only matrixes with same size can minus");
    }

    const result: Matrix<T> = initMatrix(leftSize);

    for (let i = 0; i < leftSize.x; i++) {
        for (let j = 0; j < leftSize.y; j++) {

            if (typeof minusFunction === 'function') {

                result[i][j] = minusFunction(left[i][j], right[i][j]);
            } else {

                const currentLeft: any = left[i][j];
                const currentRight: any = right[i][j];
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                result[i][j] = currentLeft + currentRight;
            }
        }
    }

    return result;
};
