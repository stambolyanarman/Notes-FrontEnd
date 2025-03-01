import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function CreateNoteForm({onCreate}) {
  const [note, setNote] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setNote(null);
    onCreate(note);
  }; 

    return (
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
        <h3 className="font-bold text-xl">Create Note</h3>
        <Input 
          placeholder="Note Name"
          value={note?.title ?? ""} 
          onChange={(e) => setNote({...note, title: e.target.value})} />
        <Textarea 
          placeholder="Description"
          value={note?.description ?? ""} 
          onChange={(e) => setNote({...note, description: e.target.value})} />
        <Button type="submit" colorPalette="teal">Create</Button>
    </form>
    )
  }