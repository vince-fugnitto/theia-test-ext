import * as vscode from 'vscode';
import { writeFileSync } from 'fs';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "test-ext" is now active!');
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Creating File...');
		let workspaceEdit = new vscode.WorkspaceEdit();
		const workspacePath = vscode.workspace.workspaceFolders![0];
		let pathUri = vscode.Uri.file(workspacePath.uri.fsPath + '/test/test.txt');
		workspaceEdit.createFile(pathUri);
		vscode.workspace.applyEdit(workspaceEdit).then(() => {
			writeFileSync(pathUri.fsPath, 'TEST CONTENT\n');
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
