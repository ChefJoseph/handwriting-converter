const getSuggestionItems = (query) => {
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
          editor.chain().focus().deleteRange(range).toggleBlockquote().run();
        }
      },
      {
        title: "Bullet List",
        command: ({editor, range}) => {(editor.chain().focus().deleteRange(range).toggleBulletList().run());
        }
      },
      {
        title: "Horizontal Rule",
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHorizontalRule().run();
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
        command: ({editor, range}) => {
          editor.chain().focus().deleteRange(range).toggleOrderedList().run();
        }
      },
      {
        title: "Code Block",
        command: ({editor, range}) => {
          editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
        }
      },
    ].filter((item) => item.title.toLowerCase().startsWith(query.query.toLowerCase()))
  };
  
  export default getSuggestionItems;
  