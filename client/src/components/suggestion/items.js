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
    ].filter((item) => item.title.toLowerCase().startsWith(query.query.toLowerCase()))
  };
  
  export default getSuggestionItems;
  