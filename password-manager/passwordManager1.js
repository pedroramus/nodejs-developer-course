console.log("starting password manager");

var storage = require('node-persist');

storage.initSync();

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);

    storage.setItemSync('accounts', accounts);
}

function getAccount(accountName) {
	var accounts = storage.getItemSync('accounts');
	console.log("ACCOUNTS: ", accounts);
	for (var i = accounts.length - 1; i >= 0; i--) {
		if(accounts[i].name === accountName) {
			return accounts[i];
		}
	}
}

var ac = {
    name: 'Facebook',
    username: 'face',
    password: '123'
};
var my = createAccount(ac);
//console.log("ESTOU Procurando: ", getAccount("Facebook"));
