import '../tiptap.css'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Commands from './suggestion/commands'
import getSuggestionItems from './suggestion/items'
import renderItems from './suggestion/renderItems'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        undo
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        redo
      </button>
    </>
  )
}

export default ({document, content, title}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Commands.configure({
        suggestion: {
          items: getSuggestionItems,
          render: renderItems
        }
      })
    ],
    content: `<h1>${title}</h1>
      <p>${content}</p>
    `,
    onUpdate: ({ editor }) => {
      const html_parsed = editor.getHTML()
      let title = html_parsed.match(/<h1>(.*?)<\/h1>/)[0]
      let content = html_parsed.replace(title,"")

      console.log(title)
      console.log(content)
      
      fetch(`documents/${document.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          "title": title,
          "content": content
        }
      })
      // send the content to an API here
    },
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}