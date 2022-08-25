import '../tiptap.css'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Commands from './suggestion/commands'
import getSuggestionItems from './suggestion/items'
import renderItems from './suggestion/renderItems'


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
    }
  },
  )

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}