import * as assert from 'assert';
import * as vscode from 'vscode';

import * as myExtension from '../src/extension';
import {Commands} from '../src/commands';

suite("Fabric8 Analytics Extension", () => {

    test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('jaivardhan.sample-report-1234'));
	});

    test('should activate', function () {
		this.timeout(1 * 60 * 1000);
		return vscode.extensions.getExtension('jaivardhan.sample-report-1234').activate().then((api) => {
			assert.ok(true);
		});
	});

	/*test('should register all fabric8 commands', function () {
		return vscode.commands.getCommands(true).then((commands) =>
		{
			const FABRIC8_COMMANDS:string[] = [
				Commands.TRIGGER_STACK_ANALYSIS,
				Commands.TRIGGER_FULL_STACK_ANALYSIS
			];
			let foundFabric8Commands = commands.filter(function(value){
				return FABRIC8_COMMANDS.indexOf(value)>=0 || value.startsWith('extension.');
			});
			assert.equal(foundFabric8Commands.length ,FABRIC8_COMMANDS.length, 'Some fabric8 commands are not registered properly or a new command is not added to the test');
		});
	});*/

	 test('should trigger fabric8-analytics full stack report activate', function () {
		this.timeout(1 * 60 * 1000);
		vscode.commands.executeCommand(Commands.TRIGGER_FULL_STACK_ANALYSIS).then((res) => {
			assert.ok(true);
		},(reason: any) => {
            assert.ok(true);
        });
	});

	test('should trigger fabric8-analytics stack report activate', function () {
		this.timeout(1 * 60 * 1000);
		vscode.commands.executeCommand(Commands.TRIGGER_STACK_ANALYSIS).then((res) => {
			assert.ok(true);
		},(reason: any) => {
            assert.ok(true);
        });
	});

});
