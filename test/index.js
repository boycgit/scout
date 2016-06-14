import test from 'ava';
import main from '../index';

test('index file', t => {
	t.is(main(), 'Hello Tmall');
});