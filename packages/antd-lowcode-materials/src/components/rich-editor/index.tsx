// 富文本组件
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import React, { useState, useEffect, createElement } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import type { IDomEditor, IEditorConfig } from '@wangeditor/editor';

const toolbarConfig = {
  excludeKeys: [
    'group-image',
    'group-video',
    'group-more-style',
    'insertTable',
    'codeBlock',
    'todo',
    'emotion',
    'insertLink',
    'blockquote',
    'divider',
    'fullScreen',
  ],
};
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
  autoFocus: false,
};

const RichEditor = ({ onChange, value, style, readOnly, ...restProps }) => {
  const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  useEffect(() => {
    editor?.disable();
  }, [readOnly]);

  return (
    <div style={style}>
      <Toolbar
        editor={editor}
        defaultConfig={{ ...toolbarConfig }}
        mode="simple"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={{ ...editorConfig, ...restProps }}
        value={value}
        onChange={(editorInstance) => {
          onChange(editorInstance?.getHtml());
        }}
        onCreated={setEditor}
        mode="default"
        style={{ height: '300px' }}
      />
    </div>
  );
};

export default RichEditor;
