import AddnotePage from "../../pageobjects/AddnotePage";
const addnote = new AddnotePage()

describe('Verify Add Notes', () => {

    it('Verify skip tutorial', async () => {
        
        // Click on Skip
        addnote.clickOnSkip()

        // Assertion Skip Tutorial
        addnote.assertSkipTutorial()
    });

    it('Add a note, save changes & verify note', async () => {
        // Click on Add note
        addnote.clickOnAddNote()

        // Click on text
        addnote.clickOnText()

        // Verify editing text
        addnote.verifyEditingText()

        // Input data on edit field
        addnote.inputDataField()

        // Write data into Note
        addnote.writeDataNote()

        // Save the changes
        addnote.saveChanges()

        // Verify the edit button & view note
        addnote.verifyEditBtn()
        addnote.verifyViewNote()
    });

    it('Verify delete note & trash deleted item', async () => {
        
        // Single time back
        addnote.singleBack()

        // Click on the note
        addnote.clickOnNote()

        // Click on More button
        addnote.clickOnMoreBtn()

        // Click on Delete option
        addnote.clickOnDelete()

        // CLick on OK button
        addnote.clickOnOkBtn()

        // Click on Nav icon
        addnote.clickOnNavIcon()

        // Click on Trash icon
        addnote.clickOnTrashIcon()

        // Assertion deleted note
        addnote.verifyDeletedText()
    });

});