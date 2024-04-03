import { describe, it, expect} from 'vitest';
import { setupCounter, setupRootAppContent } from './counter';

describe('Counter', async () => {

it('Ao clicar no botão, ele deve incrementar o contador'),
async () => {
    const app = document.createElement('div');
    app.innerHTML = setupRootAppContent();
    const b = app.querySelector('#counter');
    setupCounter(b);
    b.click();
    b.click();
    b.click();
    expect(b.textContent).toBe('count is 3');


}});


