/**
 * @author WMXPY
 * @namespace Matrix
 * @description Util
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Matrix } from '../../src/declare';
import { initMatrix, validateMatrix } from '../../src/util';

describe('Given [Util] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('matrix-util');

    it('should be able to validate matrix - other', (): void => {

        const result: boolean = validateMatrix(chance.string() as any);

        expect(result).to.be.false;
    });

    it('should be able to validate matrix - empty row', (): void => {

        const result: boolean = validateMatrix([]);

        expect(result).to.be.false;
    });

    it('should be able to validate matrix - empty column', (): void => {

        const result: boolean = validateMatrix([[], []]);

        expect(result).to.be.false;
    });

    it('should be able to init matrix', (): void => {

        const result: Matrix<any> = initMatrix({
            x: 2,
            y: 3,
        });

        expect(result).to.be.deep.equal([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
        ]);
    });
});
