describe('Android Input All Elements', () => { 

    it('Working with input text field', async () => {

        // Click on Views
        await $('~Views').click()

        // Click on Auto Complete
        await $('//*[@text="Auto Complete"]').click()

        // Click on Screen Top
        await $('//*[@content-desc="1. Screen Top"]').click()

        // Country Element
        const country = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')

        // Input Country Value
        await country.addValue('Australia')

        // Country Input Value Assertion
        expect(country).toHaveText('Australia')

    });

 })