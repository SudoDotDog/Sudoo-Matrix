/**
 * @author WMXPY
 * @namespace Matrix
 * @description Add
 */

import { Matrix, MatrixSize } from "./declare";
import { getMatrixSize } from "./util";

export const matrixAdd = <T extends any = any>(left: Matrix<T>, right: Matrix<T>): Matrix<T> => {

    const leftSize: MatrixSize = getMatrixSize(left);
    const rightSize: MatrixSize = getMatrixSize(right);

    if (leftSize.x !== rightSize.x
        && leftSize.y !== rightSize.y) {
        throw new Error("[Sudoo-Matrix] Only matrixes with same size can add");
    }

    return;
};
