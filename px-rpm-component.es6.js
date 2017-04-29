(function() {
  Polymer({

    is: 'px-rpm-component', 

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      boxSize: {
        type: Number,
        value: 50,
        notify: true
      },
      world: {
        type: String,
        value: '',
        notify: true
      },
      world_static: {
        type: String,
        value: '',
        notify: true
      },
      counterValue: {
        type: Number,
        value: 0,
        notify: true
      }
    },

    /**
    * Handles click on the link element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    },

    /**
    * Handles click on the button element
    *
    * @method btnClick
    */
    // btnClick: function(event, detail, sender) {
    //   console.log('You clicked the button...');
    // },

    /**
    * Increments the counter
    *
    * @method increment
    */
    increment: function() {
      this.counterValue++;
    },

    updateStatic: function() {
      this.world_static = 'Hello, ' + this.world + '!';
    }
  });
})();
