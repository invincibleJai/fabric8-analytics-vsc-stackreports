'use strict';

import * as vscode from 'vscode';

import * as path from 'path';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind } from 'vscode-languageclient';

export function activate(context: vscode.ExtensionContext) {

  /******************* START::  LSP client ***********************/

  // The server is implemented in node
	let serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
	// The debug options for the server
	let debugOptions = { execArgv: ["--nolazy", "--debug=6009"] };

  let lastTagged = context.globalState.get('lastTagged', '');
    if(lastTagged) {
       process.env['RECOMMENDER_API_TOKEN'] = lastTagged;
    }
	
	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run : { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}
	
	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents 'plaintext','xml','json'
		documentSelector: [],
		synchronize: {
			// Synchronize the setting section 'languageServerExample' to the server
			configurationSection: 'languageServerExample',
			// Notify the server about file changes to '.clientrc files contain in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		}
	}
	
	// Create the language client and start the client.
	let disposableLSp = new LanguageClient('languageServerExample', 'Language Server Example', serverOptions, clientOptions).start();
	
  /******************* END ::  LSP client ***********************/

	let previewUri = vscode.Uri.parse('fabric8-analytics-widget://authority/fabric8-analytics-widget');

	const loader = `<html>
<link href="https://fonts.googleapis.com/css?family=Exo+2:100,400" rel="stylesheet"> 
<style>html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}

body {
  background: #1e1e1e;
}

#caption {
  font-family: 'Exo 2', sans-serif;
  font-weight: 100;
}

#tip > #text {
  color: #666
}

.blob {
  width: 2rem;
  height: 2rem;
  background: rgba(230, 230, 230, 0.85);
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 1rem);
  top: calc(42% - 1rem);
  /*display: inline;*/
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.35);
}

.blob-2 {
  -webkit-animation: animate-to-2 3.5s infinite;
          animation: animate-to-2 3.5s infinite;
}

.blob-3 {
  -webkit-animation: animate-to-3 3.5s infinite;
          animation: animate-to-3 3.5s infinite;
}

.blob-1 {
  -webkit-animation: animate-to-1 3.5s infinite;
          animation: animate-to-1 3.5s infinite;
}

.blob-4 {
  -webkit-animation: animate-to-4 3.5s infinite;
          animation: animate-to-4 3.5s infinite;
}

.blob-0 {
  -webkit-animation: animate-to-0 3.5s infinite;
          animation: animate-to-0 3.5s infinite;
}

.blob-5 {
  -webkit-animation: animate-to-5 3.5s infinite;
          animation: animate-to-5 3.5s infinite;
}

@-webkit-keyframes animate-to-2 {
  25%, 75% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}

@keyframes animate-to-2 {
  25%, 75% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@-webkit-keyframes animate-to-3 {
  25%, 75% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@keyframes animate-to-3 {
  25%, 75% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@-webkit-keyframes animate-to-1 {
  25% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  50%, 75% {
    -webkit-transform: translateX(-4.5rem) scale(0.6);
            transform: translateX(-4.5rem) scale(0.6);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@keyframes animate-to-1 {
  25% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  50%, 75% {
    -webkit-transform: translateX(-4.5rem) scale(0.6);
            transform: translateX(-4.5rem) scale(0.6);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@-webkit-keyframes animate-to-4 {
  25% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  50%, 75% {
    -webkit-transform: translateX(4.5rem) scale(0.6);
            transform: translateX(4.5rem) scale(0.6);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@keyframes animate-to-4 {
  25% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  50%, 75% {
    -webkit-transform: translateX(4.5rem) scale(0.6);
            transform: translateX(4.5rem) scale(0.6);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@-webkit-keyframes animate-to-0 {
  25% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  50% {
    -webkit-transform: translateX(-4.5rem) scale(0.6);
            transform: translateX(-4.5rem) scale(0.6);
  }
  75% {
    -webkit-transform: translateX(-7.5rem) scale(0.5);
            transform: translateX(-7.5rem) scale(0.5);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@keyframes animate-to-0 {
  25% {
    -webkit-transform: translateX(-1.5rem) scale(0.75);
            transform: translateX(-1.5rem) scale(0.75);
  }
  50% {
    -webkit-transform: translateX(-4.5rem) scale(0.6);
            transform: translateX(-4.5rem) scale(0.6);
  }
  75% {
    -webkit-transform: translateX(-7.5rem) scale(0.5);
            transform: translateX(-7.5rem) scale(0.5);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@-webkit-keyframes animate-to-5 {
  25% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  50% {
    -webkit-transform: translateX(4.5rem) scale(0.6);
            transform: translateX(4.5rem) scale(0.6);
  }
  75% {
    -webkit-transform: translateX(7.5rem) scale(0.5);
            transform: translateX(7.5rem) scale(0.5);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
@keyframes animate-to-5 {
  25% {
    -webkit-transform: translateX(1.5rem) scale(0.75);
            transform: translateX(1.5rem) scale(0.75);
  }
  50% {
    -webkit-transform: translateX(4.5rem) scale(0.6);
            transform: translateX(4.5rem) scale(0.6);
  }
  75% {
    -webkit-transform: translateX(7.5rem) scale(0.5);
            transform: translateX(7.5rem) scale(0.5);
  }
  95% {
    -webkit-transform: translateX(0rem) scale(1);
            transform: translateX(0rem) scale(1);
  }
}
kbd {
	display: inline-block;
	margin: 0 .1em;
	padding: .1em .6em;
	font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
	font-size: 11px;
	line-height: 1.4;
	color: #242729;
	text-shadow: 0 1px 0 #FFF;
	background-color: #e1e3e5;
	border: 1px solid #adb3b9;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(12,13,14,0.2),0 0 0 2px #FFF inset;
	white-space: nowrap;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<body>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
<div id="loading_screen">
  <div style="text-align: center" id="caption">
    <h1 style='color:rgba(100,100,100,0.2)'>fabric8-analytics</h1>
    <h1>Analysis In Progress</h1>
    <br />
    <br />
    <br />
  </div>
  <div>
    <div class="blob blob-0"></div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>
    <div class="blob blob-5"></div>
  </div>
  <br />
  <div style="text-align: center" id="tip">
    TIP: <span id="text">TIP</span>
  </div>
  <script>
    var items = [
      "Don't forget to check out diagnostics result from our LSP server",
      'Click on items in Stack Report to discover more information'
    ];
    var x = 0;
    $(document).ready(function() {
        // rotate more tips here
        var tip_setter = function() {
            $("#tip").fadeOut(500, function() {
              $("#tip > #text").html(items[x]);
              $("#tip").fadeIn(500);
              x = (x+1) % items.length;
              setTimeout(tip_setter, 10000);
            });
        };
        
        tip_setter();
      }
    );
  </script>
</div>
</body></html>`;

const header = `
<link href="https://fonts.googleapis.com/css?family=Exo+2:100,400" rel="stylesheet"> 
<style>html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}

body {
  background: #1e1e1e;
}

.caption {
  font-family: 'Exo 2', sans-serif;
  font-weight: 100;
  padding-left: 4px;
}

.top-caption {
  border-bottom: 1px solid #555;
  width: 95%;
}

.font {
    font-family: 'Exo 2', sans-serif;
}

.item {
  padding: 4px 0px;
  width: 95%;
}

.item-key {
  font-weight: 100;
  display: inline-block;
  width: 40%;
  padding-left: 4px;
}

.item-value {
  font-weight: 600;
  display: inline-block;
  width: 59%;
}

.item-value-2 {
  text-align: center;
  font-weight: 600;
  display: inline-block;
  width: 59%;
}

.item:nth-child(even) {background-color: rgba(255,255,255,0.05)}
/*.item-value:nth-child(even) {background-color: rgba(255,255,255,0.05)}*/

.grid {
  font-family: 'Exo 2', sans-serif;
  height: 70px;
}

.grid-left {
  width: 35%;
  font-weight: 600;
  line-height: 0.9em;
  padding: 1.5em;
  display: inline-block;
  float: left;
  background-color: rgba(255,0,0,0.075);
}

.grid-right {
  width: 35%;
  font-weight: 600;
  line-height: 0.9em;
  padding: 1.5em;
  display: inline-block;
  float: right;
  background-color: rgba(100,100,100,0.1);
  margin-right: 5%;
}

.rm {
  width: 95%;
  background-color: rgba(100, 100, 100, 0.1);
  font-family: 'Exo 2', sans-serif;
  cursor: pointer;
}
/*
.rm:nth-child(even) {
  background-color: #fff;
}*/
.rm-even {
  background-color: rgba(100, 100, 100, 0.3);
}

.rm-origin {
  padding: 4px 0px;
  padding-left: 4px;
  display: inline-block;
  width: 30%;
}
.rm-name {
  width: 30%;
  padding: 4px 0px;
  display: inline-block;
  font-weight: bold;
}
.rm-score {
  float: right;
  padding: 4px 0px;
  padding-right: 4px;
  display: inline-block;
}

.high {
  font-weight: bold;
  color: #00aa00;
}

.medium {
}

.low {
  color: #aa2222;
}

.extra {
  width: 95%;
  background-color: rgba(0,100,0,0.1);
}
.extra-op {
  padding: 4px 0px;
  padding-left: 4px;
  display: inline-block;
  font-weight: 800;
  width: 5%;
}
.extra-name {
  padding: 4px 0px;
  padding-left: 4px;
  display: inline-block;
}
.extra:nth-child(odd) {background-color: rgba(0,150,0,0.1);}

.missing {
  width: 95%;
  background-color: rgba(100,0,0,0.1);
}
.missing-op {
  padding: 4px 0px;
  padding-left: 4px;
  display: inline-block;
  font-weight: 800;
  width: 5%;
}
.missing-name {
  padding: 4px 0px;
  padding-left: 4px;
  display: inline-block;
}
.missing:nth-child(odd) {background-color: rgba(150,0,0,0.1);}

.resolve {
  width: 91%;
  background-color: rgba(60, 200, 60, 0.3);
  font-family: 'Exo 2', sans-serif;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  padding: 2%;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<body>
<div class='top-caption'>
  <h1 class='caption'>Stack Analysis Report</h1>
</div>
`;

//const body12 = `<f8-app>Loading...</f8-app>`;
const footer = '</body>';

let render_project_info = (sa) => {
  const result = sa.result[0];
  return `<div class='item-list'>
            <div class='item'><div class='item-key'>Analysis finished</div><div class='item-value'>${sa.finished_at}</div></div>
            <div class='item'><div class='item-key'>Distinct Licenses</div><div class='item-value'>${result.user_stack_info.distinct_licenses}</div></div>
            <div class='item'><div class='item-key'>Ecosystem</div><div class='item-value'>${result.user_stack_info.ecosystem}</div></div>
          </div>
          <div>
	          <p>To view detail report <a href="index.html" target="_self">Click here</a> use ID as ${sa.request_id}</p>
          </div>`;
};

let render_project_failure = () => {
  //const result = sa.result[0];
  return `<div>
	          <p>Analysis failed!!</p>
          </div>`;
};

let render_stack_iframe = (sa) => {
  const result = sa.result[0];
  return ` <iframe width="100%" height="100%" frameborder="0" src="http://ops-portal-v2-ops-portal-ide.dev.rdu2c.fabric8.io/#/analyze/${sa.request_id}?interframe=true" id="frame2" name="frame2"></iframe>`
}

	class TextDocumentContentProvider implements vscode.TextDocumentContentProvider {
		private _onDidChange = new vscode.EventEmitter<vscode.Uri>();
		private _loading = true;
		private _output = null;

		public provideTextDocumentContent(uri: vscode.Uri): string {
			if (this._loading) {
      			return loader;
    		} else {
            if(this._output){
              let r = header;
      			  //r += render_project_info(this._output);
              r += render_stack_iframe(this._output)
      			  r += footer;
      			  return r;
            } else {
              let r = header;
      			  r += render_project_failure();
      			  r += footer;
      			  return r;
            }
      			
    		}
		}

		get onDidChange(): vscode.Event<vscode.Uri> {
			return this._onDidChange.event;
		}

		public update(uri: vscode.Uri) {
			this._onDidChange.fire(uri);
		}

		public signal(uri: vscode.Uri, data: string) {
    		this._loading = false;
    		this._output = data;
    		this.update(uri);
  		}

      public signalInit(uri: vscode.Uri, data: string) {
    		this._loading = true;
    		this._output = data;
    		this.update(uri);
  		}
	}

	/**************** START :: Stack analysis call *******************/

	const request = require('request');
	let stack_analysis_requests = new Map<String, String>();
	let stack_analysis_responses = new Map<String, String>();
  let STACK_API_TOKEN: string = '';

  const STACK_API_URL: string = "https://recommender.api.openshift.io/api/v1/stack-analyses"

	let stack_collector = (file_uri, id, cb) => {
	
	const options = {};
    options['uri'] = `${STACK_API_URL}/${id}`;
    options['headers'] = {'Authorization': 'Bearer ' + STACK_API_TOKEN};
    request.get(options, (err, httpResponse, body) => {
      if (httpResponse.statusCode == 200 || httpResponse.statusCode == 202) {
        let data = JSON.parse(body);
        if (!data.hasOwnProperty("error")) {
			      vscode.window.showInformationMessage('Succsfully analysed your stack!!');
            stack_analysis_responses.set(file_uri, data);
            cb(data);
        }
        else {
            if (httpResponse.statusCode == 202) {
                vscode.window.showInformationMessage('Analysis in progress ...');
                setTimeout(() => { stack_collector(file_uri, id, cb); }, 5000);
            }
        }
      } else {
           vscode.window.showErrorMessage(`Failed to trigger stack analysis , Status:  ${httpResponse.statusCode} `);
           cb(null);
      }
    });
	};

	let get_stack_metadata = (file_uri, contextData, cb) => {
    // if (file_uri in stack_analysis_requests) {
    //     return;
    // }
    let manifest_array: any = ["requirements.txt","package.json","pom.xml"];
    let manifest_mime_type: any = {"requirements.txt" : "text/plain","package.json" : "application/json" ,"pom.xml" : "text/xml"};
    let thatContext: any;

    let file_uri_formatted: string = file_uri._formatted;
    let file_uri_split = file_uri_formatted.split("/");
    let file_uri_split_len: number = file_uri_split.length;
    if(file_uri_split_len > 0){
      let file_name:string = file_uri_split[file_uri_split_len - 1];
      if(manifest_array.indexOf(file_name) > -1){
         let form_data = {
          'manifest[]': [{
                value: contextData.manifest,
                options: {
                    filename: file_name,
                    contentType: manifest_mime_type[file_name]
                }
            }],
          'filePath[]': [file_uri_formatted],
           origin: contextData.origin || 'lsp'
          };
          const options = {};
          options['uri'] = `${STACK_API_URL}`;
          options['headers'] = {'Authorization': 'Bearer ' + STACK_API_TOKEN};
	        options['formData'] = form_data;
          thatContext = context;
    
          request.post(options, (err, httpResponse, body) => {
          if ((httpResponse.statusCode == 200 || httpResponse.statusCode == 202)) {
            let resp = JSON.parse(body);
            if (resp.error === undefined && resp.status == 'success') {
                stack_analysis_requests[file_uri] = resp.id;
                vscode.window.showInformationMessage(`Analyzing your stack, id ${resp.id}`);
				        //88a169f7c2364dc89cf10c26a274af3a resp.id
                setTimeout(() => { stack_collector(file_uri, resp.id , cb); }, 25000);
            } else {
                vscode.window.showErrorMessage(`Failed :: ${resp.error }, Status: ${httpResponse.statusCode}`);
                cb(null);
            }
          } else if(httpResponse.statusCode == 401){
              thatContext.globalState.update('lastTagged', '');
              vscode.window.showErrorMessage(`Looks like your token is not proper, kindly re-run stack analysis`);
              cb(null);
          } else {   
            vscode.window.showErrorMessage(`Failed to trigger stack analysis, Status: ${httpResponse.statusCode}`);
            cb(null);
          }
          });
        } else {
          vscode.window.showErrorMessage(`Failed to trigger stack analysis as file :  ${file_name} is not a valid manifest file`);
          provider.signalInit(file_uri,null);
        }
    }
	};

	/**************** END :: Stack analysis call *******************/


	let provider = new TextDocumentContentProvider();
	let registration = vscode.workspace.registerTextDocumentContentProvider('fabric8-analytics-widget', provider);

	let disposable = vscode.commands.registerCommand('extension.fabric8AnalyticsWidget', () => {
		let editor = vscode.window.activeTextEditor;
    let text = editor.document.getText();

		// get_stack_metadata(editor.document.uri, {manifest: text, origin: 'lsp'}, (data) => { provider.signal(previewUri, data) });
    provider.signalInit(previewUri,null);

    let answer1: string;
    let options = {
      prompt: "Action: ",
      placeHolder: "Please provide your auth token"
    }

    let lastTagged = context.globalState.get('lastTagged', '');
    if(!lastTagged) {
      vscode.window.showInputBox(options).then(value => {
        if (!value) return;
        STACK_API_TOKEN = value;
        process.env['RECOMMENDER_API_TOKEN'] = STACK_API_TOKEN;
        context.globalState.update('lastTagged', STACK_API_TOKEN);
        return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.One, 'fabric8-analytics stack report').then((success) => {
          get_stack_metadata(editor.document.uri, {manifest: text, origin: 'lsp'}, (data) => { provider.signal(previewUri, data) });
          provider.signalInit(previewUri,null);
           }, (reason) => {
		 	    vscode.window.showErrorMessage(reason);
        });
      });
  } else {
       STACK_API_TOKEN = lastTagged;
       process.env['RECOMMENDER_API_TOKEN'] = lastTagged;
       return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.One, 'fabric8-analytics stack report').then((success) => {
        get_stack_metadata(editor.document.uri, {manifest: text, origin: 'lsp'}, (data) => { provider.signal(previewUri, data) });
        provider.signalInit(previewUri,null);
      }, (reason) => {
		 	  vscode.window.showErrorMessage(reason);
		  });
    }
	});

	let highlight = vscode.window.createTextEditorDecorationType({ backgroundColor: 'rgba(0,0,0,.35)' });
	context.subscriptions.push(disposable, registration, disposableLSp);
}
