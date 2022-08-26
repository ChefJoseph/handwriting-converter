import '../tiptap.css'

import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import Commands from './suggestion/commands'
import getSuggestionItems from './suggestion/items'
import renderItems from './suggestion/renderItems'


export default ({document, content, title}) => {

  const [update, setUpdate] = useState(false)

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
    content: `${title}
      ${content}`,
    onUpdate: ({ editor }) => {
      const html_parsed = editor.getHTML()
      let title = html_parsed.match(/<h1>(.*?)<\/h1>/) ? html_parsed.match(/<h1>(.*?)<\/h1>/)[0] : "No Title"
      let content = html_parsed.replace(title,"")
      fetch(`/documents/${document.id}`,{
        method: "PATCH",
        headers: {
         "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "title": `${title}`,
          "content": `${content}`
        })
      })

      setUpdate(true)
    }
  },
  )

  return (
    <>
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>
        <button
          onClick={() =>  editor.chain().focus().toggleBlockquote().run()}
          className = {editor.isActive('blockquote') ? 'is-active' : ''}
        >
            Block Quote
        </button>
      </BubbleMenu>}
      <EditorContent editor={editor} />
    </>
  )
}