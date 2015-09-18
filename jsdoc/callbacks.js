/**
 * @fileoverview Illustrates how to annotate callbacks as parameter types.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


/**
 * Invokes the passed callback if <tt>arg</tt> evaluates to true.
 *
 * @public
 * @throw {Error} If <tt>cb</tt> is not a function.
 *
 * @param {*} arg An argument that is evaluated to a boolean. And passed to <tt>cb</tt> in case it is invoked.
 * @param {eventCallback} cb A callback that is invoked if <tt>arg</tt> evaluates to true.
 */
function fireCallbackIfTrue(arg, cb) {
    if (typeof cb !== 'function') throw new Error('cb must be a function');
    if (arg) cb(arg);
}


/**
 * A global callback type.
 *
 * @callback eventCallback
 * @param {!string} arg The event message.
 */
