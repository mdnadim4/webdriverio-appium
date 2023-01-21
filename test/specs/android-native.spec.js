describe('Android Native Feature Test', () => { 

    it('Acces an activity directly', async () => {

        // Access Activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(3000)

        // Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()

    });

    it('Working with Alert Box', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await $('//*[@content-desc="OK Cancel dialog with a message"]').click()

        // await driver.acceptAlert()
        // await driver.dismissAlert()

        // Click on OK button
        await $('//*[@resource-id="android:id/button1"]').click()

        // Click on Cancel button
        // await $('//*[@text="Cancel"]').click()

        await expect('//*[@resource-id="android:id/alertTitle"]').not.toExist()

    });

    it('Verify Vertical Scrolling', async () => {

        await $('~App').click()
        await $('~Activity').click()
        // Scroll to End
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)').click()

        // ScrollText Into View (Best Practice)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        await expect($('~Secure Dialog')).toExist()

    });

    it('Verify Horizontal Scrolling', async () => {
        
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        await driver.pause(3000)

    });

    it.only('Verify Date Picker', async () => {
        
        // Access the direct date page
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")

        // Get Current Date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate = date.getText()

        // Click on Change Date
        await $('//*[@content-desc="change the date"]').click()

        // Horizontal scroll to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        // Select the 10th Date
        await $('//*[@text="10"]').click()

        // Click on OK button
        await $('//*[@text="OK"]').click()

        // Assert the updated date
        await expect(await date.getText()).not.toEqual(currentDate)

    });

 })