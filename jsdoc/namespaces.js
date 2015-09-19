/**
 * @fileoverview Illustrates how to annotate namespaces with JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 */


/**
 * A namespace that contains several utility functions.
 *
 * @namespace
 * @memberOf module:infrastructure
 */
var Utils = {
    /**
     * Executes a given function with the delay {@link module:infrastructure.Utils.delay}.
     *
     * @param {function()} cb The callback that is post-poned.
     */
    postPone: function (cb) {
        setTimeout(cb, this.delay);
    },

    /**
     * The delay whcih is used for the post pone operation.
     *
     * @type {number}
     * @default 3000
     */
    delay: 3000
};

/**
 * @module infrastructure
 */
module.exports = exports = Utils;
