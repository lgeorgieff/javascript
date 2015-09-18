/**
 * @fileoverview Illustrates how to annotate functions and methods with JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


/**
 * Creates a shallow copy of the passed array and returns it.
 *
 * @public
 * @throws {Error} Is thrown if <tt>throwErrorIfInvalid</tt> is set to <tt>true</tt> and the given
 *         array <tt>arr</tt> is not a valid array.
 *
 * @return {Array<T>} A shallow copy of <tt>arr</tt>
 *
 * @param {Array<T>} arr An array that will be cloned.
 * @param {boolean=} throwErrorIfInvalid If set to <tt>true</tt>, <tt>arr</tt> is checked whether it
 *       is a valid array or not. This argument is optional. The default value is <tt>false</tt>.
 */
function cloneArray (arr, throwErrorIfInvalid) {
  if (throwErrorIfInvalid && !(arr instanceof Array)) throw new Error('invalid array');
  else if (!(arr instanceof Array)) return [];
  else return arr.slice(0);
}
