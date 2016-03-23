var request = require('request');

module.exports = {
  'Post Action': function( _browser ) {
    var time = +(new Date())

    _browser
      .url('https://actions.sumofus.org/a/boycott-apple')
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('input[name="name"]')
      .setValue('input[name=name]', 'Test User')
      .setValue('input[name=email]', 'omar+' + time + '@sumofus.org')
      .setValue('input[name=postal]', 'W1')
      .click('div.selectize-input')
      .waitForElementVisible('div.petition-bar__country-selector ', 1000)
      .click('div.selectize-input')
      .click('div[data-value=AS]')
      .click('button.petition-bar__submit-button')
      .waitForElementVisible('div.thank-you__action-confirmation', 2000)
      .assert.containsText('.thank-you__cta', 'Share the campaign with your friends to triple your impact!')
      .assert.elementPresent('a[type=f]')
      .assert.elementPresent('a[type=t]')
      .end()
  }
}
