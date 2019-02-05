/**
 * Creating a counter widget
 */
$(function() {
  $.widget('custom.counter', {
    /**
     * The initial options
     *
     * @type {object}
     */
    options: {
      count: 0,
      incrementButtonLabel: '+',
      incrementStep: 1,
      decrementStep: 1,
      decrementButtonLabel: '-',
    },

    /**
     * Lifecycle hook that is executed when the widget is created
     *
     * @return {void}
     */
    _create() {
      this.initializeElements();
      this.element.addClass('counter');
      this.appendElements();

      // Assigning self to reference this to access the widget in the click handler
      var self = this;
      var handleButtonClick = function(event, increment) {
        var oldValue = self.options.count;
        var newValue = oldValue + increment;

        // Trigger an event to be able to react on changes in the main app
        self.element.trigger('change', {
          oldValue: oldValue,
          newValue: newValue,
          originalEvent: event,
        });

        // Set the new count value
        self.option({ count: newValue });
      }

      // Attaching the click handler to the elements of our widget
      this.elements.incrementButton.on('click', function (event) {
        handleButtonClick(event, self.options.incrementStep);
      });
      this.elements.decrementButton.on('click', function (event) {
        handleButtonClick(event, self.options.decrementStep * -1);
      })
    },

    /**
     * Lifecycle hook that is executed when the options should change
     *
     * @return {void}
     */
    _setOptions() {
      // Apply the options (the default functionality)
      this._superApply(arguments);

      // Custom functionality of our widget
      this.render();
    },
    /**
     * Lifecycle hook that is executed when the component is unmounted
     */
    _destroy() {
      var self = this;
      Object.keys(this.elements).forEach(function (element) {
        self.elements[element].remove();
      });
    },
    /**
     * Create the elements needed for the counter widget
     *
     * @return {void}
     */
    initializeElements() {
      this.elements = {
        // A label to show the count
        countLabel: $('<span>', {
          text: this.options.count,
          class: 'counter__label',
        }),

        // A button to increase the counter
        incrementButton: $('<button>', {
          text: this.options.incrementButtonLabel,
          class: 'counter__increment-button',
        }),

        // A button to decrease the counter
        decrementButton: $('<button>', {
          text: this.options.decrementButtonLabel,
          class: 'counter__decrement-button',
        }),
      };
    },

    /**
     * Append the initialized elements to the target element of the widget
     *
     * @return {void}
     */
    appendElements() {
      var self = this;
      Object.keys(this.elements).forEach(function (element) {
        self.element.append(self.elements[element]);
      });
    },

    /**
     * Renders the counter when changes are made
     *
     * @return {void}
     */
    render() {
      // Update the label
      this.elements.countLabel.text(this.options.count);
    }
  });
});
