// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const os = require('os');

const terminal_name = "git";

const git_status = "git status";
const git_list_branches = "git branch --list";

const git_checkout = "git checkout";
const git_create_branch = "git checkout -b";
const git_delete_branch = "git branch -D";
const git_reset_branch = "git checkout -B";

const git_add_submodule = "git submodule add";
const git_update_submodule = "git submodule update --recursive --remote";
const git_init_submodule = "git submodule update --init --recursive";

const git_commit = "git commit";
const git_pull = "git pull";
const git_push = "git push";
const git_fetch = "git fetch";
const git_add = "git add";
const git_add_all = "git add .";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	var path = vscode.workspace.workspaceFolders[0].uri.path; //gets the main path of the workspace you opened

	var cd_into_ws = "cd " + path;
	var and = " ; ";

	let cmd_status = vscode.commands.registerCommand('git-cli-helper.status', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_status, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});
	//============================================================================

	let cmd_list_branches = vscode.commands.registerCommand('git-cli-helper.list_branches', async function(){

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_list_branches, true);

		console.log("running: build");

		vscode.window.showInformationMessage('Building!');
	});
	//==============================================================================

	let cmd_checkout = vscode.commands.registerCommand('git-cli-helper.checkout', async function () {

		const term = await getTerminal(terminal_name);

		const branch = await vscode.window.showInputBox({
			placeHolder: "Please Type a Branch"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_checkout + " " + branch, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_create_branch = vscode.commands.registerCommand('git-cli-helper.create_branch', async function () {

		const term = await getTerminal(terminal_name);

		const branch = await vscode.window.showInputBox({
			placeHolder: "Please Type a Branch"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_create_branch + " " + branch, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_reset_branch = vscode.commands.registerCommand('git-cli-helper.reset_branch', async function () {

		const term = await getTerminal(terminal_name);

		const branch = await vscode.window.showInputBox({
			placeHolder: "Please Type a Branch"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_reset_branch + " " + branch, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_delete_branch = vscode.commands.registerCommand('git-cli-helper.delete_branch', async function () {

		const term = await getTerminal(terminal_name);

		const branch = await vscode.window.showInputBox({
			placeHolder: "Please Type a Branch"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_delete_branch + " " + branch, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_add_submodule = vscode.commands.registerCommand('git-cli-helper.add_submodule', async function () {

		const term = await getTerminal(terminal_name);

		const link = await vscode.window.showInputBox({
			placeHolder: "Please Type the Link to the Repository"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_add_submodule + " " + link, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_update_submodule = vscode.commands.registerCommand('git-cli-helper.update_submodule', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_update_submodule, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_init_submodule = vscode.commands.registerCommand('git-cli-helper.init_submodule', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_init_submodule, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_commit = vscode.commands.registerCommand('git-cli-helper.commit', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_commit, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_pull = vscode.commands.registerCommand('git-cli-helper.pull', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_pull, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_push = vscode.commands.registerCommand('git-cli-helper.push', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_push, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_fetch = vscode.commands.registerCommand('git-cli-helper.fetch', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_fetch, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_add = vscode.commands.registerCommand('git-cli-helper.add', async function () {

		const term = await getTerminal(terminal_name);

		const file = await vscode.window.showInputBox({
			placeHolder: "Please Type a File"
		});

		term.show();
		
		term.sendText(cd_into_ws + and + git_add + " " + file, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	let cmd_add_all = vscode.commands.registerCommand('git-cli-helper.add_all', async function () {

		const term = await getTerminal(terminal_name);

		term.show();
		
		term.sendText(cd_into_ws + and + git_add_all, true);

		console.log("running command...");

		vscode.window.showInformationMessage('Command Executed!');
	});

	context.subscriptions.push(
		cmd_status,
		cmd_list_branches,
		cmd_checkout,
		cmd_create_branch,
		cmd_reset_branch,
		cmd_delete_branch,
		cmd_add_submodule,
		cmd_update_submodule,
		cmd_init_submodule,
		cmd_commit,
		cmd_pull,
		cmd_push,
		cmd_fetch,
		cmd_add,
		cmd_add_all
	);
}

function getTerminal(name){
	var git_terminal_active = false; //is the terminal used for commands active?
	var git_terminal_index; //which index is the terminal at?
	var operating_system = os.platform();

	for(var i = 0; i < vscode.window.terminals.length; i++){
		const current = vscode.window.terminals[i];
		
		if(current.name == name){
			git_terminal_active = true;
			git_terminal_index = i;
		}
	}

	if(git_terminal_active){
		return vscode.window.terminals[git_terminal_index];
	}
	else{
		if(operating_system === 'win32')
			return vscode.window.createTerminal({
				name: name,
				shellPath: "powershell"
			});
		else
			return vscode.window.createTerminal(name);
	}
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
