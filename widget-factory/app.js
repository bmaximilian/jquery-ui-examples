$(function() {
  /**
   * Set the text of the counterOneRef
   *
   * @return {void}
   */
  function createCounterOneText(value) {
    if (!counterOneRef) return;

    counterOneRef.text('Counter 1: ' + (value || 0));
  }

  var counterOneRef = $('#counter-1-ref');
  createCounterOneText();

  // Initialize counter 1
  $('#counter-1')
  .counter()
  .on('change', function(event, values) {
    console.log('Counter 1 changed it\'s value from ' + values.oldValue + ' to ' + values.newValue);
    createCounterOneText(values.newValue);
  });

  // Initialize counter 2
  $('#counter-2').counter({
    incrementButtonLabel: 'Add',
    decrementButtonLabel: 'remove',
  });

  // Initialite counter 3
  $('#counter-3').counter({
    count: 1000,
    incrementStep: 10,
    decrementStep: 100,
  });
})
