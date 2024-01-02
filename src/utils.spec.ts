import { Test, TestingModule } from '@nestjs/testing';
import { ethers } from 'ethers';
import { EvmHelpers } from './evm-helpers';

describe('convert 32 byte string tests', () => {
    const target = 'The little dog barks';
    it('should encode to 32 byte string', () => {
        const converted = ethers.encodeBytes32String(target);
        console.log(`encoded" ${converted}`);
        const x = ethers.decodeBytes32String(converted);
        console.log(`decoded: ${x}`);

    });

    it('should convert BigInt to hex', () => {
        const x = EvmHelpers.dec2hex('773738363261118345');
        expect(x).toBe('abcdef123456789');
    });
});