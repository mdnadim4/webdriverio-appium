import Utils from './Utils'
const utils = new Utils()

export default class AddnotePage {

    // Note: public keyword need to use for both during typescript

    get skip () {
        return '//*[@text="SKIP"]'
    }
    get skipTutorial() {
        return '//*[@text="Add note"]'
    }
    get addNote() {
        return '//*[@text="Add note"]'
    }
    get text() {
        return '//*[@text="Text"]'
    }
    get editing() {
        return '//*[@text="Editing"]'
    }
    get inputEdit() {
        return '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    }
    get noteData() {
        return '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    }
    get editBtn() {
        return '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    }
    get viewNote() {
        return '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    }
    get note() {
        return '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    }
    get moreBtn() {
        return '~More'
    }
    get deleteOpt() {
        return '//*[@text="Delete"]'
    }
    get okBtn() {
        return '//*[@text="OK"]'
    }
    get navIcon() {
        return '//*[@content-desc="More"]/android.widget.ImageView'
    }
    get trashIcon() {
        return '//*[@text="Trash Can"]'
    }


    async clickOnSkip() {
        await $(this.skip).click()
    }
    async assertSkipTutorial() {
        await expect(this.skipTutorial).toBeDisplayed()
    }
    async clickOnAddNote() {
        await $(this.addNote).click()
    }
    async clickOnText() {
        await $(this.text).click()
    }
    async verifyEditingText() {
        await expect($(this.editing)).toBeDisplayed()
    }
    async inputDataField() {
        await $(this.inputEdit).setValue('Javascript Framework')
    }
    async writeDataNote() {
        await $(this.noteData).setValue('Selenium\nCypress\nWebdriverIO\nNightwatch\nPlaywright')
    }
    async saveChanges() {
        await driver.back()
        await driver.back()
    }
    async verifyEditBtn() {
        await expect(this.editBtn).toBeDisplayed()
    }
    async verifyViewNote() {
        await expect(this.viewNote).toBeDisplayed()
    }
    async clickOnNote() {
        await $(this.note).click()
    }
    async clickOnMoreBtn() {
        await $(this.moreBtn).click()
    }
    async clickOnDelete() {
        await $(this.deleteOpt).click()
    }
    async clickOnOkBtn() {
        await $(this.okBtn).click()
    }
    async clickOnNavIcon() {
        await $(this.navIcon).click()
    }
    async clickOnTrashIcon() {
        await $(this.trashIcon).click()
    }
    async verifyNoteText() {
        await $(this.note).getText()
    }
    async verifyDeletedText() {
        const trashItem = await $(this.note)
        await expect(trashItem).toHaveText(this.note)
    }
    async singleBack() {
        await driver.back()
    }






}