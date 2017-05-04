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
    * Updates static text when button clicked
    *
    * @method updateStatic
    */

    updateStatic: function() {
      this.world_static = 'Hello, ' + this.world + '!';
    },

    /**
    * Simple method to pop an alert window
    *
    * @method showMsg
    */

    showMsg: function() {
      alert('May the 4th be with you!');
    }
  });
})();
