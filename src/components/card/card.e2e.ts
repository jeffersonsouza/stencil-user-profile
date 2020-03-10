import { newE2EPage } from '@stencil/core/testing';

describe('profile-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<profile-card></profile-card>');

    const element = await page.find('profile-card');
    expect(element).toHaveClass('hydrated');
  });
});
