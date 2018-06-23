import * as React from 'react';
import { Bem, Block, Elem, withMods } from '../src';
import { getNode } from './helpers/node';

describe('UniqId:', () => {
    it('generates unique id', () => {
        class MyBlock extends Block {
            protected block = 'MyBlock';

            protected attrs() {
                return { id: this.generateId() };
            }
        }

        const wrapper = getNode(
            <MyBlock />
        );

        expect(wrapper.prop('id')).toMatch(/uniq\d+$/);
    });

    it('resets id counter', () => {
        class MyBlock extends Block {
            protected block = 'MyBlock';

            constructor(props: any) {
                super(props);
                this.resetId();
            }

            protected attrs() {
                return { id: this.generateId() };
            }
        }

        const wrapper = getNode(
            <MyBlock />
        );

        expect(wrapper.prop('id')).toBe('uniq1');
    });
});