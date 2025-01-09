import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(tag) {
    setTags([...tags, tag]);
    // console.log("funktioniert", typeof tag);
  }

  function handleDeleteTag(tagToDelete) {
    const tagsToKeep = tags.filter((tag) => tag !== tagToDelete);
    setTags(tagsToKeep);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
