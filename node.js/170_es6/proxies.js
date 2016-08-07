// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/07/2016
// Description: Illustrate the ES6 feature "proxies".
// ====================================================================================================================

// ====================================================================================================================
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation, either version 3 of the License, or any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
// details.
//
// You should have received a copy of the GNU General Public License along with this program.
// If not, see http://www.gnu.org/licenses/.
// ====================================================================================================================

'use strict';

function basics () {
    console.log('\n=== basics ===');
    var target = {};
    var handler = {};
    var proxy = new Proxy(target, handler);
    proxy.a = 'b';
    console.log(target.a);
    console.log(proxy.c === undefined);

    handler = {
        get (target, key) {
            console.log(`Get on property ${key} => ${target[key]}`);
            return target[key];
        },
        set (target, key, value) {
            if (key.length !== 0 && key[0] === '_') throw new Error(`${key} is not public!`);
            target[key] = value;
            return true;
        }
    };


    target = {};
    proxy = new Proxy(target, handler);
    proxy.a = 'b';
    proxy.a;
    proxy.b;
    proxy.c = 'abc';
    //proxy._c = 'def';
}

function revocableProxy () {
    console.log('\n=== revocableProxy ===');
    var target = {};
    var handler = {};
    var {proxy, revoke} = Proxy.revocable(target, handler);
    proxy.a = 'b';
    console.log(proxy.a);
    revoke();
    // console.log(proxy.a);
}

function proxyHas () {
    console.log('\n=== proxyHas ===');
    var target = {_a: 'private value'};
    var handler = {
        get (target, key) {
            if (handler.has(target, key)) return target[key];
            else throw new Error(`${key} is not defined or is not public!`);
        },
        set (target, key, value) {
            if (key.length !== 0 && key[0] === '_') throw new Error(`${key} is private!`);
            else target[key] = value;
            return true;
        },
        has (target, key) {
            if (key.length !== 0 && key[0] === '_') return false;
            else return key in target;
        }
    };
    var proxy = new Proxy(target, handler);
    proxy.a = '123';
    console.log(proxy.a);
    for (let k in proxy) {
        console.log(`key: ${k} = ${proxy[k]}`);
    }
}

function isPrivate (key) {
    return key.length !== 0 && key[0] === '_';
}

function printAll (obj) {
    for (let key in obj) console.log(`${key} = ${obj[key]}`);
}

function proxyDeleteProperty () {
    console.log('\n=== proxyDelete ===');
    var target = {_c: '987'};
    var handler = {
        get (target, key) {
            if (isPrivate(key)) throw new Error(`${key} is not public!`);
            return target[key];
        },
        set (target, key, value) {
            if (isPrivate(key)) throw new Error(`${key} is not public!`);
            target[key] = value;
            return true;
        },
        deleteProperty (target, key) {
            if (isPrivate(key)) throw new Error(`${key} is not public!`);
            return true;
        }
    };
    var proxy = new Proxy(target, handler);
    proxy.a = '123';
    proxy.b = '321';
    delete proxy.a;
    //delete proxy._c;
    printAll(Object.keys(proxy));
}

basics();
revocableProxy();
proxyHas();
proxyDeleteProperty();
