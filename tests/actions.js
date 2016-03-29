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
      .click('button.petition-bar__submit-button')
      .waitForElementVisible('.thank-you__cta', 2000)
      .assert.elementPresent('a[type=f]')
      .assert.elementPresent('a[type=t]')
      .end()
  }
}
