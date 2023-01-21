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

    it('Verify delete note & trash deleted item', async () => {
        await driver.back()

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText()

        // Click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click()

        // Click on More button
        await $('~More').click()

        // Click on Delete option
        await $('//*[@text="Delete"]').click()

        // CLick on OK button
        await $('//*[@text="OK"]').click()

        // Click on Nav icon
        await $('//*[@content-desc="More"]/android.widget.ImageView').click()

        // Click on Trash icon
        await $('//*[@text="Trash Can"]').click()

        // Assertion deleted note
        const trashItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')

        await expect(trashItem).toHaveText(note)
    });

});