const getSuggestionItems = (query) => {
    console.log(query.query)
    return [
      {
        title: "h1",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 1 })
            .run();
        }
      },
      {
        title: "h2",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 2 })
            .run();
        }
      },
      {
        title: "h3",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 3 })
            .run();
        }
      },
      {
        title: "h4",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 4 })
            .run();
        }
      },
      {
        title: "Bold",
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setMark("bold").run();
        }
      },
      {
        title: "Block Quote",
        command: ({ editor, range }) => {
          editor.chain().focus().toggleBlockquote().run();
        }
      },
      {
        title: "Bullet List",
        command: ({editor}) => {(editor.chain().focus().toggleBulletList().run());
        }
      },
      {
        title: "Horizontal Rule",
        command: ({ editor, range }) => {
          editor.chain().focus().setHorizontalRule().run();
        }
      },
      {
        title: "Italic",
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setMark("italic").run();
        }
      },
      {
        title: "Paragraph",
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setParagraph().run();
        }
      },
      {
        title: "Ordered List",
        command: ({editor}) => {
          editor.chain().focus().toggleOrderedList().run();
        }
      },
      {
        title: "Code Block",
        command: ({editor}) => {
          editor.chain().focus().toggleCodeBlock().run();
        }
      }
    ].filter((item) => item.title.toLowerCase().startsWith(query.query.toLowerCase()))
  };
  
  export default getSuggestionItems;
  