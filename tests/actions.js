module.exports = {
  'Post Action': function( browser ) {
    browser
      .url('https://actions.sumofus.org/a/boycott-apple')
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('input[name="name"]')
      .setValue('input[name=name]',  'Omar')
      .setValue('input[name=email]', 'omar@sumofus.org')
      .setValue('input[name=postal]', 'W1')
      .click('div.selectize-input')
      .waitForElementVisible('div.dropdown-active', 1000)
      .click('div[data-value=AS]')
      .waitForElementVisible('div.item', 2000)
      .assert.containsText('div.item', 'American Samoa')
      .click('button.action-form__submit-button')
      .waitForElementVisible('.thank-you__thanks', 2000)


    // Test a french language page
      .url('https://actions.sumofus.org/a/segolene-royal-defendez-les-abeilles-contre-les-lobbies-de-l-industrie-chimique')
      .waitForElementVisible('button.action-form__submit-button', 1000)
      .assert.containsText('.action-form__welcome-name', 'Omar')
      .click('button.action-form__submit-button')
      .waitForElementVisible('.two-step__question', 2000)
      .assert.containsText('.two-step__question', 'partager maintenant la campagne')
      .click('.two-step__accept')
      .assert.elementPresent('a[type=f]')
      .assert.elementPresent('a[type=t]')
      .end()

  }
}
