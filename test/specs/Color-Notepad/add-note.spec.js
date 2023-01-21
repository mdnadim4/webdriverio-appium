describe('Verify Add Notes', () => {

    it('Verify skip tutorial', async () => {
        await $('//*[@text="SKIP"]').click()

        await expect(await $('//*[@text="Add note"]')).toBeDisplayed()
    });

    it('Add a note, save changes & verify note', async () => {
        // Click on Add note
        await $('//*[@text="Add note"]').click()

        // Click on text
        await $('//*[@text="Text"]').click()

        // Verify editing text
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // Input data on edit field
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue('Javascript Framework')

        // Write data into Note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('Selenium\nCypress\nWebdriverIO\nNightwatch\nPlaywright')

        // Save the changes
        await driver.back()
        await driver.back()

        // Verify the edit button & view note
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toBeDisplayed()
        
    });

});