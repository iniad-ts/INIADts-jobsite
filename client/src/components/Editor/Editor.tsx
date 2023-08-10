import { useState } from 'react';

const rTabs = (str: string) => str.trim().replace(/^ {4}/gm, '');

import Editor from '@monaco-editor/react';

const examples = {
  userinfo: rTabs(`
    //テスト用
    const username = {
      firstName = "hoge";
      lastName = "huga";
      birth = new Date("2003-11-26"),
    }
  `),
};

function MonacoEditor() {
  const [language, setLanguage] = useState('javascript');

  return (
    <>
      <Editor
        height="100%"
        theme={'vs-dark'}
        language={language}
        value={examples.userinfo}
        options={{ readOnly: true }} // ここで読み取り専用に設定
      />
    </>
  );
}

export default MonacoEditor;
