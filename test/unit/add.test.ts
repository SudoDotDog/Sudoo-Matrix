/**
 * @author WMXPY
 * @namespace Matrix
 * @description Add
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { matrixAdd } from '../../src/add';
import { Matrix } from '../../src/declare';

describe('Given [Add] function', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('matrix-add');

    it('should be able to add two method together', (): void => {

        const left: Matrix<number> = [
            [1, 2],
            [3, 4],
        ];
        const right: Matrix<number> = [
            [2, 1],
            [4, 3],
        ];

        const result: Matrix<number> = matrixAdd(left, right);

        expect(result).to.be.deep.equal([]);
    });
});
