import execa from 'execa';
import test from 'ava';

test('test result', async t => {
    t.is(await execa.stdout('./cli.js', ['Проверка']), 'Просовесеркаса');
});

test('test result', async t => {
    t.is(await execa.stdout('./cli.js', ['Проверка', '--dialect', 'ф']), 'Профовеферкафа');
});

