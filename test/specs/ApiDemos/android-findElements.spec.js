describe('Android Elements Test', () => { 
    
    it('Find element by Accessibility ID', async () => {

        // Verify App Element
        const appOption = await $('~App')
        await expect(appOption).toBeExisting()
        await appOption.click()

        // Verify Action Bar Element
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
        // Click on Action Bar Element
        actionBar.click()

        // Verify Action Provider Element
        const actionProvider = await $('~Action Provider')
        await expect(actionProvider).toBeExisting()
    });

    it('Find element by Class Name', async () => {

        // Verify Content Element
        const content = await $('android.widget.TextView')
        await expect(content).toHaveText('API Demos')

    });

    it('Find element by Xpath', async () => {

        // Find element by attribute
        const alertDialog = await $('//android.widget.TextView[@content-desc="App"]')
        alertDialog.click()

        // Find by resource id
        const resouceId = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]')
        resouceId.click()

        // Find element by Text
        const text = await $('//android.widget.TextView[@text="Command two"]')
        text.click();

    });

    it('Find element by UiAutomator', async () => {
        await $('android=new UiSelector().textContains("App")').click()
        await $('android=new UiSelector().textContains("Alert Dialogs")').click()
        await $('android=new UiSelector().textContains("List dialog")').click()
        await $('android=new UiSelector().textContains("Command two")').click()
    });

    it('Find Multiple Elements', async () => {
        const expectedList = ['API Demos',"Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views']
        const actualList = []

        const textList = await $$('android.widget.TextView')

        for(const element of textList) {
            actualList.push(await element.getText())
        }

        await expect(actualList).toEqual(expectedList)
    });

 })

