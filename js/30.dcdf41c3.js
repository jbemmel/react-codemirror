(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./node_modules/codemirror/mode/ttcn-cfg/ttcn-cfg.js":function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=e.split(" "),T=0;T<n.length;++T)t[n[T]]=!0;return t}e.defineMode("ttcn-cfg",function(e,t){var n,T=e.indentUnit,E=t.keywords||{},C=t.fileNCtrlMaskOptions||{},i=t.externalCommands||{},r=t.multiLineStrings,o=!1!==t.indentStatements,N=/[\|]/;function I(e,t){var T=e.next();if('"'==T||"'"==T)return t.tokenize=function(e){return function(t,n){for(var T,E=!1,C=!1;null!=(T=t.next());){if(T==e&&!E){var i=t.peek();i&&("b"!=(i=i.toLowerCase())&&"h"!=i&&"o"!=i||t.next()),C=!0;break}E=!E&&"\\"==T}return(C||!E&&!r)&&(n.tokenize=null),"string"}}(T),t.tokenize(e,t);if(/[:=]/.test(T))return n=T,"punctuation";if("#"==T)return e.skipToEnd(),"comment";if(/\d/.test(T))return e.eatWhile(/[\w\.]/),"number";if(N.test(T))return e.eatWhile(N),"operator";if("["==T)return e.eatWhile(/[\w_\]]/),"number sectionTitle";e.eatWhile(/[\w\$_]/);var o=e.current();return E.propertyIsEnumerable(o)?"keyword":C.propertyIsEnumerable(o)?"negative fileNCtrlMaskOptions":i.propertyIsEnumerable(o)?"negative externalCommands":"variable"}function _(e,t,n,T,E){this.indented=e,this.column=t,this.type=n,this.align=T,this.prev=E}function A(e,t,n){var T=e.indented;return e.context&&"statement"==e.context.type&&(T=e.context.indented),e.context=new _(T,t,n,null,e.context)}function U(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new _((e||0)-T,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var T=t.context;if(e.sol()&&(null==T.align&&(T.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;n=null;var E=(t.tokenize||I)(e,t);if("comment"==E)return E;if(null==T.align&&(T.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=T.type)if("{"==n)A(t,e.column(),"}");else if("["==n)A(t,e.column(),"]");else if("("==n)A(t,e.column(),")");else if("}"==n){for(;"statement"==T.type;)T=U(t);for("}"==T.type&&(T=U(t));"statement"==T.type;)T=U(t)}else n==T.type?U(t):o&&(("}"==T.type||"top"==T.type)&&";"!=n||"statement"==T.type&&"newstatement"==n)&&A(t,e.column(),"statement");else U(t);return t.startOfLine=!1,E},electricChars:"{}",lineComment:"#",fold:"brace"}}),e.defineMIME("text/x-ttcn-cfg",{name:"ttcn-cfg",keywords:t("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:t("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:t("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0})}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);